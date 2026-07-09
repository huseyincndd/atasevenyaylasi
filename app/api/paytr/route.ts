import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getProductByIdFromDB } from "@/lib/products";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { cart, user } = body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({ error: "Sepet boş." }, { status: 400 });
    }

    if (!user || !user.email || !user.name || !user.phone || !user.address) {
      return NextResponse.json({ error: "Kullanıcı bilgileri eksik." }, { status: 400 });
    }

    const merchant_id = process.env.PAYTR_MERCHANT_ID;
    const merchant_key = process.env.PAYTR_MERCHANT_KEY;
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT;
    const site_url = process.env.NEXT_PUBLIC_SITE_URL || "https://atasevenyaylasi.net";

    if (!merchant_id || !merchant_key || !merchant_salt) {
      return NextResponse.json({ error: "PayTR kimlik bilgileri eksik (.env)." }, { status: 500 });
    }

    // GÜVENLİK ADIMI: Fiyatları frontend'den ALMIYORUZ! 
    // Backend kataloğundan (Source of Truth) fiyatları çekip hesaplıyoruz.
    let calculatedTotal = 0;
    const paytrBasket: any[] = [];

    for (const item of cart) {
      const realProduct = await getProductByIdFromDB(item.id);
      if (!realProduct) {
        return NextResponse.json({ error: `Geçersiz ürün: ${item.id}` }, { status: 400 });
      }

      const quantity = parseInt(item.quantity) || 1;
      calculatedTotal += realProduct.price * quantity;

      // PayTR sepet formatı: [ "Ürün Adı", "Birim Fiyatı", "Adet" ]
      paytrBasket.push([
        realProduct.name,
        realProduct.price.toString(),
        quantity
      ]);
    }

    // PayTR toplam tutarı kuruş cinsinden (TL * 100) ister.
    const payment_amount = calculatedTotal * 100;
    
    // Benzersiz Sipariş Numarası Oluşturma (PayTR sadece harf ve rakam kabul eder, alt tire vb. yasaktır)
    const merchant_oid = `ORDER${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const user_ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const user_name = user.name;
    const user_address = user.address;
    const user_phone = user.phone;
    const user_basket = JSON.stringify(paytrBasket);
    const user_email = user.email;

    const no_installment = "1"; // Taksit istemiyorsak 1 (opsiyonel)
    const max_installment = "0"; // 0: tüm taksitler açık
    const currency = "TL";
    const test_mode = "1"; // 1: Test modu açık, Canlıya geçerken bunu '0' yapacağız veya tamamen panelden kontrol edeceğiz.
    
    // Güvenlik: Hash oluşturma (Token için)
    // Şifreleme mantığı: merchant_id + user_ip + merchant_oid + email + payment_amount + user_basket + no_installment + max_installment + currency + test_mode
    const hashString = `${merchant_id}${user_ip}${merchant_oid}${user_email}${payment_amount}${user_basket}${no_installment}${max_installment}${currency}${test_mode}${merchant_salt}`;
    
    const tokenHash = crypto
      .createHmac("sha256", merchant_key)
      .update(hashString)
      .digest("base64");

    // PayTR'a İstek Atmadan Önce Siparişi Veritabanına Kaydet (PENDING)
    await prisma.order.create({
      data: {
        orderNumber: merchant_oid,
        customerName: user_name,
        customerEmail: user_email,
        customerPhone: user_phone,
        customerAddress: user_address,
        totalAmount: calculatedTotal,
        status: "PENDING",
        items: cart, // Sepet detayını JSON olarak saklıyoruz
      }
    });

    const formData = new URLSearchParams();
    formData.append("merchant_id", merchant_id);
    formData.append("user_ip", user_ip);
    formData.append("merchant_oid", merchant_oid);
    formData.append("email", user_email);
    formData.append("payment_amount", payment_amount.toString());
    formData.append("paytr_token", tokenHash);
    formData.append("user_basket", user_basket);
    formData.append("debug_on", "1");
    formData.append("no_installment", no_installment);
    formData.append("max_installment", max_installment);
    formData.append("user_name", user_name);
    formData.append("user_address", user_address);
    formData.append("user_phone", user_phone);
    formData.append("merchant_ok_url", `${site_url}/checkout/basarili`);
    formData.append("merchant_fail_url", `${site_url}/checkout/basarisiz`);
    formData.append("timeout_limit", "30");
    formData.append("currency", currency);
    formData.append("test_mode", test_mode);

    const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const result = await response.json();

    if (result.status === "success") {
      return NextResponse.json({ token: result.token });
    } else {
      console.error("PayTR Token Hatası:", result.reason);
      return NextResponse.json({ error: result.reason || "Token alınamadı" }, { status: 500 });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}

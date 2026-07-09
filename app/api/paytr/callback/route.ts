import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    // PayTR Webhook verileri x-www-form-urlencoded olarak gönderir
    const textBody = await req.text();
    const formData = new URLSearchParams(textBody);
    
    const merchant_oid = formData.get("merchant_oid");
    const status = formData.get("status");
    const total_amount = formData.get("total_amount");
    const hash = formData.get("hash");
    const test_mode = formData.get("test_mode");
    const payment_type = formData.get("payment_type");
    const payment_amount = formData.get("payment_amount");
    const failed_reason_code = formData.get("failed_reason_code");
    const failed_reason_msg = formData.get("failed_reason_msg");

    const merchant_key = process.env.PAYTR_MERCHANT_KEY;
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT;

    if (!merchant_key || !merchant_salt) {
      console.error("PayTR kimlik bilgileri eksik (.env)");
      return new NextResponse("OK"); // PayTR'a sürekli hata dönmemesi için her durumda OK denmelidir. (Geçici)
    }

    // Güvenlik Hash Doğrulaması (Gelen isteğin gerçekten PayTR'dan geldiğinden emin olmak için)
    // Şifreleme mantığı: merchant_oid + merchant_salt + status + total_amount
    const hashString = `${merchant_oid}${merchant_salt}${status}${total_amount}`;
    
    const tokenHash = crypto
      .createHmac("sha256", merchant_key)
      .update(hashString)
      .digest("base64");

    if (tokenHash !== hash) {
      console.error("PAYTR HASH HATASI: Gelen hash doğrulanamadı.");
      // Hash uyuşmazsa sahte bir istek olabilir. PayTR dokümanı gereği hata basılabilir ancak 
      // güvenliği ihlal edenlere OK dönüp görmezden gelmek de mümkündür.
      return new NextResponse("PAYTR_ERROR_HASH_MISMATCH", { status: 400 });
    }

    if (status === "success") {
      // ÖDEME BAŞARILI
      console.log("ÖDEME BAŞARILI! Sipariş No:", merchant_oid, "Tutar:", total_amount);
      
      // BURADA VERİTABANINA KAYIT VE MÜŞTERİYE MAİL ATMA GİBİ İŞLEMLER YAPILABİLİR.
      // Örn: db.orders.update({ id: merchant_oid }, { status: 'PAID' })
      
    } else {
      // ÖDEME BAŞARISIZ
      console.error("ÖDEME BAŞARISIZ. Sebep:", failed_reason_msg, "Sipariş No:", merchant_oid);
      
      // BURADA VERİTABANINDAKİ SİPARİŞİ İPTAL EDEBİLİR VEYA KAYDEDEBİLİRSİNİZ.
      // Örn: db.orders.update({ id: merchant_oid }, { status: 'FAILED' })
    }

    // Her iki durumda da PAYTR'a OK yanıtı dönmek ZORUNLUDUR.
    // Aksi takdirde PayTR sürekli bildirim göndermeye devam eder.
    return new NextResponse("OK", { status: 200 });
    
  } catch (error) {
    console.error("Callback API Error:", error);
    // Sistemsel çökme olsa bile PayTR'ın döngüye girmemesi için "OK" dönülür.
    return new NextResponse("OK", { status: 200 });
  }
}

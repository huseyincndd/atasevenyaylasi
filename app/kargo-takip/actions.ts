"use server";
import prisma from "@/lib/prisma";

export async function checkOrderStatus(orderNumber: string) {
  if (!orderNumber) {
    return { error: "Lütfen sipariş takip kodunu giriniz." };
  }

  try {
    const order = await prisma.order.findFirst({
      where: {
        orderNumber: {
          equals: orderNumber.trim(),
          mode: 'insensitive'
        }
      },
      select: {
        orderNumber: true,
        status: true,
        createdAt: true,
        customerName: true,
        customerAddress: true,
        trackingNumber: true
      }
    });

    if (!order) {
      return { error: "Bu koda ait bir sipariş bulunamadı. Lütfen kodu kontrol edin." };
    }

    // İsim maskeleme (Örn: A** Y**)
    const nameParts = order.customerName.split(" ");
    const maskedName = nameParts.map(part => part.charAt(0) + "*".repeat(part.length - 1)).join(" ");

    // Adres maskeleme (Sadece İlçe/İl kısmını gösterme)
    let maskedAddress = "Adres bilgisi gizlidir.";
    if (order.customerAddress) {
      const addressParts = order.customerAddress.split(/[\/,]/);
      if (addressParts.length > 1) {
        maskedAddress = addressParts.slice(-2).join(",").trim(); // Son 2 parçayı (ilçe, il) al
      } else {
        maskedAddress = "Adres bilgisi sistemde kayıtlı (Gizli)";
      }
    }

    return { 
      success: true, 
      order: {
        orderNumber: order.orderNumber,
        status: order.status,
        date: order.createdAt,
        maskedName,
        maskedAddress,
        trackingNumber: order.trackingNumber
      }
    };
  } catch (error) {
    console.error("Order search error:", error);
    return { error: "Sistemde geçici bir hata oluştu. Lütfen sonra tekrar deneyin." };
  }
}

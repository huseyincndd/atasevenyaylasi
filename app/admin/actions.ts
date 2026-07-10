"use server";

import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function loginAdmin(password: string) {
  const correctPassword = process.env.ADMIN_PASSWORD || "ataseven123";
  if (password === correctPassword) {
    const cookieStore = await cookies();
    cookieStore.set("admin_token", password, { httpOnly: true, path: "/" });
    return { success: true };
  }
  return { success: false, error: "Hatalı şifre" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
  revalidatePath("/admin");
}

export async function updateOrderStatus(orderId: string, newStatus: string) {
  try {
    await prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus }
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Sipariş güncellenemedi." };
  }
}

export async function updateProductPrice(productId: string, newPrice: number, oldPrice?: number | null) {
  try {
    const finalOldPrice = oldPrice && oldPrice > 0 ? oldPrice : null;
    await prisma.$executeRaw`UPDATE "Product" SET "price" = ${newPrice}, "oldPrice" = ${finalOldPrice} WHERE "id" = ${productId}`;
    // Anasayfadaki fiyatların güncellenmesi için anasayfayı revalidate ediyoruz
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Fiyat güncellenemedi." };
  }
}

export async function updateOrderMessageStatus(orderId: string, status: boolean) {
  try {
    // Dev server açıkken Windows'ta Prisma generate hata verebildiği için
    // type check'i atlamak adına executeRaw kullanıyoruz. DB'de sütun var.
    await prisma.$executeRaw`UPDATE "Order" SET "isMessageSent" = ${status} WHERE "id" = ${orderId}`;
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Mesaj durumu güncellenemedi." };
  }
}

export async function saveTrackingNumber(formData: FormData) {
  try {
    const orderId = formData.get("orderId") as string;
    const trackingNumber = formData.get("trackingNumber") as string;
    
    if (!orderId) {
      console.error("Sipariş ID eksik.");
      return;
    }

    await prisma.order.update({
      where: { id: orderId },
      data: { trackingNumber: trackingNumber || null } // Boş bırakıldıysa null yap
    });

    revalidatePath(`/admin/orders/${orderId}`);
  } catch (error) {
    console.error("Takip numarası kaydedilemedi:", error);
  }
}


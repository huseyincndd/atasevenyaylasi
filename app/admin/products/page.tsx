import React from "react";
import prisma from "@/lib/prisma";
import { ProductManager } from "../ProductManager";

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "asc" }
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-800">Ürün & Fiyat Yönetimi</h1>
        <p className="text-slate-500">Sitenizdeki tüm ürünlerin fiyatlarını anlık olarak buradan güncelleyebilirsiniz.</p>
      </div>

      <ProductManager initialProducts={products} />
    </div>
  );
}

import React from "react";
import prisma from "@/lib/prisma";
import { OrderList } from "./OrderList";
import { ProductManager } from "./ProductManager";
import { LogOut, Package, ShoppingBag } from "lucide-react";
import { logoutAdmin } from "./actions";

export const AdminDashboard = async () => {
  // Veritabanından Siparişleri ve Ürünleri Çekiyoruz
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" }
  });

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "asc" }
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white p-6 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
            <ShoppingBag size={20} />
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-tight">Ataseven Yönetim</h1>
            <p className="text-xs text-slate-400">Sipariş & Ürün Paneli</p>
          </div>
        </div>
        <form action={logoutAdmin}>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium bg-slate-800 px-4 py-2 rounded-lg">
            <LogOut size={16} /> Çıkış Yap
          </button>
        </form>
      </nav>

      <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-12">
        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center"><Package size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Toplam Sipariş</p>
              <h3 className="text-2xl font-bold text-slate-800">{orders.length}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><ShoppingBag size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Ödenmiş Siparişler</p>
              <h3 className="text-2xl font-bold text-slate-800">{orders.filter(o => o.status === "PAID" || o.status === "SHIPPED").length}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center"><span className="text-2xl font-bold">₺</span></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Toplam Ciro (Ödenen)</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {orders.filter(o => o.status === "PAID" || o.status === "SHIPPED").reduce((sum, o) => sum + o.totalAmount, 0).toLocaleString("tr-TR")} ₺
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2">
            <OrderList initialOrders={orders} />
          </div>
          <div className="xl:col-span-1">
            <ProductManager initialProducts={products} />
          </div>
        </div>

      </div>
    </div>
  );
};

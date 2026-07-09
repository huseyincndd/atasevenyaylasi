import React from "react";
import prisma from "@/lib/prisma";
import { OrderList } from "./OrderList";
import { Package, ShoppingBag } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-800">Sipariş Yönetimi</h1>
        <p className="text-slate-500">Tüm siparişleri, durumlarını ve müşteri detaylarını buradan takip edebilirsiniz.</p>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center"><Package size={24} /></div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Toplam Sipariş</p>
            <h3 className="text-2xl font-bold text-slate-800">{orders.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><ShoppingBag size={24} /></div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Ödenmiş Siparişler</p>
            <h3 className="text-2xl font-bold text-slate-800">{orders.filter(o => o.status === "PAID" || o.status === "SHIPPED").length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center"><span className="text-2xl font-bold">₺</span></div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Toplam Ciro (Ödenen)</p>
            <h3 className="text-2xl font-bold text-slate-800">
              {orders.filter(o => o.status === "PAID" || o.status === "SHIPPED").reduce((sum, o) => sum + o.totalAmount, 0).toLocaleString("tr-TR")} ₺
            </h3>
          </div>
        </div>
      </div>

      <OrderList initialOrders={orders} />
    </div>
  );
}

import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, MapPin, Package, CreditCard, Calendar, Clock, ShoppingBag, Truck } from "lucide-react";
import { saveTrackingNumber } from "../../actions";

export default async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = await prisma.order.findUnique({
    where: { id }
  });

  if (!order) {
    notFound();
  }

  const items = Array.isArray(order.items) ? order.items : [];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING": return <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-bold">Bekliyor</span>;
      case "PAID": return <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">Ödendi</span>;
      case "SHIPPED": return <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">Kargolandı</span>;
      case "FAILED": return <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-bold">İptal/Başarısız</span>;
      default: return <span>{status}</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Üst Kısım / Geri Butonu */}
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/admin"
          className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-600"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Sipariş Detayı</h1>
          <p className="text-slate-500 text-sm">#{order.orderNumber}</p>
        </div>
        <div className="ml-auto">
          {getStatusBadge(order.status)}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sol Kolon: Müşteri ve Adres */}
        <div className="lg:col-span-1 space-y-6">
          {/* Müşteri Kartı */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <User size={18} className="text-emerald-600" />
              Müşteri Bilgileri
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-400 text-xs">Ad Soyad</p>
                <p className="font-semibold text-slate-800">{order.customerName}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs">E-Posta</p>
                <p className="font-semibold text-slate-800">{order.customerEmail}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs">Telefon</p>
                <p className="font-semibold text-slate-800">{order.customerPhone}</p>
              </div>
            </div>
          </div>

          {/* Adres Kartı */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <MapPin size={18} className="text-emerald-600" />
              Teslimat Adresi
            </h3>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-700 leading-relaxed">
              {order.customerAddress}
            </div>
          </div>

          {/* Zaman Çizelgesi */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Clock size={18} className="text-emerald-600" />
              Zaman Bilgileri
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-slate-400" />
                <div>
                  <p className="text-slate-400 text-xs">Oluşturulma</p>
                  <p className="font-semibold text-slate-800">{new Date(order.createdAt).toLocaleString("tr-TR")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-slate-400" />
                <div>
                  <p className="text-slate-400 text-xs">Son Güncelleme</p>
                  <p className="font-semibold text-slate-800">{new Date(order.updatedAt).toLocaleString("tr-TR")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Kolon: Sepet ve Tutar */}
        <div className="lg:col-span-2 space-y-6">

          {/* Kargo Takip Kodu Giriş Kartı */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Truck size={18} className="text-emerald-600" />
              Kargo Takip Bilgisi (Müşteriye Gösterilir)
            </h3>
            
            <form action={saveTrackingNumber} className="flex flex-col sm:flex-row gap-3">
              <input type="hidden" name="orderId" value={order.id} />
              <input 
                type="text" 
                name="trackingNumber" 
                defaultValue={order.trackingNumber || ""}
                placeholder="Örn: 123456789012 (Yurtiçi/Aras Barkod)"
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-mono text-slate-800"
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-sm whitespace-nowrap"
              >
                Kaydet / Güncelle
              </button>
            </form>
            {order.trackingNumber && (
              <p className="mt-3 text-sm text-emerald-600 flex items-center gap-2 font-medium bg-emerald-50 w-fit px-3 py-1.5 rounded-lg">
                ✓ Kargo numarası kayıtlı: {order.trackingNumber}
              </p>
            )}
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              * Buraya gireceğiniz takip numarası, müşterinin kargo takip sayfasında gösterilecek ve kargosunun yola çıktığını anlayacaktır.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
              <ShoppingBag size={18} className="text-emerald-600" />
              Sipariş Edilen Ürünler
            </h3>
            
            <div className="space-y-4">
              {items.map((item: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-200 shadow-sm">
                      <Package size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.quantity} Adet</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-800">{(item.price * item.quantity).toLocaleString("tr-TR")} ₺</p>
                    <p className="text-xs text-slate-400">{item.price.toLocaleString("tr-TR")} ₺ / adet</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500">
                  <CreditCard size={20} />
                  <span className="font-medium">Genel Toplam</span>
                </div>
                <div className="text-3xl font-bold text-emerald-600">
                  {order.totalAmount.toLocaleString("tr-TR")} ₺
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

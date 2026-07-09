"use client";
import React, { useState } from "react";
import { checkOrderStatus } from "./actions";
import { Search, Package, MapPin, Clock, CheckCircle2, AlertCircle, Truck, Info } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function TrackingPage() {
  const [orderCode, setOrderCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!orderCode.trim()) {
      setError("Lütfen bir sipariş kodu giriniz.");
      return;
    }

    setLoading(true);
    const res = await checkOrderStatus(orderCode);
    
    if (res.error) {
      setError(res.error);
    } else {
      setResult(res.order);
    }
    setLoading(false);
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "PENDING":
        return { text: "Ödeme Bekleniyor", color: "text-amber-600", bg: "bg-amber-100", icon: <Clock size={24} /> };
      case "PAID":
        return { text: "Hazırlanıyor", color: "text-emerald-600", bg: "bg-emerald-100", icon: <Package size={24} /> };
      case "SHIPPED":
        return { text: "Kargoya Verildi", color: "text-blue-600", bg: "bg-blue-100", icon: <Truck size={24} /> };
      case "FAILED":
        return { text: "İptal / Başarısız", color: "text-rose-600", bg: "bg-rose-100", icon: <AlertCircle size={24} /> };
      default:
        return { text: "Bilinmiyor", color: "text-slate-600", bg: "bg-slate-100", icon: <Info size={24} /> };
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest-900/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6">
              <Package size={32} className="text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-4 tracking-tight">Kargom Nerede?</h1>
            <p className="text-slate-500 max-w-lg mx-auto">Sipariş takip kodunuzu girerek kargonuzun durumunu anlık olarak sorgulayabilirsiniz.</p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-12">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Search size={20} />
                  </div>
                  <input
                    type="text"
                    value={orderCode}
                    onChange={(e) => setOrderCode(e.target.value)}
                    placeholder="Sipariş Kodunuz (Örn: ATS-12345)"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono tracking-wider placeholder:font-sans placeholder:tracking-normal text-slate-800"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? "Sorgulanıyor..." : "Sorgula"}
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-6 bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl flex items-start gap-3 animate-fade-in-up">
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {result && (
              <div className="mt-10 animate-fade-in-up">
                <div className="border-t border-slate-100 pt-8">
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Sipariş No</p>
                      <p className="font-mono text-xl font-bold text-slate-800">{result.orderNumber}</p>
                    </div>
                    
                    <div className={`flex items-center gap-3 px-6 py-3 rounded-full ${getStatusInfo(result.status).bg}`}>
                      <div className={getStatusInfo(result.status).color}>
                        {getStatusInfo(result.status).icon}
                      </div>
                      <span className={`font-bold ${getStatusInfo(result.status).color}`}>
                        {getStatusInfo(result.status).text}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-3 mb-2 text-slate-500">
                        <CheckCircle2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Alıcı Bilgisi</span>
                      </div>
                      <p className="font-semibold text-slate-800">{result.maskedName}</p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-3 mb-2 text-slate-500">
                        <MapPin size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Teslimat Bölgesi</span>
                      </div>
                      <p className="font-semibold text-slate-800 capitalize">{result.maskedAddress}</p>
                    </div>
                  </div>

                  {result.trackingNumber && (
                    <div className="mt-4 bg-blue-50 border border-blue-100 p-6 rounded-2xl text-center">
                      <p className="text-blue-800 font-semibold mb-2">📦 Kargonuz Yola Çıktı!</p>
                      <p className="text-sm text-blue-600 mb-4">Aşağıdaki takip numarası ile kargo firmasının sitesinden anlık konumunu görebilirsiniz.</p>
                      <div className="inline-block bg-white px-6 py-3 rounded-xl border border-blue-200 shadow-sm">
                        <span className="font-mono text-xl font-bold text-blue-700 tracking-widest">{result.trackingNumber}</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 text-center">
                     <p className="text-xs text-slate-400">
                       Sipariş tarihi: {new Date(result.date).toLocaleDateString("tr-TR")} - Güvenliğiniz için bazı bilgiler gizlenmiştir.
                     </p>
                  </div>

                </div>
              </div>
            )}
          </div>

          <div className="mt-12 text-center text-slate-500 text-sm">
            Kargo süreciyle ilgili sorularınız için <a href="tel:+905325610367" className="text-emerald-600 font-bold hover:underline">WhatsApp</a> üzerinden bize ulaşabilirsiniz.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

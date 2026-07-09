import React from "react";
import Link from "next/link";
import { CheckCircle, Copy, PackageSearch } from "lucide-react";
import { CopyButton } from "@/app/checkout/basarili/CopyButton"; // We will create this client component

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { order } = await searchParams;
  const orderNumber = typeof order === 'string' ? order : null;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 max-w-lg w-full text-center relative z-10 animate-fade-in-up">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 relative animate-bounce-soft">
          <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-50"></div>
          <CheckCircle size={48} strokeWidth={2} />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">Ödeme Başarılı!</h2>
        <p className="text-slate-500 mb-8 text-lg leading-relaxed">
          Siparişiniz başarıyla alındı. Doğal ürünleriniz özenle paketlenip en kısa sürede adresinize doğru yola çıkacak.
        </p>

        {orderNumber && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <PackageSearch size={16} /> Sipariş Takip Kodunuz
            </p>
            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <span className="font-mono text-xl font-bold text-emerald-600 tracking-wider">
                {orderNumber}
              </span>
              <CopyButton text={orderNumber} />
            </div>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Bu kodu kullanarak web sitemizdeki <Link href="/kargo-takip" className="text-emerald-600 font-bold hover:underline">Sipariş Takip</Link> sayfasından kargonuzun durumunu anlık olarak öğrenebilirsiniz.
            </p>
          </div>
        )}
        
        <Link
          href="/"
          className="inline-flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}

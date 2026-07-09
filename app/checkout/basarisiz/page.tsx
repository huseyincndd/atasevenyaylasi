import React from "react";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function FailPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 max-w-lg w-full text-center relative z-10 animate-fade-in-up">
        <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <XCircle size={48} strokeWidth={2} />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">Ödeme Başarısız</h2>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed">
          İşleminiz sırasında bir hata oluştu veya ödemeniz reddedildi. Lütfen bilgilerinizi kontrol edip tekrar deneyin.
        </p>
        
        <Link
          href="/checkout"
          className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Ödemeyi Tekrar Dene
        </Link>
      </div>
    </div>
  );
}

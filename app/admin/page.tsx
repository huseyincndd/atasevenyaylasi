import React from "react";
import { cookies } from "next/headers";
import { Lock } from "lucide-react";
import { AdminDashboard } from "./AdminDashboard";
import { LoginForm } from "./LoginForm";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const correctPassword = process.env.ADMIN_PASSWORD || "ataseven123";

  if (token === correctPassword) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="bg-slate-800/80 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-slate-700 max-w-md w-full text-center relative z-10">
        <div className="w-20 h-20 bg-slate-700 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <Lock size={32} />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Yönetici Girişi</h1>
        <p className="text-slate-400 mb-8 text-sm">Siparişleri yönetmek için parolanızı girin.</p>
        
        <LoginForm />
      </div>
    </div>
  );
}

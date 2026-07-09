import React from "react";
import { cookies } from "next/headers";
import { Sidebar } from "./Sidebar";
import { LoginForm } from "./LoginForm";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const correctPassword = process.env.ADMIN_PASSWORD || "ataseven123";

  if (token !== correctPassword) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <LoginForm />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}

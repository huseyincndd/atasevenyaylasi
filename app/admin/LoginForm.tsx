"use client";
import React, { useState } from "react";
import { loginAdmin } from "./actions";
import { ArrowRight } from "lucide-react";

export const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await loginAdmin(password);
    if (!res.success) {
      setError(res.error || "Hata oluştu");
      setLoading(false);
    }
    // Başarılı ise sayfa otomatik yenilenir (server componenti yeni render yapar)
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parola"
          className="w-full bg-slate-900/50 text-white px-6 py-4 rounded-2xl border border-slate-700 focus:outline-none focus:border-emerald-500 transition-colors text-center text-lg tracking-widest"
          required
        />
      </div>
      {error && <div className="text-red-400 text-sm font-medium">{error}</div>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
      >
        {loading ? "Giriş Yapılıyor..." : (
          <>
            Panele Gir <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
};

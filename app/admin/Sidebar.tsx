"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, PackageSearch, LogOut, Menu, X } from "lucide-react";
import { logoutAdmin } from "./actions";

export const Sidebar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Siparişler", href: "/admin", icon: <ShoppingBag size={20} /> },
    { name: "Ürün Yönetimi", href: "/admin/products", icon: <PackageSearch size={20} /> },
  ];

  const handleLogout = async () => {
    await logoutAdmin();
  };

  return (
    <>
      {/* Mobile Top Header (Always visible on mobile) */}
      <div className="md:hidden flex items-center justify-between bg-white border-b border-slate-200 p-4 shrink-0">
        <div className="flex flex-col">
          <h1 className="font-serif font-bold text-xl italic tracking-wider text-slate-800">ATASEVEN</h1>
          <span className="text-emerald-600 text-[10px] tracking-widest uppercase font-bold mt-0.5">Yönetim Paneli</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar (Desktop) / Mobile Drawer */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-100 shadow-2xl md:shadow-none transform transition-transform duration-300 ease-in-out flex flex-col
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:static md:w-72 md:shrink-0
      `}>
        {/* Drawer Header (Desktop + Mobile Close Button) */}
        <div className="flex items-center justify-between md:justify-center h-20 md:h-24 border-b border-slate-100 md:border-slate-50 bg-white md:bg-forest-900 text-slate-800 md:text-white p-6 relative">
          <div className="flex flex-col md:items-center">
            <h1 className="font-serif font-bold text-xl md:text-2xl italic tracking-widest md:text-center w-full">ATASEVEN</h1>
            <span className="text-emerald-600 md:text-emerald-400 text-[10px] md:text-xs tracking-[0.2em] uppercase mt-1 font-bold">Yönetim Paneli</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="md:hidden p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${isActive ? 'bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <div className={`${isActive ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {item.icon}
                </div>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-bold text-rose-600 bg-rose-50 rounded-xl hover:bg-rose-100 transition-colors"
          >
            <LogOut size={18} />
            Güvenli Çıkış
          </button>
        </div>
      </div>
      
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

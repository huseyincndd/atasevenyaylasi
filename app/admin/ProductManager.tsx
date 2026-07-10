"use client";
import React, { useState } from "react";
import { updateProductPrice } from "./actions";
import { Save, Loader2 } from "lucide-react";

export const ProductManager = ({ initialProducts }: { initialProducts: any[] }) => {
  const [products, setProducts] = useState(initialProducts);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handlePriceChange = (id: string, field: "price" | "oldPrice", value: string) => {
    const newPrice = parseFloat(value) || 0;
    setProducts(products.map(p => p.id === id ? { ...p, [field]: newPrice > 0 ? newPrice : null } : p));
  };

  const handleSave = async (id: string, price: number, oldPrice?: number | null) => {
    setLoadingId(id);
    const res = await updateProductPrice(id, price, oldPrice);
    if (!res.success) {
      alert("Fiyat kaydedilemedi!");
    }
    setLoadingId(null);
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-emerald-50/30">
        <h2 className="text-lg font-bold text-emerald-900">Ürün & Fiyat Yönetimi</h2>
        <p className="text-emerald-700/70 text-sm">Değiştirdiğiniz fiyatlar anında tüm sitede güncellenir.</p>
      </div>

      <div className="p-2">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-50 last:border-0">
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800 text-sm">{product.name}</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">ID: {product.productId}</p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Eski Fiyat (Üstü Çizili) */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Eski Fiyat (İndirim)</span>
                <div className="relative w-28">
                  <input
                    type="number"
                    value={product.oldPrice || ""}
                    onChange={(e) => handlePriceChange(product.id, "oldPrice", e.target.value)}
                    placeholder="Yok"
                    className="w-full bg-white border border-slate-200 text-slate-500 font-medium py-2 px-3 pr-8 rounded-lg text-right focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₺</div>
                </div>
              </div>

              {/* Yeni/Satış Fiyatı */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Satış Fiyatı</span>
                <div className="relative w-28">
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) => handlePriceChange(product.id, "price", e.target.value)}
                    className="w-full bg-white border border-emerald-200 text-slate-800 font-bold py-2 px-3 pr-8 rounded-lg text-right focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₺</div>
                </div>
              </div>
              
              <button
                onClick={() => handleSave(product.id, product.price, product.oldPrice)}
                disabled={loadingId === product.id}
                className="w-10 h-10 bg-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-50"
                title="Kaydet"
              >
                {loadingId === product.id ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

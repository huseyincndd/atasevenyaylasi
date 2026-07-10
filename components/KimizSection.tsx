"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Snowflake, Truck, ChevronRight } from "lucide-react";

export const KimizSection = ({ products = [] }: { products?: any[] }) => {
  const { addToCart } = useCart();
  
  const getKimizDetails = (id: string, defaultPrice: number) => {
    const p = products.find((p) => p.id === id);
    return {
      price: p ? p.price : defaultPrice,
      oldPrice: p ? p.oldPrice : null
    };
  };

  const kimizPackages = [
    { id: "k1", count: 1, ...getKimizDetails("k1", 500), label: "200 ML Cam Şişe" },
    { id: "k2", count: 2, ...getKimizDetails("k2", 750), label: "2x 200 ML Cam Şişe" },
    { id: "k3", count: 3, ...getKimizDetails("k3", 1000), label: "3x 200 ML Cam Şişe" },
    { id: "k4", count: 4, ...getKimizDetails("k4", 1250), label: "4x 200 ML Cam Şişe" },
    { id: "k5", count: 5, ...getKimizDetails("k5", 1500), label: "5x 200 ML Cam Şişe" },
    { id: "k6", count: 6, ...getKimizDetails("k6", 1750), label: "6x 200 ML Cam Şişe" },
    { id: "k12", count: 12, ...getKimizDetails("k12", 3000), label: "12x 200 ML Cam Şişe" },
    { id: "k18", count: 18, ...getKimizDetails("k18", 4000), label: "18x 200 ML Cam Şişe" },
    { id: "k24", count: 24, ...getKimizDetails("k24", 5500), label: "24x 200 ML Cam Şişe" },
  ];

  const [selectedPkg, setSelectedPkg] = useState(kimizPackages[0]);

  return (
    <section id="kimiz" className="bg-[#FAF9F6] text-forest-900 relative py-24 md:py-32">
      {/* Soft Organic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[100px] top-[-10%] right-[-10%]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-700 font-bold tracking-[0.2em] uppercase text-xs md:text-sm px-6 py-2 rounded-full border border-red-200 animate-pulse">
              Çok kısa süreliğine herkes tatsın diye özel kampanya!
            </span>
          </div>
          <h4 className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 bg-emerald-50 border border-emerald-100 inline-block px-5 py-2 rounded-full">
            ATASEVEN — KIMIZ YAYLASI
          </h4>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-2 text-forest-900">
            Geleneksel <span className="font-serif italic text-emerald-600">Kımız</span>
          </h2>
          <p className="text-sm md:text-base text-emerald-600 font-medium mb-8 uppercase tracking-wider">Doğal Kımız Satın Al & Sipariş Ver</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm tracking-widest uppercase text-forest-900/40 font-medium">
            <span>DOĞAL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
            <span>GELENEKSEL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
            <span>FERMENTE</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative">
          
          {/* Left: Sticky Product Image & Badges */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 z-10">
            <div className="w-full relative h-[500px] md:h-[600px] lg:h-[750px] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl mb-8 group border border-forest-900/5">
              <img 
                src="https://cdn.dsmcdn.com/mnresize/620/920/ty1892/prod/QC_ENRICHMENT/20260625/17/567b1557-32d8-3ef2-b92b-35a260d5cb6d/1_org_zoom.jpg" 
                alt="Geleneksel Kımız" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 z-20 bg-white/95 backdrop-blur-md text-emerald-700 rounded-full p-6 shadow-2xl border border-emerald-100 flex flex-col items-center justify-center aspect-square w-28 md:w-32 rotate-12">
                <span className="text-3xl font-bold leading-none">%100</span>
                <span className="text-[10px] uppercase tracking-widest text-center mt-1 font-semibold">AT SÜTÜNDEN</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-white/80 backdrop-blur-sm border border-forest-900/5 p-6 rounded-[2rem] flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <Snowflake className="w-8 h-8 text-emerald-500" />
                <span className="text-xs uppercase tracking-wider text-forest-900/60 font-bold">Soğuk Zincir</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-forest-900/5 p-6 rounded-[2rem] flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <Truck className="w-8 h-8 text-emerald-500" />
                <span className="text-xs uppercase tracking-wider text-forest-900/60 font-bold">Tüm Türkiye'ye</span>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Menu List */}
          <div className="w-full lg:w-1/2 relative z-20 lg:py-10">
            <h3 className="text-3xl lg:text-4xl font-light text-forest-900 mb-10 text-center lg:text-left">
              Fiyat Listesi
            </h3>
            
            <div className="flex flex-col gap-4 mb-16">
              {kimizPackages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg)}
                  className={`group relative flex items-center justify-between p-5 md:px-8 rounded-[2rem] transition-all duration-300 ${
                    selectedPkg.id === pkg.id 
                      ? "bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-emerald-200 transform scale-[1.02] z-10" 
                      : "bg-white/40 hover:bg-white/80 border border-transparent shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      selectedPkg.id === pkg.id ? "bg-emerald-500 text-white shadow-lg" : "bg-forest-900/5 text-transparent"
                    }`}>
                      {selectedPkg.id === pkg.id && <ChevronRight className="w-5 h-5" />}
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <span className={`text-lg md:text-xl font-light tracking-wide ${selectedPkg.id === pkg.id ? "font-medium text-forest-900" : "text-forest-900/80"}`}>
                        {pkg.count} Adet
                      </span>
                      <span className="text-[10px] md:text-xs tracking-widest uppercase opacity-50 mt-1">
                        {pkg.label}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    {pkg.oldPrice && pkg.oldPrice > pkg.price && (
                      <span className="text-sm md:text-base line-through text-red-400 font-medium opacity-80 -mb-1">
                        {pkg.oldPrice.toLocaleString("tr-TR")} ₺
                      </span>
                    )}
                    <span className={`text-2xl md:text-3xl font-serif italic ${selectedPkg.id === pkg.id ? "text-emerald-600 font-bold" : "text-forest-900/80 font-bold"}`}>
                      {pkg.price.toLocaleString("tr-TR")} <span className="text-lg">₺</span>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Static Inline Action Area */}
            <div className="mt-8 pt-8 border-t border-forest-900/10">
              <button 
                onClick={() => {
                  addToCart({ 
                    id: selectedPkg.id, 
                    name: `Geleneksel Kımız (${selectedPkg.count} Adet)`, 
                    price: selectedPkg.price, 
                    image: "https://cdn.dsmcdn.com/mnresize/620/920/ty1892/prod/QC_ENRICHMENT/20260625/17/567b1557-32d8-3ef2-b92b-35a260d5cb6d/1_org_zoom.jpg", 
                    quantity: 1 
                  });
                }}
                className="w-full px-8 py-5 bg-forest-900 text-white rounded-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 hover:bg-emerald-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
                  <span className="uppercase tracking-[0.2em] text-[10px] sm:text-sm font-bold text-white/70 sm:text-white">Sepete Ekle</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:block"></span>
                  <div className="flex flex-col items-end sm:items-center sm:flex-row gap-1 sm:gap-4">
                    {selectedPkg.oldPrice && selectedPkg.oldPrice > selectedPkg.price && (
                      <span className="text-xs sm:text-sm line-through text-red-200 opacity-90 hidden sm:block">
                        {selectedPkg.oldPrice.toLocaleString("tr-TR")} ₺
                      </span>
                    )}
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className="text-base sm:text-sm font-semibold">{selectedPkg.count} Adet</span>
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/50"></span>
                      <span className="text-2xl sm:text-xl font-serif italic font-bold">{selectedPkg.price.toLocaleString("tr-TR")} ₺</span>
                    </div>
                  </div>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { Package, Truck, Snowflake, Shield } from "lucide-react";

export const ProductList = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (id: string, name: string, price: number, image: string) => {
    addToCart({ id, name, price, image, quantity: 1 });
  };

  return (
    <section id="products" className="bg-[#FAF9F6] flex flex-col overflow-hidden">
      {/* Introduction Header */}
      <div className="py-24 px-4 md:px-12 text-center max-w-4xl mx-auto">
        <span className="inline-block py-1.5 px-4 rounded-full bg-forest-900/5 text-forest-900 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6">
          Koleksiyon
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-forest-900 tracking-tight mb-8">
          Doğadan Gelen <span className="italic font-serif text-emerald-600">Saf ve Değerli</span> Besin
        </h2>
        <p className="text-lg md:text-xl text-forest-900/60 font-light leading-relaxed">
          Ataseven güvencesiyle üretilen %100 doğal sütlerimiz, hijyenik koşullarda sağılıp tazeliğini koruması amacıyla dondurularak sizlere ulaştırılır.
        </p>
      </div>

      {/* At Sütü Editorial Block */}
      <div id="atsutu" className="w-full relative min-h-screen lg:min-h-[850px] flex flex-col lg:block items-center justify-center overflow-hidden border-b border-forest-900/5 bg-[#FAF9F6] lg:bg-transparent pb-16 lg:pb-0">
        {/* Soft Organic Background Blob for Desktop */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[-10%] w-[800px] h-[800px] bg-beige-200/60 rounded-full blur-[100px] z-0"></div>
        
        {/* Massive Rounded Image */}
        <div className="w-full h-[50vh] lg:h-[80%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] flex items-center justify-center z-10 pt-12 lg:pt-0 mb-12 lg:mb-0">
          <img 
            src="/images/mares_milk_1782482818864.png" 
            alt="At Sütü" 
            className="w-[90%] h-full object-cover rounded-[2rem] lg:rounded-[4rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 w-full flex lg:justify-end relative z-20">
          {/* Overlapping Content Card */}
          <div className="w-full lg:w-[55%] bg-white/95 backdrop-blur-xl p-8 md:p-16 lg:p-20 rounded-[2.5rem] lg:rounded-[3rem] shadow-xl lg:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-forest-900/5 relative">
            <div className="mb-4">
              <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">%100 Doğal</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-light text-forest-900 mb-8 tracking-tight">At Sütü</h3>
            <p className="text-lg md:text-xl text-forest-900/70 font-light leading-relaxed mb-12">
              İçerdiği vitamin, mineral ve aminoasitler ile bağışıklık sistemini desteklemeye yardımcı olur. Doğal ve katkısız yapısıyla sağlıklı yaşamın vazgeçilmez bir parçasıdır.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-emerald-600" strokeWidth={1.5}/>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">Ambalaj</h4>
                  <p className="text-sm font-light text-forest-900/60 leading-relaxed">300 ml gıda uyumlu şişelerde gönderilmektedir.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-emerald-600" strokeWidth={1.5}/>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">Gönderim</h4>
                  <p className="text-sm font-light text-forest-900/60 leading-relaxed">Şehir dışına otobüs firmaları ile min. 3 kg sipariş.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5 text-emerald-600" strokeWidth={1.5}/>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">Saklama</h4>
                  <p className="text-sm font-light text-forest-900/60 leading-relaxed">Derin dondurucuda muhafaza edilmesi tavsiye edilir.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-emerald-600" strokeWidth={1.5}/>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">Özellikler</h4>
                  <p className="text-sm font-light text-forest-900/60 leading-relaxed">Katkısız, koruyucu içermez, hijyenik üretim.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-forest-900/5 gap-6">
              <div className="text-center sm:text-left">
                <span className="block text-xs font-semibold text-forest-900/40 uppercase tracking-widest mb-1">Fiyat / KG</span>
                <span className="text-5xl font-serif italic text-forest-900">1.500 <span className="text-2xl text-emerald-600">₺</span></span>
              </div>
              <button 
                onClick={() => handleAddToCart("p1", "At Sütü", 1500, "/images/mares_milk_1782482818864.png")}
                className="w-full sm:w-auto px-12 py-5 bg-forest-900 text-white rounded-full uppercase tracking-[0.2em] text-sm font-bold hover:bg-emerald-600 transition-all shadow-xl hover:-translate-y-1 transform duration-300"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Eşek Sütü Editorial Block */}
      <div id="esseksutu" className="w-full relative min-h-screen lg:min-h-[850px] flex flex-col lg:block items-center justify-center overflow-hidden bg-[#FAF9F6] lg:bg-transparent pb-16 lg:pb-0">
        {/* Soft Organic Background Blob for Desktop */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-10%] w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[100px] z-0"></div>
        
        {/* Massive Rounded Image */}
        <div className="w-full h-[50vh] lg:h-[80%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] flex items-center justify-center z-10 pt-12 lg:pt-0 mb-12 lg:mb-0">
          <img 
            src="/images/donkeys_milk_1782482831585.png" 
            alt="Eşek Sütü" 
            className="w-[90%] h-full object-cover rounded-[2rem] lg:rounded-[4rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 w-full flex lg:justify-start relative z-20">
          {/* Overlapping Content Card */}
          <div className="w-full lg:w-[55%] bg-white/95 backdrop-blur-xl p-8 md:p-16 lg:p-20 rounded-[2.5rem] lg:rounded-[3rem] shadow-xl lg:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-forest-900/5 relative">
            <div className="mb-4">
              <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">%100 Doğal</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-light text-forest-900 mb-8 tracking-tight">Eşek Sütü</h3>
            <p className="text-lg md:text-xl text-forest-900/70 font-light leading-relaxed mb-12">
              İçerdiği vitamin, mineral ve aminoasitler ile bağışıklık sistemini desteklemeye yardımcı olur. Doğal ve katkısız yapısıyla sağlıklı yaşamın vazgeçilmez bir parçasıdır.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-emerald-600" strokeWidth={1.5}/>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">Ambalaj</h4>
                  <p className="text-sm font-light text-forest-900/60 leading-relaxed">300 ml gıda uyumlu şişelerde gönderilmektedir.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-emerald-600" strokeWidth={1.5}/>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">Gönderim</h4>
                  <p className="text-sm font-light text-forest-900/60 leading-relaxed">Şehir dışına otobüs firmaları ile min. 3 kg sipariş.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5 text-emerald-600" strokeWidth={1.5}/>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">Saklama</h4>
                  <p className="text-sm font-light text-forest-900/60 leading-relaxed">Derin dondurucuda muhafaza edilmesi tavsiye edilir.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-emerald-600" strokeWidth={1.5}/>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-900 mb-1">Özellikler</h4>
                  <p className="text-sm font-light text-forest-900/60 leading-relaxed">Katkısız, koruyucu içermez, hijyenik üretim.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-forest-900/5 gap-6">
              <div className="text-center sm:text-left">
                <span className="block text-xs font-semibold text-forest-900/40 uppercase tracking-widest mb-1">Fiyat / KG</span>
                <span className="text-5xl font-serif italic text-forest-900">1.000 <span className="text-2xl text-emerald-600">₺</span></span>
              </div>
              <button 
                onClick={() => handleAddToCart("p2", "Eşek Sütü", 1000, "/images/donkeys_milk_1782482831585.png")}
                className="w-full sm:w-auto px-12 py-5 border-2 border-forest-900 text-forest-900 rounded-full uppercase tracking-[0.2em] text-sm font-bold hover:bg-forest-900 hover:text-white transition-all shadow-xl hover:-translate-y-1 transform duration-300"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

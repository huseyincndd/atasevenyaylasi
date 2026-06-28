import React from "react";

export const FarmStory = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-beige-100 text-forest-900 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Typography / Story */}
          <div className="lg:col-span-7 text-center lg:text-left z-10">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
              <span className="h-px w-8 bg-emerald-600"></span>
              <h4 className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold text-emerald-600">
                DOĞAL BESİN, SAĞLIKLI NESİLLER
              </h4>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light leading-[1.1] mb-10 tracking-tight text-forest-900">
              Doğadan Gelen <br />
              <span className="italic font-serif text-emerald-600">Saf ve Değerli</span> Besin
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl font-light text-forest-900/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <p>
                Konya Meram'da bulunan Ataseven Kımız Yaylası'nda, doğanın sunduğu mucizeleri en saf haliyle sofralarınıza taşıyoruz. Geleneksel üretim yöntemleri ve yüksek hijyen standartlarımızla yüzyıllardır süregelen şifa kaynağını yaşatıyoruz.
              </p>
              <p>
                Tesisimizde at ve eşeklerimizin refahını ön planda tutarak elde ettiğimiz sütlerimiz, hiçbir kimyasal işlem görmeden, doğallığı korunarak dondurulur ve sizlere ulaştırılır.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="px-6 py-3 border border-emerald-200 rounded-full text-emerald-700 text-sm tracking-widest uppercase bg-emerald-50">
                %100 Doğal
              </div>
              <div className="px-6 py-3 border border-emerald-200 rounded-full text-emerald-700 text-sm tracking-widest uppercase bg-emerald-50">
                Katkısız
              </div>
            </div>
          </div>

          {/* Editorial Image */}
          <div className="lg:col-span-5 relative z-10 mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full transform -translate-x-12 translate-y-12"></div>
            <div className="aspect-[3/4] w-full relative overflow-hidden rounded-[2rem] shadow-2xl border border-forest-900/5">
              <img 
                src="/images/hero_plateau_1782482809292.png" 
                alt="Doğa" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            {/* Small floating detail image */}
            <div className="absolute -bottom-12 -left-12 w-56 aspect-square p-3 bg-white rounded-[2rem] border border-forest-900/5 shadow-2xl hidden md:block">
               <img 
                src="/images/mares_milk_1782482818864.png" 
                alt="Detay" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

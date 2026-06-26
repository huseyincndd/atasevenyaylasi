import React from "react";

export const FarmStory = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-forest-900 text-beige-100 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography / Story */}
          <div className="lg:col-span-7 pr-0 lg:pr-12 text-center lg:text-left">
            <h4 className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-medium text-beige-100/50 mb-8 md:mb-12">
              Köklerimiz
            </h4>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] lg:leading-[1.1] mb-8 md:mb-10 tracking-tight">
              Bizim hikayemiz, <br />
              <span className="italic font-serif text-beige-200/80">doğaya duyduğumuz <br />derin saygı</span> ile başlar.
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light text-beige-100/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <p>
                Yüksek rakımlı Toros meralarında doğanın sunduğu mucizeleri olduğu gibi, en saf haliyle sofralarınıza taşıyoruz. Geleneksel yöntemlerle modern standartları harmanlayarak, yüzyıllardır süregelen kaliteyi yaşatıyoruz.
              </p>
              <p>
                Biz sadece süt üretmiyoruz; hayvanlarımızın refahını, toprağın bereketini ve ailenizin sağlığını gözetiyoruz.
              </p>
            </div>
          </div>

          {/* Editorial Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] w-full relative overflow-hidden">
              <img 
                src="/images/hero_plateau_1782482809292.png" 
                alt="Doğa" 
                className="w-full h-full object-cover grayscale-[30%] opacity-80"
              />
            </div>
            {/* Small floating detail image */}
            <div className="absolute -bottom-10 -left-10 w-48 aspect-square bg-forest-800 p-2 hidden md:block">
               <img 
                src="/images/mares_milk_1782482818864.png" 
                alt="Detay" 
                className="w-full h-full object-cover grayscale-[50%]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

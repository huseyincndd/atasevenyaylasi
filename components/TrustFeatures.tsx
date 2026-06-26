import React from "react";

const features = [
  {
    number: "01",
    title: "Saf Üretim",
    desc: "Hiçbir koruyucu madde veya katkı maddesi kullanılmadan, tamamen doğal yöntemlerle üretim."
  },
  {
    number: "02",
    title: "Mera Besiciliği",
    desc: "Torosların yüksek rakımlı meralarında özgürce otlayan, sağlıklı hayvanlar."
  },
  {
    number: "03",
    title: "Soğuk Zincir",
    desc: "Sağımdan hemen sonra şişelenip, özel soğutuculu sistemlerle kapınıza kadar teslimat."
  }
];

export const TrustFeatures = () => {
  return (
    <section className="py-20 md:py-32 bg-beige-100 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Title */}
          <div className="lg:w-1/3">
            <h2 className="text-forest-900 text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight lg:sticky lg:top-32 mb-10 lg:mb-0">
              <span className="italic font-serif text-forest-500">Ödün </span>
              vermediğimiz standartlar.
            </h2>
          </div>

          {/* Right Features List */}
          <div className="lg:w-2/3 flex flex-col">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-12 border-b border-forest-900/10 hover:border-forest-900 transition-colors duration-500"
              >
                <div className="text-2xl text-forest-900/30 font-light font-mono group-hover:text-forest-500 transition-colors">
                  {feature.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-forest-900 mb-4">{feature.title}</h3>
                  <p className="text-forest-800/70 text-lg font-light leading-relaxed max-w-xl">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

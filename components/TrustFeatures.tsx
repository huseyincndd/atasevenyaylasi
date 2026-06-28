import React from "react";
import { ShieldCheck, Activity, Droplet, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-emerald-600" strokeWidth={1.5} />,
    title: "BAĞIŞIKLIK DESTEĞİ",
    desc: "İçerdiği zengin vitamin, mineral ve aminoasitlerle vücut direncinizi doğal yollarla artırır. Günlük yaşam koşturmacasında bağışıklık sisteminizi güçlendirerek hastalıklara karşı kalkan oluşturur.",
    className: "lg:col-span-2 lg:row-span-2 bg-emerald-50/50" // Large block
  },
  {
    icon: <Activity className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    title: "KOLAY SİNDİRİM",
    desc: "Anne sütüne en yakın içerik yapısı sayesinde mideyi yormaz.",
    className: "lg:col-span-1 lg:row-span-1 bg-white" // Small block
  },
  {
    icon: <Droplet className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    title: "VİTAMİN",
    desc: "Vücudun ihtiyaç duyduğu temel besin öğelerini almanızı sağlar.",
    className: "lg:col-span-1 lg:row-span-1 bg-white" // Small block
  },
  {
    icon: <Sparkles className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    title: "YÜKSEK BESİN",
    desc: "Hiçbir ısıl işlem görmeden en saf haliyle sunulan şifa kaynağı.",
    className: "lg:col-span-1 lg:row-span-1 bg-white" // Small block
  },
  {
    icon: <Heart className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    title: "SAĞLIKLI YAŞAM",
    desc: "Doğal ve katkısız yapısıyla, siz ve sevdikleriniz için sağlıklı yaşamın vazgeçilmezi. Nesiller boyu aktarılan bu mucizevi besinle hayat kalitenizi artırın.",
    className: "lg:col-span-2 lg:row-span-1 bg-emerald-900 text-white" // Wide dark/green block
  }
];

export const TrustFeatures = () => {
  return (
    <section className="py-24 md:py-32 bg-beige-100 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-5 rounded-full bg-emerald-100/50 text-emerald-700 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-emerald-200">
            DOĞAL • KATKISIZ • GÜVENİLİR
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-forest-900 leading-tight mb-6">
            Sağlıklı Yaşamın <br className="hidden md:block"/>
            <span className="font-serif italic text-emerald-600">Doğal Kaynağı</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`group relative p-8 md:p-10 rounded-[2.5rem] border border-forest-900/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between ${feature.className}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[4rem] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${i === 4 ? 'bg-white/10' : 'bg-white shadow-sm border border-forest-900/5'} group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              
              <div>
                <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${i === 4 ? 'text-white' : 'text-forest-900'}`}>
                  {feature.title}
                </h3>
                
                <p className={`font-light leading-relaxed ${
                  i === 0 ? 'text-lg md:text-xl' : 'text-base'
                } ${i === 4 ? 'text-white/80' : 'text-forest-900/60'}`}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

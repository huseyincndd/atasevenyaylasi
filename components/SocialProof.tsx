import React from "react";
import { Play } from "lucide-react";

const reels = [
  { id: "1", url: "https://www.instagram.com/reel/DZZXOrqOYut/embed", title: "Kullanıcı Deneyimi" },
  { id: "2", url: "https://www.instagram.com/reel/DZCLjVGOVQS/embed", title: "Üretim Aşaması" },
  { id: "3", url: "https://www.instagram.com/p/DaFPfgRDoIz/embed", title: "Doğal Yaşam" },
  { id: "4", url: "https://www.instagram.com/reel/DZIWVFXILxX/embed", title: "Soğuk Zincir" },
];

export const SocialProof = () => {
  return (
    <section className="py-24 md:py-40 bg-[#f4f1eb] px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-forest-900/30"></span>
              <span className="text-forest-900/60 font-medium tracking-[0.3em] uppercase text-xs">Sosyal Medya</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-forest-900 tracking-tight leading-tight">
              Gerçek <br className="hidden md:block" />
              <span className="font-serif italic text-forest-500">Deneyimler</span>
            </h2>
          </div>
          <p className="md:max-w-md text-lg text-forest-900/60 font-light leading-relaxed">
            Ataseven Yaylası'nın doğallığını ve kalitesini bir de kullanıcılarımızın ve bizim gözümüzden izleyin. Doğal yaşamın kalbinden kesitler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {reels.map((reel) => (
            <div key={reel.id} className="group relative flex flex-col items-center">
              {/* Phone-like frame */}
              <div className="relative w-full max-w-[320px] aspect-[9/16] bg-white rounded-[2.5rem] shadow-2xl p-2 border border-forest-900/5 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-4">
                {/* Minimalist Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-white rounded-b-xl z-20"></div>
                
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-forest-900/5">
                  <iframe
                    src={reel.url}
                    className="absolute inset-0 w-full h-full border-none"
                    allowTransparency={true}
                    allow="encrypted-media"
                    title={reel.title}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-forest-900/5 flex items-center justify-center group-hover:bg-forest-500 group-hover:text-white transition-colors duration-500 text-forest-900">
                  <Play className="w-3 h-3 ml-0.5" fill="currentColor" />
                </div>
                <h4 className="text-forest-900 font-medium tracking-wide">{reel.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

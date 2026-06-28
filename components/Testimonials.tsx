import React from "react";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-32 md:py-48 bg-beige-200 px-4 md:px-12 flex items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'url("/images/hero_plateau_1782482809292.png")', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-forest-500 mb-12 flex justify-center">
          <Quote className="w-16 h-16 opacity-40" strokeWidth={1} />
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-forest-900 leading-tight mb-12 drop-shadow-sm">
          "Hayatımda tattığım en saf kımız. Geleneklere duydukları saygıyı her yudumda hissediyorsunuz. <br className="hidden md:block"/>Gerçek bir başyapıt."
        </h3>
        <div className="flex flex-col items-center gap-3">
          <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-forest-900">
            Mehmet D.
          </p>
          <p className="text-forest-900/50 font-serif italic text-sm">
            Doğal Besin Tutkunu
          </p>
        </div>
      </div>
    </section>
  );
};

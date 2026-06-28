"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/hero_plateau_1782482809292.png"
          alt="Ataseven Yaylası"
          className="w-full h-full object-cover"
        />
        {/* Overlays for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 text-center mt-24 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] md:text-sm font-semibold tracking-wider uppercase mb-6 border border-white/30 shadow-lg">
            %100 Doğal ve Saf
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-xl">
            Doğadan Gelen <br />
            <span className="text-emerald-400">Gerçek Sağlık</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto drop-shadow-md">
            Ataseven Yaylası'nın el değmemiş doğasından sofralarınıza uzanan,
            özenle üretilmiş taze süt ürünleri.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl text-base md:text-lg font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Ürünleri İncele
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

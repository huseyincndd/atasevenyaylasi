"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileCartBar = () => {
  const { cartCount, cartTotal, setIsCartOpen, isCartOpen } = useCart();

  // Do not show the small floating bar if the main cart drawer is already open
  if (isCartOpen) return null;

  return (
    <AnimatePresence>
      {cartCount > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="md:hidden fixed bottom-6 left-4 right-4 z-40"
        >
          <div 
            onClick={() => setIsCartOpen(true)}
            className="bg-forest-900 text-beige-100 rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between cursor-pointer border border-forest-800/50 backdrop-blur-xl"
          >
            <div className="flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-beige-100/60 font-medium">
                {cartCount} Ürün
              </span>
              <span className="font-serif italic font-bold text-lg leading-tight">
                {cartTotal.toLocaleString("tr-TR")} ₺
              </span>
            </div>
            
            <div className="bg-emerald-600 active:bg-emerald-500 text-white px-6 py-3.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm">
              Sepeti İncele
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

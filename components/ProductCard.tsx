"use client";
import React from "react";
import { useCart } from "@/context/CartContext";

export const ProductCard = ({ id, name, description, price, image }: any) => {
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <div className="group flex flex-col items-center text-center cursor-pointer">
      <div className="relative w-full aspect-[3/4] bg-beige-200 overflow-hidden mb-8 rounded-sm">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
        />
        <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/5 transition-colors duration-500"></div>
      </div>
      
      <h3 className="text-2xl font-medium text-forest-900 mb-3">{name}</h3>
      <p className="text-forest-900/60 font-light text-sm mb-5 max-w-[260px] leading-relaxed">{description}</p>
      <p className="text-lg font-serif italic text-forest-500 mb-8">{price.toLocaleString("tr-TR")} ₺</p>
      
      <button 
        onClick={(e) => {
          e.stopPropagation();
          addToCart({ id, name, price, image, quantity: 1 });
        }}
        className="px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-beige-100 transition-colors duration-500 rounded-full"
      >
        Sepete Ekle
      </button>
    </div>
  );
};

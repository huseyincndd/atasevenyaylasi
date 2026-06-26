"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const CartDrawer = () => {
  const { cart, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 md:left-auto md:top-0 h-[85vh] md:h-full w-full md:max-w-md bg-white shadow-2xl z-50 flex flex-col rounded-t-[2rem] md:rounded-none"
          >
            {/* Mobile drag handle indicator */}
            <div className="w-full flex justify-center pt-3 pb-1 md:hidden">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-6 md:pt-6 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800">Sepetiniz</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400">
                  <p className="text-lg">Sepetiniz şu an boş.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-emerald-600 font-medium hover:underline"
                  >
                    Alışverişe Başla
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl border border-slate-100"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">{item.name}</h4>
                        <div className="text-sm text-slate-500 mt-1">
                          {item.price.toLocaleString("tr-TR")} ₺ x {item.quantity}
                        </div>
                        <div className="font-bold text-emerald-600 mt-1">
                          {(item.price * item.quantity).toLocaleString("tr-TR")} ₺
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50 pb-8 md:pb-6">
                <div className="flex justify-between items-center mb-6 text-lg">
                  <span className="font-medium text-slate-600">Toplam:</span>
                  <span className="font-bold text-2xl text-slate-800">
                    {cartTotal.toLocaleString("tr-TR")} ₺
                  </span>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
                >
                  <span className="md:hidden">Devam Et</span>
                  <span className="hidden md:inline">Ödeme Adımına Geç</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Droplets } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [mobileMenuOpen]);

  const solidNav = !isHomePage || isScrolled;

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-6xl z-50 transition-all duration-500 rounded-full px-4 md:px-6 py-3 flex items-center justify-between ${
          solidNav
            ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/50"
            : "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setMobileMenuOpen(false)}>
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors ${solidNav ? 'bg-emerald-600 text-white' : 'bg-white text-slate-900'}`}>
            <Droplets size={18} />
          </div>
          <span className={`font-serif italic font-bold text-xl md:text-2xl tracking-tight transition-colors ${solidNav ? 'text-slate-900' : 'text-white'}`}>
            Ataseven
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
              solidNav ? "text-slate-600 hover:text-emerald-600" : "text-white/90 hover:text-white"
            }`}
          >
            Ana Sayfa
          </Link>
          <Link
            href={isHomePage ? "#products" : "/#products"}
            className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
              solidNav ? "text-slate-600 hover:text-emerald-600" : "text-white/90 hover:text-white"
            }`}
          >
            Koleksiyon
          </Link>
          <Link
            href={isHomePage ? "#about" : "/#about"}
            className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
              solidNav ? "text-slate-600 hover:text-emerald-600" : "text-white/90 hover:text-white"
            }`}
          >
            Hikayemiz
          </Link>
        </div>

        {/* Cart Icon & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2.5 rounded-full transition-colors ${
              solidNav
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/20"
            }`}
          >
            <ShoppingCart size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1 shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className={`md:hidden p-2.5 rounded-full transition-colors ${
              solidNav || mobileMenuOpen ? "text-slate-700 bg-slate-100/50" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-beige-100/95 backdrop-blur-2xl flex flex-col items-center justify-center px-6"
          >
            <div className="flex flex-col items-center gap-8 text-center w-full max-w-sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full"
              >
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-4xl font-light tracking-tight text-forest-900 py-4 border-b border-forest-900/10"
                >
                  Ana Sayfa
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full"
              >
                <Link
                  href={isHomePage ? "#products" : "/#products"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-4xl font-light tracking-tight text-forest-900 py-4 border-b border-forest-900/10"
                >
                  Koleksiyon
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full"
              >
                <Link
                  href={isHomePage ? "#about" : "/#about"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-4xl font-light tracking-tight text-forest-900 py-4"
                >
                  Hikayemiz
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-forest-900/50 uppercase tracking-widest text-xs font-medium"
              >
                Ataseven Yaylası © 2026
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

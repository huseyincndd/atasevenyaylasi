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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (isHomePage && target.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.getElementById(target.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Clean update of URL without stacking
        window.history.pushState({}, '', `/${target}`);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className="fixed top-4 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-6xl z-50 transition-all duration-500 rounded-full px-4 md:px-6 py-0 flex items-center justify-between bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/50"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group z-50" onClick={(e) => handleNavClick(e, '')}>
          <img 
            src="https://villaqrmenu.b-cdn.net/atasevenlogo.png" 
            alt="Ataseven Yaylası Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-105 scale-[1.15]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '')}
            className="text-xs uppercase tracking-[0.2em] font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/#atsutu"
            onClick={(e) => handleNavClick(e, '#atsutu')}
            className="text-xs uppercase tracking-[0.2em] font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            At Sütü
          </Link>
          <Link
            href="/#esseksutu"
            onClick={(e) => handleNavClick(e, '#esseksutu')}
            className="text-xs uppercase tracking-[0.2em] font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            Eşek Sütü
          </Link>
          <Link
            href="/#kimiz"
            onClick={(e) => handleNavClick(e, '#kimiz')}
            className="text-xs uppercase tracking-[0.2em] font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            Kımız
          </Link>
          <Link
            href="/#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-xs uppercase tracking-[0.2em] font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            Hikayemiz
          </Link>
        </div>

        {/* Cart Icon & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full transition-colors text-slate-700 hover:bg-slate-100"
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
              mobileMenuOpen ? "text-slate-700 bg-slate-100/50" : "text-slate-700 hover:bg-slate-100"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#FAF9F6] flex flex-col justify-center px-8 md:px-12 overflow-hidden"
            style={{ willChange: 'opacity, transform' }}
          >
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-900/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto relative z-10 pt-16">
              {[
                { name: 'Ana Sayfa', href: '/', id: '' },
                { name: 'At Sütü', href: '/#atsutu', id: '#atsutu' },
                { name: 'Eşek Sütü', href: '/#esseksutu', id: '#esseksutu' },
                { name: 'Kımız', href: '/#kimiz', id: '#kimiz' },
                { name: 'Hikayemiz', href: '/#about', id: '#about' },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: 0.1 + (i * 0.05), duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                  style={{ willChange: 'opacity, transform' }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="group flex items-center justify-between py-2 border-b border-forest-900/5"
                  >
                    <span className="text-4xl sm:text-5xl font-light tracking-tight text-forest-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-2xl">
                      &rarr;
                    </span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                className="mt-12 flex flex-col gap-2"
                style={{ willChange: 'opacity, transform' }}
              >
                <p className="text-forest-900/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-2">Bize Ulaşın</p>
                <a href="tel:+905325610367" className="text-forest-900 font-medium text-lg tracking-wide">+90 (532) 561 03 67</a>
                <a href="https://www.instagram.com/atasevenkimizsut/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-sm font-medium hover:underline">
                  Instagram'da Takip Edin
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

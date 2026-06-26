"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { 
  CheckCircle, ShieldCheck, Lock, CreditCard, 
  MapPin, ArrowLeft, Truck, Package
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const { cartTotal, clearCart, cart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form State
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [step, setStep] = useState(1); // 1: Adres, 2: Ödeme

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 max-w-lg w-full text-center relative z-10"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 200, damping: 20 }}
            className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-50"></div>
            <CheckCircle size={48} strokeWidth={2} />
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">Siparişiniz Alındı!</h2>
          <p className="text-slate-500 mb-10 text-lg leading-relaxed">
            Teşekkür ederiz. Doğal ürünleriniz özenle paketlenip en kısa sürede adresinize doğru yola çıkacak.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Alışverişe Dön
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full bg-emerald-200/40 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[120px] mix-blend-multiply"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[800px] h-[600px] rounded-full bg-green-100/40 blur-[100px] mix-blend-multiply"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.3 }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group font-medium text-sm">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Alışverişe Dön
          </Link>
          <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
            <div className={`flex items-center gap-2 ${step === 1 ? 'text-slate-900' : 'text-slate-400'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
              Teslimat
            </div>
            <div className="w-10 h-[2px] bg-slate-200 rounded-full"></div>
            <div className={`flex items-center gap-2 ${step === 2 ? 'text-slate-900' : 'text-slate-400'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
              Ödeme
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          
          {/* LEFT COLUMN - FORM */}
          <div className="flex-1 order-2 lg:order-1 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-teal-50 rounded-[2.5rem] blur-lg opacity-50"></div>
            <form id="payment-form" onSubmit={handlePayment} className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 sm:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white">
              
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                        <MapPin size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-800">İletişim & Teslimat</h2>
                        <p className="text-slate-500 text-sm mt-1">Siparişinizin size ulaşacağı bilgiler</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                      <div className="md:col-span-1 group">
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">Adınız</label>
                        <input 
                          required type="text" placeholder="Örn: Ahmet"
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder:text-slate-400 font-medium" 
                        />
                      </div>
                      <div className="md:col-span-1 group">
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">Soyadınız</label>
                        <input 
                          required type="text" placeholder="Örn: Yılmaz"
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder:text-slate-400 font-medium" 
                        />
                      </div>
                      <div className="md:col-span-2 group">
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">Telefon Numarası</label>
                        <input 
                          required type="tel" placeholder="0 (5XX) XXX XX XX"
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder:text-slate-400 font-medium" 
                        />
                      </div>
                      <div className="md:col-span-2 group">
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">Açık Adres</label>
                        <textarea 
                          required rows={3} placeholder="Mahalle, sokak, no, ilçe/il..."
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 resize-none placeholder:text-slate-400 font-medium"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button 
                        type="button" 
                        onClick={() => setStep(2)}
                        className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-medium transition-all hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
                      >
                        Ödemeye Geç
                        <ArrowLeft size={18} className="rotate-180" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                     <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <CreditCard size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-800">Ödeme Bilgileri</h2>
                        <p className="text-slate-500 text-sm mt-1">Kart bilgilerinizi güvenle girin</p>
                      </div>
                    </div>

                    <div className="space-y-5 mb-8">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">Kart Üzerindeki İsim</label>
                        <input 
                          required type="text" placeholder="AHMET YILMAZ"
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 uppercase placeholder:text-slate-400 font-medium" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">Kart Numarası</label>
                        <div className="relative">
                          <input 
                            required type="text" maxLength={19}
                            placeholder="0000 0000 0000 0000"
                            onChange={(e) => {
                              let val = e.target.value.replace(/\D/g, '');
                              val = val.replace(/(.{4})/g, '$1 ').trim();
                              setCardNumber(val);
                            }}
                            value={cardNumber}
                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 font-mono text-lg placeholder:text-slate-400" 
                          />
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-40">
                             <div className="w-6 h-6 rounded-full bg-slate-400"></div>
                             <div className="w-6 h-6 rounded-full bg-slate-400 -ml-3"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">Son Kullanma</label>
                          <input 
                            required type="text" maxLength={5} placeholder="AA/YY"
                            onChange={(e) => {
                              let val = e.target.value.replace(/\D/g, '');
                              if (val.length >= 2) val = val.slice(0,2) + '/' + val.slice(2,4);
                              setCardExpiry(val);
                            }}
                            value={cardExpiry}
                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 font-mono text-lg text-center placeholder:text-slate-400" 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-1">CVC</label>
                          <div className="relative">
                            <input 
                              required type="text" maxLength={3} placeholder="123"
                              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 font-mono text-lg text-center placeholder:text-slate-400" 
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 tooltip cursor-help" title="Kartınızın arkasındaki 3 haneli kod">
                              ?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-8 text-xs font-medium text-slate-500 bg-slate-50 py-3 px-4 rounded-xl border border-slate-100">
                      <ShieldCheck size={16} className="shrink-0 text-emerald-500" />
                      <span>256-bit SSL şifreleme ile güvenli ödeme.</span>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row gap-4">
                      <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="px-6 py-4 rounded-2xl font-medium text-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center bg-white border border-slate-200 hover:text-slate-800"
                      >
                        Geri
                      </button>
                      
                      <button
                        type="submit"
                        disabled={cart.length === 0 || isProcessing}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-medium py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 text-lg active:scale-[0.98]"
                      >
                        {isProcessing ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Lock size={18} />
                            Siparişi Tamamla
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

          {/* RIGHT COLUMN - ORDER SUMMARY */}
          <div className="w-full lg:w-[400px] xl:w-[450px] order-1 lg:order-2">
            <div className="relative sticky top-24">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-50 to-teal-100 rounded-[2.5rem] blur-lg opacity-50"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white">
              
              <div className="flex items-center gap-3 mb-6">
                <Package size={20} className="text-slate-800" />
                <h3 className="text-lg font-bold text-slate-800">Sipariş Özeti</h3>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  Sepetinizde ürün bulunmuyor.
                </div>
              ) : (
                <div className="flex flex-col gap-5 mb-8 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center group">
                      <div className="w-16 h-16 rounded-xl border border-slate-100 overflow-hidden shrink-0 relative bg-slate-50 transition-transform group-hover:scale-105">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-bl-lg">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 truncate text-sm">{item.name}</h4>
                        <div className="text-xs text-slate-500 mt-0.5">Adet: {item.quantity}</div>
                      </div>
                      <div className="font-semibold text-slate-800 shrink-0 text-sm">
                        {(item.price * item.quantity).toLocaleString("tr-TR")} ₺
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4 mb-2 pt-6 border-t border-slate-100">
                <div className="flex justify-between text-slate-500 text-sm">
                  <span>Ara Toplam</span>
                  <span className="font-medium text-slate-800">{cartTotal.toLocaleString("tr-TR")} ₺</span>
                </div>
                <div className="flex justify-between text-slate-500 text-sm pb-6 border-b border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <Truck size={14} /> Kargo
                  </span>
                  <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">ÜCRETSİZ</span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <span className="text-base font-semibold text-slate-800">Toplam</span>
                  <span className="text-3xl font-bold text-slate-900 tracking-tight">
                    {cartTotal.toLocaleString("tr-TR")} <span className="text-lg font-medium text-slate-500">₺</span>
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

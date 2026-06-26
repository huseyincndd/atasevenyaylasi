import React from "react";
import { Droplets, MapPin, Phone, Mail, Globe, MessageCircle, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="about" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <Droplets size={20} />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Ataseven Yaylası
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Doğanın en saf halini sofralarınıza getiriyoruz. At sütü, eşek sütü
              ve geleneksel kımız ile sağlığınıza değer katıyoruz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Heart size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hızlı Bağlantılar</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Ana Sayfa</a></li>
              <li><a href="#products" className="hover:text-emerald-400 transition-colors">Ürünlerimiz</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sıkça Sorulan Sorular</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-6">Ürünler</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#products" className="hover:text-emerald-400 transition-colors">At Sütü</a></li>
              <li><a href="#products" className="hover:text-emerald-400 transition-colors">Eşek Sütü</a></li>
              <li><a href="#products" className="hover:text-emerald-400 transition-colors">Geleneksel Kımız</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">İletişim</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-500 shrink-0 mt-1" />
                <span>Ataseven Yaylası, Doğa Mah. No:1, Merkez</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-500 shrink-0" />
                <span>+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-500 shrink-0" />
                <span>bilgi@atasevenyaylasi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ataseven Yaylası. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Gizlilik Politikası</a>
            <a href="#" className="hover:text-slate-300">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

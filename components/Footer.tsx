"use client";
import React from 'react';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-forest-900 text-beige-100 relative overflow-hidden pt-24 pb-12">
      {/* Background organic blob */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-emerald-800/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Ataseven <span className="font-serif italic text-emerald-400">Kımız Yaylası</span>
            </h2>
            <p className="text-beige-100/60 font-light leading-relaxed max-w-sm mb-10">
              Doğanın sunduğu en saf mucizeyi, geleneksel yöntemler ve modern hijyen standartlarıyla sofralarınıza taşıyoruz.
            </p>
            
            {/* Massive Instagram Button */}
            <a 
              href="https://www.instagram.com/atasevenkimizsut/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-6 bg-emerald-900/40 border border-emerald-500/30 hover:bg-emerald-600 hover:border-emerald-500 p-4 pr-6 rounded-[2rem] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <InstagramIcon className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/80 font-bold mb-1">Bizi Takip Edin</span>
                <span className="text-xl font-medium flex items-center gap-2">
                  @atasevenkimizsut 
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </span>
              </div>
            </a>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500 mb-8">İletişim</h4>
            
            <a href="tel:+905537836183" className="flex items-start gap-4 group mb-6 hover:text-emerald-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-forest-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-900/50 transition-colors border border-forest-700">
                <Phone className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="block text-xs text-beige-100/50 mb-1 uppercase tracking-widest">Telefon & WhatsApp</span>
                <span className="text-xl font-light tracking-wide">+90 (553) 783 61 83</span>
              </div>
            </a>

            <a href="mailto:info@atasevenkimiz.com" className="flex items-start gap-4 group mb-6 hover:text-emerald-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-forest-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-900/50 transition-colors border border-forest-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <span className="block text-xs text-beige-100/50 mb-1 uppercase tracking-widest">E-Posta</span>
                <span className="text-base font-light tracking-wide">info@atasevenkimiz.com</span>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-forest-800 flex items-center justify-center shrink-0 border border-forest-700">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="block text-xs text-beige-100/50 mb-1 uppercase tracking-widest">Adres</span>
                <span className="text-base font-light leading-relaxed text-beige-100/80">
                  24556. Sk. 180/8 <br />
                  42090 Meram / KONYA <br />
                  Türkiye
                </span>
              </div>
            </div>
          </div>

          {/* Legal and Quick Links */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500 mb-8">Kurumsal & Yasal</h4>
            <ul className="flex flex-col gap-4 font-light text-beige-100/70">
              <li><a href="/mesafeli-satis-sozlesmesi" className="hover:text-emerald-400 transition-colors">Mesafeli Satış Sözleşmesi</a></li>
              <li><a href="/iptal-iade-kosullari" className="hover:text-emerald-400 transition-colors">İptal ve İade Koşulları</a></li>
              <li><a href="/gizlilik-politikasi" className="hover:text-emerald-400 transition-colors">Gizlilik ve Güvenlik</a></li>
              <li><a href="/teslimat-sartlari" className="hover:text-emerald-400 transition-colors">Teslimat Şartları</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar with Payment Logos */}
        <div className="pt-8 border-t border-forest-800 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs font-light text-beige-100/40">
          <p>© {new Date().getFullYear()} Ataseven Kımız Yaylası. Tüm Hakları Saklıdır.</p>
          
          {/* Payment Provider Logos (PayTR requires Visa/Mastercard visibility) */}
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
            {/* Visa Logo SVG */}
            <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-14 h-auto text-white fill-current opacity-90"><title>visa</title><path d="M15.854 11.329l-2.003 9.367h-2.424l2.006-9.367zM26.051 17.377l1.275-3.518 0.735 3.518zM28.754 20.696h2.242l-1.956-9.367h-2.069c-0.003-0-0.007-0-0.010-0-0.459 0-0.853 0.281-1.019 0.68l-0.003 0.007-3.635 8.68h2.544l0.506-1.4h3.109zM22.429 17.638c0.010-2.473-3.419-2.609-3.395-3.714 0.008-0.336 0.327-0.694 1.027-0.785 0.13-0.013 0.28-0.021 0.432-0.021 0.711 0 1.385 0.162 1.985 0.452l-0.027-0.012 0.425-1.987c-0.673-0.261-1.452-0.413-2.266-0.416h-0.001c-2.396 0-4.081 1.275-4.096 3.098-0.015 1.348 1.203 2.099 2.122 2.549 0.945 0.459 1.262 0.754 1.257 1.163-0.006 0.63-0.752 0.906-1.45 0.917-0.032 0.001-0.071 0.001-0.109 0.001-0.871 0-1.691-0.219-2.407-0.606l0.027 0.013-0.439 2.052c0.786 0.315 1.697 0.497 2.651 0.497 0.015 0 0.030-0 0.045-0h-0.002c2.546 0 4.211-1.257 4.22-3.204zM12.391 11.329l-3.926 9.367h-2.562l-1.932-7.477c-0.037-0.364-0.26-0.668-0.57-0.82l-0.006-0.003c-0.688-0.338-1.488-0.613-2.325-0.786l-0.066-0.011 0.058-0.271h4.124c0 0 0.001 0 0.001 0 0.562 0 1.028 0.411 1.115 0.948l0.001 0.006 1.021 5.421 2.522-6.376z"></path></svg>
            {/* Mastercard Logo SVG */}
            <svg viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-12 h-auto ml-2 opacity-90"><g><path d="M46.5392504,198.011312 L46.5392504,184.839826 C46.5392504,179.790757 43.4659038,176.497885 38.1973096,176.497885 C35.5630125,176.497885 32.7091906,177.375984 30.7334678,180.229806 C29.1967945,177.815034 27.0015469,176.497885 23.7086756,176.497885 C21.513428,176.497885 19.3181804,177.15646 17.5619824,179.571233 L17.5619824,176.936935 L12.9519625,176.936935 L12.9519625,198.011312 L17.5619824,198.011312 L17.5619824,186.3765 C17.5619824,182.644579 19.5377052,180.888381 22.6110518,180.888381 C25.6843984,180.888381 27.2210717,182.864103 27.2210717,186.3765 L27.2210717,198.011312 L31.8310916,198.011312 L31.8310916,186.3765 C31.8310916,182.644579 34.0263392,180.888381 36.880161,180.888381 C39.9535076,180.888381 41.490181,182.864103 41.490181,186.3765 L41.490181,198.011312 L46.5392504,198.011312 L46.5392504,198.011312 Z M114.81145,176.936935 L107.347608,176.936935 L107.347608,170.570717 L102.737589,170.570717 L102.737589,176.936935 L98.566618,176.936935 L98.566618,181.107905 L102.737589,181.107905 L102.737589,190.766995 C102.737589,195.59654 104.713311,198.450362 109.981906,198.450362 C111.957628,198.450362 114.152876,197.791787 115.689549,196.913688 L114.372401,192.962243 C113.055252,193.840341 111.518579,194.059866 110.420955,194.059866 C108.225708,194.059866 107.347608,192.742718 107.347608,190.54747 L107.347608,181.107905 L114.81145,181.107905 L114.81145,176.936935 L114.81145,176.936935 Z M153.886857,176.497885 C151.25256,176.497885 149.496362,177.815034 148.398738,179.571233 L148.398738,176.936935 L143.788718,176.936935 L143.788718,198.011312 L148.398738,198.011312 L148.398738,186.156975 C148.398738,182.644579 149.935411,180.668856 152.789233,180.668856 C153.667332,180.668856 154.764956,180.888381 155.643055,181.107905 L156.960204,176.71741 C156.082105,176.497885 154.764956,176.497885 153.886857,176.497885 L153.886857,176.497885 L153.886857,176.497885 Z M94.834697,178.693133 C92.6394495,177.15646 89.566103,176.497885 86.2732315,176.497885 C81.0046375,176.497885 77.492241,179.132183 77.492241,183.303153 C77.492241,186.81555 80.1265385,188.791272 84.736558,189.449847 L86.931806,189.669371 C89.346578,190.10842 90.6637265,190.766995 90.6637265,191.864619 C90.6637265,193.401292 88.9075285,194.498916 85.834182,194.498916 C82.7608355,194.498916 80.346063,193.401292 78.8093895,192.303668 L76.614142,195.816065 C79.0289145,197.572262 82.321786,198.450362 85.614657,198.450362 C91.7613505,198.450362 95.2737465,195.59654 95.2737465,191.645094 C95.2737465,187.913173 92.4199245,185.937451 88.0294295,185.278876 L85.834182,185.059351 C83.858459,184.839826 82.321786,184.400777 82.321786,183.083629 C82.321786,181.546955 83.858459,180.668856 86.2732315,180.668856 C88.9075285,180.668856 91.5418255,181.76648 92.858974,182.425054 L94.834697,178.693133 L94.834697,178.693133 Z M217.329512,176.497885 C214.695215,176.497885 212.939017,177.815034 211.841393,179.571233 L211.841393,176.936935 L207.231373,176.936935 L207.231373,198.011312 L211.841393,198.011312 L211.841393,186.156975 C211.841393,182.644579 213.378066,180.668856 216.231888,180.668856 C217.109987,180.668856 218.207611,180.888381 219.08571,181.107905 L220.402859,176.71741 C219.52476,176.497885 218.207611,176.497885 217.329512,176.497885 L217.329512,176.497885 L217.329512,176.497885 Z M158.496877,187.474123 C158.496877,193.840341 162.887372,198.450362 169.69264,198.450362 C172.765986,198.450362 174.961234,197.791787 177.156481,196.035589 L174.961234,192.303668 C173.205036,193.620817 171.448838,194.279391 169.473115,194.279391 C165.741194,194.279391 163.106897,191.645094 163.106897,187.474123 C163.106897,183.522678 165.741194,180.888381 169.473115,180.668856 C171.448838,180.668856 173.205036,181.32743 174.961234,182.644579 L177.156481,178.912658 C174.961234,177.15646 172.765986,176.497885 169.69264,176.497885 C162.887372,176.497885 158.496877,181.107905 158.496877,187.474123 L158.496877,187.474123 L158.496877,187.474123 Z M201.08468,187.474123 L201.08468,176.936935 L196.47466,176.936935 L196.47466,179.571233 C194.937987,177.595509 192.742739,176.497885 189.888917,176.497885 C183.961749,176.497885 179.351729,181.107905 179.351729,187.474123 C179.351729,193.840341 183.961749,198.450362 189.888917,198.450362 C192.962264,198.450362 195.157512,197.352737 196.47466,195.377015 L196.47466,198.011312 L201.08468,198.011312 L201.08468,187.474123 Z M184.181274,187.474123 C184.181274,183.742202 186.596046,180.668856 190.547492,180.668856 C194.279413,180.668856 196.91371,183.522678 196.91371,187.474123 C196.91371,191.206044 194.279413,194.279391 190.547492,194.279391 C186.596046,194.059866 184.181274,191.206044 184.181274,187.474123 L184.181274,187.474123 Z M129.080559,176.497885 C122.933866,176.497885 118.543371,180.888381 118.543371,187.474123 C118.543371,194.059866 122.933866,198.450362 129.300084,198.450362 C132.373431,198.450362 135.446777,197.572262 137.861549,195.59654 L135.666302,192.303668 C133.910104,193.620817 131.714856,194.498916 129.519609,194.498916 C126.665787,194.498916 123.811965,193.181768 123.153391,189.449847 L138.739648,189.449847 L138.739648,187.693648 C138.959173,180.888381 135.007727,176.497885 129.080559,176.497885 L129.080559,176.497885 L129.080559,176.497885 Z M129.080559,180.449331 C131.934381,180.449331 133.910104,182.20553 134.349153,185.498401 L123.372916,185.498401 C123.811965,182.644579 125.787688,180.449331 129.080559,180.449331 L129.080559,180.449331 Z M243.452958,187.474123 L243.452958,168.594995 L238.842938,168.594995 L238.842938,179.571233 C237.306265,177.595509 235.111017,176.497885 232.257196,176.497885 C226.330027,176.497885 221.720007,181.107905 221.720007,187.474123 C221.720007,193.840341 226.330027,198.450362 232.257196,198.450362 C235.330542,198.450362 237.52579,197.352737 238.842938,195.377015 L238.842938,198.011312 L243.452958,198.011312 L243.452958,187.474123 Z M226.549552,187.474123 C226.549552,183.742202 228.964324,180.668856 232.91577,180.668856 C236.647691,180.668856 239.281988,183.522678 239.281988,187.474123 C239.281988,191.206044 236.647691,194.279391 232.91577,194.279391 C228.964324,194.059866 226.549552,191.206044 226.549552,187.474123 L226.549552,187.474123 Z M72.443172,187.474123 L72.443172,176.936935 L67.833152,176.936935 L67.833152,179.571233 C66.2964785,177.595509 64.101231,176.497885 61.247409,176.497885 C55.3202405,176.497885 50.7102205,181.107905 50.7102205,187.474123 C50.7102205,193.840341 55.3202405,198.450362 61.247409,198.450362 C64.3207555,198.450362 66.5160035,197.352737 67.833152,195.377015 L67.833152,198.011312 L72.443172,198.011312 L72.443172,187.474123 Z M55.3202405,187.474123 C55.3202405,183.742202 57.735013,180.668856 61.6864585,180.668856 C65.4183795,180.668856 68.0526765,183.522678 68.0526765,187.474123 C68.0526765,191.206044 65.4183795,194.279391 61.6864585,194.279391 C57.735013,194.059866 55.3202405,191.206044 55.3202405,187.474123 Z" fill="white"></path><rect fill="#FF5F00" x="93.2980455" y="16.9034088" width="69.1502985" height="124.251009"></rect><path d="M97.688519,79.0288935 C97.688519,53.783546 109.542856,31.3920209 127.763411,16.9033869 C114.3724,6.3661985 97.468994,-1.94737475e-05 79.0289145,-1.94737475e-05 C35.3434877,-1.94737475e-05 1.7258174e-06,35.3434665 1.7258174e-06,79.0288935 C1.7258174e-06,122.71432 35.3434877,158.057806 79.0289145,158.057806 C97.468994,158.057806 114.3724,151.691588 127.763411,141.1544 C109.542856,126.88529 97.688519,104.274241 97.688519,79.0288935 Z" fill="#EB001B"></path><path d="M255.746345,79.0288935 C255.746345,122.71432 220.402859,158.057806 176.717432,158.057806 C158.277352,158.057806 141.373945,151.691588 127.982936,141.1544 C146.423015,126.665766 158.057827,104.274241 158.057827,79.0288935 C158.057827,53.783546 146.20349,31.3920209 127.982936,16.9033869 C141.373945,6.3661985 158.277352,-1.94737475e-05 176.717432,-1.94737475e-05 C220.402859,-1.94737475e-05 255.746345,35.5629913 255.746345,79.0288935 Z" fill="#F79E1B"></path></g></svg>
            {/* TROY Logo Text (Since Troy SVG is complex, plain text badge is accepted by PayTR) */}
            <span className="font-extrabold text-white opacity-90 text-xl ml-4 italic tracking-tighter self-center pt-1">TROY</span>
          </div>

          <div className="flex items-center gap-6 mt-4 lg:mt-0">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> 256-Bit SSL Güvenli Ödeme</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

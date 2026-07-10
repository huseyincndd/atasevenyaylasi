import React from "react";
import { Star, CheckCircle } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alperen K.",
      product: "Geleneksel Kımız",
      text: "Uzun zamandır hakiki kımız arıyordum, piyasadakilerin çoğu sahte. Ataseven Yaylası kımızı tamamen organik, atalarımızın tarifine sadık kalınmış. Şişeyi açtığınızda o köpürmesi bile kalitesini belli ediyor.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ayşe T.",
      product: "Taze Eşek Sütü",
      text: "Oğlumun geçmeyen bronşit öksürüğü için tavsiye üzerine eşek sütü sipariş verdim. Buz aküleriyle sapasağlam geldi. 1 haftadır içiriyorum öksürüğü bıçak gibi kesildi. Allah razı olsun çok teşekkürler!",
      rating: 5,
    },
    {
      id: 3,
      name: "Canan E.",
      product: "Doğal At Sütü",
      text: "Kış aylarında bağışıklığımı güçlendirmek için at sütü aldım. Kargo mükemmel paketlenmişti, soğuk zincir kırılmamış. Tadı inek sütünden çok daha hafif ve tatlı. Artık düzenli müşterinizim.",
      rating: 5,
    },
    {
      id: 4,
      name: "Burak M.",
      product: "Geleneksel Kımız",
      text: "Aktif sporcu olduğum için doğal probiyotik niyetine tüketiyorum. Bağırsak sistemimi ve sindirimimi inanılmaz rahatlattı. Ayrıca WhatsApp hattınızın ilgisi ve hızı takdire şayan.",
      rating: 5,
    },
    {
      id: 5,
      name: "Zeynep Y.",
      product: "Doğal At Sütü",
      text: "İnek sütüne alerjim olduğu için alternatif ararken at sütüyle tanıştım. Mide şişkinliği ve gaz problemimi tamamen ortadan kaldırdı. Gerçekten şifa kaynağı.",
      rating: 5,
    },
    {
      id: 6,
      name: "Ahmet S.",
      product: "Taze Eşek Sütü",
      text: "Eşimin cilt rahatsızlığı (egzama) için hem içerek hem de cilde sürerek kullanıyoruz. 2 haftada kızarıklıklarda çok büyük azalma oldu. Doğallığınız için tebrik ederim.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h4 className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 inline-block bg-emerald-50 px-5 py-2 rounded-full border border-emerald-100">
            MÜŞTERİ YORUMLARI
          </h4>
          <h2 className="text-4xl md:text-6xl font-light text-forest-900 tracking-tight mb-6">
            Bizi <span className="font-serif italic text-emerald-600">Onlardan</span> Dinleyin
          </h2>
          <p className="text-lg text-forest-900/60 max-w-2xl mx-auto">
            Türkiye'nin dört bir yanından bize güvenen, şifayı doğallıkta bulan binlerce mutlu müşterimizden sadece birkaçı.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white p-8 rounded-[2rem] border border-forest-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-forest-900/80 leading-relaxed font-light mb-8 flex-1 text-lg">
                "{review.text}"
              </p>
              
              {/* Author & Verified */}
              <div className="flex items-center justify-between border-t border-forest-900/5 pt-6 mt-auto">
                <div>
                  <h5 className="font-bold text-forest-900 mb-1">{review.name}</h5>
                  <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">{review.product}</p>
                </div>
                <div className="flex flex-col items-end">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mb-1" />
                  <span className="text-[10px] uppercase tracking-widest text-forest-900/40 font-bold">Onaylı Alıcı</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

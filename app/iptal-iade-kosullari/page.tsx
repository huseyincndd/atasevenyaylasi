"use client";
import React from 'react';

export default function IptalIade() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl font-light text-forest-900 mb-8">İptal ve İade Koşulları</h1>
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-forest-900/5 prose prose-emerald max-w-none text-forest-900/80">
          <h2>1. İptal Şartları</h2>
          <p>Tüketici, vermiş olduğu siparişi ürün kargoya verilmeden önce iptal etme hakkına sahiptir. İptal taleplerinizi <strong>info@atasevenkimiz.com</strong> adresine veya müşteri hizmetleri numaramıza sipariş numaranız ile birlikte iletebilirsiniz. Siparişiniz kargoya verilmeden iptal edildiği takdirde ücret iadeniz 3-5 iş günü içerisinde ödeme yaptığınız kanalla tarafınıza sağlanır.</p>
          
          <h2>2. İade Şartları (Gıda ve Hızlı Tüketim Malları)</h2>
          <p>Tüketici Hakları gereği; <strong>çabuk bozulabilen, son kullanma tarihi geçme ihtimali olan gıda maddeleri (süt, kımız vb.), tek kullanımlık ürünler ve ambalajı açılmış ürünlerin iadesi mümkün değildir.</strong></p>
          <p>Sitemiz üzerinden satışı yapılan tüm ürünler "taze gıda ve soğuk zincir" kategorisinde olduğundan yasal olarak Cayma Hakkı geçerli değildir ve ürünler iade alınamamaktadır.</p>

          <h2>3. Hasarlı veya Kusurlu Ürün Teslimatı</h2>
          <p>Siparişiniz size ulaştığında kargo paketinde bir hasar (yırtılma, patlama, akma) varsa, kargo görevlisine <strong>Hasar Tespit Tutanağı</strong> tutturmanız gerekmektedir. Hasar tespit tutanağı olan ürünlerin yenisi ile değişimi derhal sağlanmaktadır. Tutanak tutulmadan teslim alınan kusurlu/hasarlı kargolar için firmamız sorumluluk kabul edememektedir.</p>
        </div>
      </div>
    </div>
  );
}

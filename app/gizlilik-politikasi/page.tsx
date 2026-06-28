"use client";
import React from 'react';

export default function GizlilikGuvenlik() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl font-light text-forest-900 mb-8">Gizlilik ve Güvenlik Politikası</h1>
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-forest-900/5 prose prose-emerald max-w-none text-forest-900/80">
          <h2>1. Kişisel Verilerin Korunması</h2>
          <p>Ataseven Kımız Yaylası olarak, müşterilerimizin kişisel bilgilerinin gizliliğine ve güvenliğine büyük önem vermekteyiz. Sitemizden alışveriş yaparken veya sitemize üye olurken paylaştığınız ad, soyad, adres, e-posta ve telefon gibi kişisel verileriniz, yalnızca sipariş işlemlerinizi gerçekleştirmek ve size daha iyi hizmet sunmak amacıyla kullanılacaktır.</p>
          
          <h2>2. Kredi Kartı Güvenliği</h2>
          <p>Firmamız, alışveriş sitelerimizden alışveriş yapan kredi kartı sahiplerinin güvenliğini ilk planda tutmaktadır. Kredi kartı bilgileriniz hiçbir şekilde sistemlerimizde saklanmamaktadır.</p>
          <p>Ödeme sayfasında istenen kredi kartı bilgileriniz, siteden alışveriş yapan siz değerli müşterilerimizin güvenliğini en üst seviyede tutmak amacıyla hiçbir şekilde Ataseven Kımız Yaylası veya ona hizmet veren şirketlerin sunucularında tutulmamaktadır. Bu şekilde ödemeye yönelik tüm işlemlerin <strong>PayTR / Banka</strong> ve bilgisayarınız arasında 256-Bit SSL şifreli olarak gerçekleşmesi sağlanmaktadır.</p>

          <h2>3. Çerezler (Cookies)</h2>
          <p>Sitemiz, alışveriş deneyiminizi iyileştirmek için çerezleri kullanabilir. Çerezler, tarayıcınız tarafından bilgisayarınızın sabit diskinde saklanan küçük metin dosyalarıdır. Çerezleri kabul etmeyebilir veya silebilirsiniz, ancak bu durumda sitemizin bazı özelliklerinden faydalanamayabilirsiniz.</p>

          <h2>4. İletişim İzni</h2>
          <p>Kampanyalarımızdan ve yeni ürünlerimizden haberdar olmak için tarafımıza verdiğiniz iletişim onayını dilediğiniz zaman iptal edebilirsiniz.</p>
        </div>
      </div>
    </div>
  );
}

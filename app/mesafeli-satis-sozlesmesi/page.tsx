"use client";
import React from 'react';

export default function MesafeliSatis() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl font-light text-forest-900 mb-8">Mesafeli Satış Sözleşmesi</h1>
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-forest-900/5 prose prose-emerald max-w-none text-forest-900/80">
          <h2>1. Taraflar</h2>
          <p>İşbu Sözleşme aşağıdaki taraflar arasında aşağıda belirtilen hüküm ve şartlar çerçevesinde imzalanmıştır.</p>
          <p><strong>SATICI:</strong> Ataseven Kımız Yaylası<br/>
          <strong>Adres:</strong> 24556. Sk. 180/8, 42090 Meram / Konya<br/>
          <strong>Telefon:</strong> +90 (532) 561 03 67<br/>
          <strong>E-Posta:</strong> info@atasevenkimiz.com</p>
          
          <h2>2. Sözleşmenin Konusu</h2>
          <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait internet sitesinden elektronik ortamda siparişini yaptığı, sözleşmede özellikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>

          <h2>3. Ürün ve Teslimat Bilgileri</h2>
          <p>Sözleşme konusu ürün/ürünlerin temel özellikleri (türü, miktarı, marka/modeli, rengi, adedi) SATICI'ya ait internet sitesinde yer almaktadır. Listelenen ve sitede ilan edilen fiyatlar satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir. Süreli olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerlidir.</p>

          <h2>4. Cayma Hakkı</h2>
          <p>Tüketici, mesafeli sözleşmelerde 14 (on dört) gün içerisinde hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkına sahiptir. Ancak, <strong>çabuk bozulabilen veya son kullanma tarihi geçebilecek malların (Gıda, süt ürünleri, kımız vb.) teslimine ilişkin sözleşmelerde Cayma Hakkı kullanılamaz.</strong> Sitemizde satılan tüm ürünler taze gıda statüsünde olduğundan iade kapsamı dışındadır.</p>
        </div>
      </div>
    </div>
  );
}

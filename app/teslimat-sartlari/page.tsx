"use client";
import React from 'react';

export default function TeslimatSartlari() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl font-light text-forest-900 mb-8">Teslimat Şartları</h1>
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-forest-900/5 prose prose-emerald max-w-none text-forest-900/80">
          <h2>1. Kargo ve Soğuk Zincir</h2>
          <p>Ataseven Kımız Yaylası olarak tüm ürünlerimiz (At Sütü, Eşek Sütü, Kımız) bozulabilir gıda ve soğuk zincir hassasiyeti taşıyan ürünlerdir. Bu nedenle teslimatlarımız, ürünlerin tazeliğini ve kalitesini koruyacak özel strafor kutular ve buz aküleri ile sağlanmaktadır.</p>
          
          <h2>2. Kargo Süreleri</h2>
          <p>Siparişleriniz, ödemenizin onaylanmasının ardından en geç <strong>2 iş günü</strong> içerisinde anlaşmalı kargo firmalarına teslim edilir. Cuma günleri verilen siparişler, ürünlerin kargoda hafta sonu beklemesini ve bozulmasını engellemek amacıyla Pazartesi günü kargoya verilmektedir.</p>

          <h2>3. Teslimat Süreci</h2>
          <p>Kargo firmasının adresinize teslimat süresi, bulunduğunuz il veya ilçenin kargo şubesine olan uzaklığına göre 1 ila 3 iş günü arasında değişebilmektedir. Kargonuz yola çıktığında tarafınıza SMS ve E-Posta ile kargo takip numarası iletilecektir.</p>

          <h2>4. Teslim Alırken Dikkat Edilmesi Gerekenler</h2>
          <p>Lütfen kargonuzu teslim alırken paket üzerinde herhangi bir hasar, yırtılma veya akma olup olmadığını kontrol ediniz. Olağan dışı bir durum tespit ederseniz kargoyu teslim almayarak kargo yetkilisine "Hasar Tespit Tutanağı" tutturunuz ve derhal bizimle iletişime geçiniz.</p>
        </div>
      </div>
    </div>
  );
}

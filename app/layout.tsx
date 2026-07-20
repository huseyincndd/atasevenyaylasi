import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ataseven Yaylası | %100 Doğal At Sütü, Eşek Sütü ve Kımız Siparişi",
  description: "Doğadan sofralarınıza uzanan gerçek şifa. Ataseven Yaylası güvencesiyle %100 saf at sütü, eşek sütü ve geleneksel kımız satın al. Türkiye'nin her yerine kargo imkanı.",
  keywords: ["at sütü satın al", "eşek sütü satın al", "kımız satın al", "kımız sipariş", "at sütü faydaları", "doğal eşek sütü", "taze kımız"],
  openGraph: {
    title: "Ataseven Yaylası | %100 Doğal At Sütü, Eşek Sütü ve Kımız",
    description: "Ataseven Yaylası güvencesiyle %100 saf at sütü, eşek sütü ve geleneksel kımız satın alın.",
    url: "https://atasevenyaylasi.net",
    siteName: "Ataseven Yaylası",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://atasevenyaylasi.net",
  }
};

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MobileCartBar } from "../components/MobileCartBar";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://atasevenyaylasi.net/#website",
        "url": "https://atasevenyaylasi.net",
        "name": "Ataseven Yaylası",
        "description": "Doğadan sofralarınıza uzanan gerçek şifa. Ataseven Yaylası güvencesiyle %100 saf at sütü, eşek sütü ve geleneksel kımız satın al.",
        "inLanguage": "tr-TR"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://atasevenyaylasi.net/#localbusiness",
        "name": "Ataseven Yaylası",
        "url": "https://atasevenyaylasi.net",
        "logo": "https://atasevenyaylasi.net/icon.png",
        "image": "https://atasevenyaylasi.net/icon.png",
        "description": "%100 saf at sütü, eşek sütü ve geleneksel kımız üretim ve satışı.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "24556. Sk. 180/8",
          "addressLocality": "Meram",
          "addressRegion": "Konya",
          "postalCode": "42090",
          "addressCountry": "TR"
        },
        "sameAs": [
          "https://www.instagram.com/atasevenkimizsut/"
        ]
      }
    ]
  };

  return (
    <html lang="tr" className={`scroll-smooth ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 selection:bg-emerald-200">
        <Script
          id="global-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <MobileCartBar />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}

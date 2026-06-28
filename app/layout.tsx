import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ataseven Yaylası | Premium At Sütü, Eşek Sütü ve Kımız",
  description: "Doğadan gelen gerçek sağlık. Ataseven Yaylası'nın el değmemiş doğasından sofralarınıza uzanan %100 doğal at sütü, eşek sütü ve geleneksel kımız.",
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
  return (
    <html lang="tr" className={`scroll-smooth ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 selection:bg-emerald-200">
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

import React from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: "p1",
    name: "At Sütü",
    description: "Günlük taze sağılmış, besin değeri yüksek, %100 doğal.",
    price: 1500,
    image: "/images/mares_milk_1782482818864.png",
  },
  {
    id: "p2",
    name: "Eşek Sütü",
    description: "Anne sütüne en yakın içeriğe sahip, eşsiz şifa kaynağı.",
    price: 1500,
    image: "/images/donkeys_milk_1782482831585.png",
  },
  {
    id: "p3",
    name: "Geleneksel Kımız",
    description: "Geleneksel yöntemlerle mayalanmış probiyotik zengini.",
    price: 1500,
    image: "/images/kumis_bottle_1782482841763.png",
  },
];

export const ProductList = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-beige-100 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 border-b border-forest-900/10 pb-8 text-left">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-forest-900 tracking-tight">
            Koleksiyon
          </h2>
          <p className="text-[10px] md:text-sm uppercase tracking-[0.2em] font-medium text-forest-900/50 max-w-xs text-left md:text-right mt-4 md:mt-0 leading-relaxed">
            Özenle seçilmiş, sınırlı üretim <br className="hidden md:block" />doğal lezzetler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

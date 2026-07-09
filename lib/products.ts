export interface Product {
  id: string;
  name: string;
  price: number;
}

// Bu liste sistemin ana gerçeğidir (Source of Truth).
// PayTR ödemesi alınırken fiyatlar tarayıcıdan (frontend) değil, bu listeden okunur.
export const PRODUCTS: Product[] = [
  // Ana Ürünler
  { id: "p1", name: "At Sütü", price: 1500 },
  { id: "p2", name: "Eşek Sütü", price: 1000 },
  
  // Geleneksel Kımız Paketleri
  { id: "k1", name: "Geleneksel Kımız (1 Adet)", price: 500 },
  { id: "k2", name: "Geleneksel Kımız (2 Adet)", price: 750 },
  { id: "k3", name: "Geleneksel Kımız (3 Adet)", price: 1000 },
  { id: "k4", name: "Geleneksel Kımız (4 Adet)", price: 1250 },
  { id: "k5", name: "Geleneksel Kımız (5 Adet)", price: 1500 },
  { id: "k6", name: "Geleneksel Kımız (6 Adet)", price: 1750 },
  { id: "k12", name: "Geleneksel Kımız (12 Adet)", price: 3000 },
  { id: "k18", name: "Geleneksel Kımız (18 Adet)", price: 4000 },
  { id: "k24", name: "Geleneksel Kımız (24 Adet)", price: 5500 },
];

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find((p) => p.id === id);
};

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PRODUCTS = [
  { productId: "p1", name: "At Sütü", price: 1500, oldPrice: null },
  { productId: "p2", name: "Eşek Sütü", price: 1000, oldPrice: null },
  { productId: "k1", name: "Geleneksel Kımız (1 Adet)", price: 300, oldPrice: 500 },
  { productId: "k2", name: "Geleneksel Kımız (2 Adet)", price: 450, oldPrice: 750 },
  { productId: "k3", name: "Geleneksel Kımız (3 Adet)", price: 600, oldPrice: 1000 },
  { productId: "k4", name: "Geleneksel Kımız (4 Adet)", price: 750, oldPrice: 1250 },
  { productId: "k5", name: "Geleneksel Kımız (5 Adet)", price: 900, oldPrice: 1500 },
  { productId: "k6", name: "Geleneksel Kımız (6 Adet)", price: 1050, oldPrice: 1750 },
  { productId: "k12", name: "Geleneksel Kımız (12 Adet)", price: 1800, oldPrice: 3000 },
  { productId: "k18", name: "Geleneksel Kımız (18 Adet)", price: 2400, oldPrice: 4000 },
  { productId: "k24", name: "Geleneksel Kımız (24 Adet)", price: 3300, oldPrice: 5500 },
];

async function main() {
  console.log("Seeding started...");
  for (const product of PRODUCTS) {
    await prisma.product.upsert({
      where: { productId: product.productId },
      update: { price: product.price, oldPrice: product.oldPrice }, // Fiyatları ve indirimleri bilerek eziyoruz ki kullanıcının verdiği listeye göre sıfırlansın
      create: {
        productId: product.productId,
        name: product.name,
        price: product.price,
        oldPrice: product.oldPrice,
      },
    });
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

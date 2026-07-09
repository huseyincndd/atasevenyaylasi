import prisma from "./prisma";

export interface Product {
  id: string;
  name: string;
  price: number;
}

// Artık veriler statik array'den değil, veritabanından çekiliyor.
export const getProductsFromDB = async (): Promise<Product[]> => {
  try {
    const dbProducts = await prisma.product.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'asc' }
    });
    
    return dbProducts.map(p => ({
      id: p.productId,
      name: p.name,
      price: p.price
    }));
  } catch (error) {
    console.error("Database fetch error:", error);
    return []; // Veritabanına ulaşılamazsa boş döner
  }
};

export const getProductByIdFromDB = async (id: string): Promise<Product | undefined> => {
  try {
    const dbProduct = await prisma.product.findUnique({
      where: { productId: id }
    });
    
    if (!dbProduct) return undefined;
    
    return {
      id: dbProduct.productId,
      name: dbProduct.name,
      price: dbProduct.price
    };
  } catch (error) {
    console.error(`Database fetch error for product ${id}:`, error);
    return undefined;
  }
};

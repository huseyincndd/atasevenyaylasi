import { Hero } from "../components/Hero";
import { TrustFeatures } from "../components/TrustFeatures";
import { ProductList } from "../components/ProductList";
import { KimizSection } from "../components/KimizSection";
import { SocialProof } from "../components/SocialProof";
import { FarmStory } from "../components/FarmStory";
import { Testimonials } from "../components/Testimonials";
import { getProductsFromDB } from "@/lib/products";
import Script from "next/script";

export default async function Home() {
  const products = await getProductsFromDB();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        // Since we don't have individual product pages or explicit images in the Product interface fetched here, 
        // we'll point to the homepage URL and a generic image for schema purposes.
        "image": "https://atasevenyaylasi.net/icon.png",
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "TRY",
          "availability": "https://schema.org/InStock",
          "url": "https://atasevenyaylasi.net"
        }
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <KimizSection products={products} />
      <ProductList products={products} />
      <TrustFeatures />
      <SocialProof />
      <FarmStory />
      <Testimonials />
    </div>
  );
}

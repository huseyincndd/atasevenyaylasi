import { Hero } from "../components/Hero";
import { TrustFeatures } from "../components/TrustFeatures";
import { ProductList } from "../components/ProductList";
import { KimizSection } from "../components/KimizSection";
import { SocialProof } from "../components/SocialProof";
import { FarmStory } from "../components/FarmStory";
import { Testimonials } from "../components/Testimonials";
import { getProductsFromDB } from "@/lib/products";

export default async function Home() {
  const products = await getProductsFromDB();

  return (
    <div className="flex flex-col min-h-screen">
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

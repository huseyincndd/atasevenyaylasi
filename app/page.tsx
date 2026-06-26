import { Hero } from "../components/Hero";
import { TrustFeatures } from "../components/TrustFeatures";
import { ProductList } from "../components/ProductList";
import { FarmStory } from "../components/FarmStory";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustFeatures />
      <ProductList />
      <FarmStory />
      <Testimonials />
    </div>
  );
}

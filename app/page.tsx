import { Hero } from "../components/Hero";
import { TrustFeatures } from "../components/TrustFeatures";
import { ProductList } from "../components/ProductList";
import { KimizSection } from "../components/KimizSection";
import { SocialProof } from "../components/SocialProof";
import { FarmStory } from "../components/FarmStory";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProductList />
      <KimizSection />
      <TrustFeatures />
      <SocialProof />
      <FarmStory />
      <Testimonials />
    </div>
  );
}

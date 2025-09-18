import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
}

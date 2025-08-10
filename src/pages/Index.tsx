import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AnimeGrid } from "@/components/AnimeGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AnimeGrid />
      </main>
    </div>
  );
};

export default Index;

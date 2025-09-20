import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SupplyChainMap from "@/components/SupplyChainMap";
import WalletConnect from "@/components/WalletConnect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SupplyChainMap />
      <WalletConnect />
      <Footer />
    </div>
  );
};

export default Index;

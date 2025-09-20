import { Button } from "@/components/ui/button";
import { Truck, Lock, ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-supply-chain.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
      
      {/* Animated Trucks */}
      <div className="absolute top-20 w-full h-full pointer-events-none">
        <div className="animate-truck absolute top-1/4">
          <Truck className="w-8 h-8 text-primary glow-primary" />
        </div>
        <div className="animate-truck absolute top-1/2" style={{ animationDelay: '2s' }}>
          <Truck className="w-6 h-6 text-accent glow-encrypt" />
        </div>
        <div className="animate-truck absolute top-3/4" style={{ animationDelay: '4s' }}>
          <Truck className="w-7 h-7 text-supply-chain" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Lock className="w-6 h-6 text-primary animate-encrypt" />
            <span className="text-primary font-semibold tracking-wide">ENCRYPTED FACTORING</span>
            <Shield className="w-6 h-6 text-accent animate-encrypt" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Finance Supply Chains{" "}
            <span className="text-primary glow-primary">Confidentially</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary invoice factoring platform where terms remain encrypted until 
            both buyer and seller reach agreement. Secure, transparent, efficient.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="glow-primary text-lg px-8 py-4">
              Start Factoring
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              View Supply Chain
              <Truck className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-card p-6 rounded-lg border border-border/50 glow-encrypt">
              <Lock className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">End-to-End Encryption</h3>
              <p className="text-muted-foreground text-sm">Terms locked until consensus</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
              <Truck className="w-8 h-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Real-Time Tracking</h3>
              <p className="text-muted-foreground text-sm">Monitor supply chain flow</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
              <Shield className="w-8 h-8 text-supply-chain mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Wallet Integration</h3>
              <p className="text-muted-foreground text-sm">Secure factoring deals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
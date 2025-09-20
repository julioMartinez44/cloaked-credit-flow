import { Button } from "@/components/ui/button";
import { Wallet, Shield, Lock } from "lucide-react";
import logoImage from "@/assets/logo-barcode-blockchain.jpg";

const Header = () => {
  return (
    <header className="relative z-50 bg-card/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Supply Chain Finance Logo" 
              className="w-10 h-10 rounded-lg glow-primary"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">ChainFinance</h1>
              <p className="text-xs text-muted-foreground">Encrypted Supply Chain Hub</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#security" className="text-muted-foreground hover:text-primary transition-colors">
              Security
            </a>
            <a href="#factoring" className="text-muted-foreground hover:text-primary transition-colors">
              Factoring
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Security</span>
            </Button>
            <Button className="flex items-center space-x-2 glow-primary">
              <Wallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
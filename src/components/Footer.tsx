import { Package, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* Animated Conveyor Belt */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="absolute inset-0 flex items-center animate-conveyor">
          <Package className="w-4 h-4 text-primary-foreground mx-8" />
          <Package className="w-4 h-4 text-primary-foreground mx-8" />
          <Package className="w-4 h-4 text-primary-foreground mx-8" />
          <Package className="w-4 h-4 text-primary-foreground mx-8" />
          <Package className="w-4 h-4 text-primary-foreground mx-8" />
          <Package className="w-4 h-4 text-primary-foreground mx-8" />
          <Package className="w-4 h-4 text-primary-foreground mx-8" />
          <Package className="w-4 h-4 text-primary-foreground mx-8" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">ChainFinance</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              The world's first encrypted supply chain finance platform. 
              Secure, transparent, and efficient invoice factoring.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
                <span className="text-muted-foreground">Encrypted Pallets</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <ArrowRight className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Moving Securely</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Invoice Factoring</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Supply Chain</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Encryption</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wallet Connect</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Security</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">End-to-End Encryption</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Audit Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ChainFinance. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-muted-foreground text-xs">Powered by</span>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
              <span className="text-primary text-sm font-semibold">Blockchain</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Truck, Package, Factory, Store } from "lucide-react";
import { Card } from "@/components/ui/card";

const SupplyChainMap = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Encrypted Supply Chain <span className="text-primary">Network</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch your invoices flow through our secure, encrypted network where 
            every transaction is protected until all parties agree.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Supply Chain Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            {/* Supplier */}
            <Card className="bg-gradient-card p-8 text-center border-border/50 glow-encrypt">
              <Factory className="w-12 h-12 text-primary mx-auto mb-4 animate-glow" />
              <h3 className="font-semibold text-lg mb-2">Supplier</h3>
              <p className="text-muted-foreground text-sm mb-4">Creates invoice for goods</p>
              <div className="bg-muted/20 p-3 rounded-lg">
                <p className="text-xs text-primary font-mono">ENCRYPTED: ████████</p>
                <p className="text-xs text-muted-foreground mt-1">Terms: Hidden</p>
              </div>
            </Card>
            
            {/* Encrypted Transport */}
            <div className="hidden md:flex flex-col items-center space-y-4">
              <div className="animate-truck relative">
                <Truck className="w-8 h-8 text-primary glow-primary" />
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary animate-glow"></div>
              <Package className="w-6 h-6 text-accent animate-encrypt" />
            </div>
            
            {/* Finance Hub */}
            <Card className="bg-gradient-card p-8 text-center border-primary/30 glow-primary">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <span className="text-primary font-bold">CF</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Finance Hub</h3>
              <p className="text-muted-foreground text-sm mb-4">Processes factoring</p>
              <div className="bg-primary/10 p-3 rounded-lg border border-primary/30">
                <p className="text-xs text-primary font-mono">DECRYPTING...</p>
                <p className="text-xs text-primary mt-1">Agreement: Pending</p>
              </div>
            </Card>
            
            {/* Encrypted Transport */}
            <div className="hidden md:flex flex-col items-center space-y-4">
              <div className="animate-truck relative" style={{ animationDelay: '2s' }}>
                <Truck className="w-8 h-8 text-accent glow-encrypt" />
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-accent via-primary to-accent animate-glow"></div>
              <Package className="w-6 h-6 text-primary animate-encrypt" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Buyer */}
            <Card className="bg-gradient-card p-8 text-center border-border/50">
              <Store className="w-12 h-12 text-supply-chain mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Buyer</h3>
              <p className="text-muted-foreground text-sm mb-4">Receives goods & pays</p>
              <div className="bg-supply-chain/10 p-3 rounded-lg">
                <p className="text-xs text-supply-chain font-mono">RECEIVED</p>
                <p className="text-xs text-muted-foreground mt-1">Payment: Complete</p>
              </div>
            </Card>
          </div>
          
          {/* Process Steps */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Upload Invoice</h4>
              <p className="text-muted-foreground text-sm">Terms automatically encrypted until agreement</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Secure Negotiation</h4>
              <p className="text-muted-foreground text-sm">Both parties negotiate without revealing terms</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-supply-chain/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-supply-chain font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Execute Deal</h4>
              <p className="text-muted-foreground text-sm">Terms revealed and transaction completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainMap;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, Shield, Lock, CheckCircle } from "lucide-react";

const WalletConnect = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Secure <span className="text-primary">Wallet Integration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect your wallet to participate in encrypted factoring deals. 
            All transactions are secured and terms remain hidden until agreement.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card p-8 md:p-12 border-border/50 glow-encrypt">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Wallet className="w-8 h-8 text-primary glow-primary" />
                  <h3 className="text-2xl font-bold">Connect & Factor</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-supply-chain" />
                    <span className="text-muted-foreground">Wallet-based authentication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-supply-chain" />
                    <span className="text-muted-foreground">Encrypted invoice terms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-supply-chain" />
                    <span className="text-muted-foreground">Automatic settlement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-supply-chain" />
                    <span className="text-muted-foreground">Real-time tracking</span>
                  </div>
                </div>
                
                <Button className="glow-primary text-lg px-8 py-4">
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect Wallet
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="bg-muted/10 p-6 rounded-lg border border-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Invoice #12345</span>
                    <Lock className="w-4 h-4 text-primary animate-encrypt" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Amount:</span>
                      <span className="text-sm font-mono text-primary">████████</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Rate:</span>
                      <span className="text-sm font-mono text-primary">█████</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Terms:</span>
                      <span className="text-sm font-mono text-primary">███████</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded border border-primary/30">
                    <p className="text-xs text-primary text-center">
                      🔒 ENCRYPTED UNTIL AGREEMENT
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted/10 p-6 rounded-lg border border-accent/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Factor Agreement</span>
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-accent mb-2">Ready for Wallet Signature</p>
                    <Button variant="outline" size="sm" className="border-accent/50 text-accent hover:bg-accent/10">
                      Sign Agreement
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WalletConnect;
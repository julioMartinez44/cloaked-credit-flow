import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Truck, Shield, Zap, Eye, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Platform <span className="text-primary glow-primary">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make encrypted supply chain finance secure, efficient, and transparent.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-border/50 glow-encrypt">
            <CardHeader>
              <Lock className="w-10 h-10 text-primary mb-4" />
              <CardTitle>End-to-End Encryption</CardTitle>
              <CardDescription>
                Invoice terms remain completely encrypted until both parties reach consensus
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />AES-256 encryption</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Zero-knowledge proofs</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Secure key exchange</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <Truck className="w-10 h-10 text-accent mb-4" />
              <CardTitle>Real-Time Tracking</CardTitle>
              <CardDescription>
                Monitor supply chain movements and logistics in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-accent mr-2" />GPS integration</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-accent mr-2" />IoT sensors</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-accent mr-2" />Automated alerts</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <Shield className="w-10 h-10 text-supply-chain mb-4" />
              <CardTitle>Wallet Integration</CardTitle>
              <CardDescription>
                Secure Web3 wallet connectivity for seamless transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-supply-chain mr-2" />Multi-wallet support</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-supply-chain mr-2" />Smart contracts</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-supply-chain mr-2" />Instant settlements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <Zap className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Instant Processing</CardTitle>
              <CardDescription>
                Lightning-fast invoice processing and approval workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Sub-second matching</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Automated verification</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Bulk processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <Eye className="w-10 h-10 text-accent mb-4" />
              <CardTitle>Transparent Auditing</CardTitle>
              <CardDescription>
                Complete audit trails while maintaining privacy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-accent mr-2" />Immutable records</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-accent mr-2" />Compliance reporting</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-accent mr-2" />Regulatory ready</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <Clock className="w-10 h-10 text-supply-chain mb-4" />
              <CardTitle>24/7 Operations</CardTitle>
              <CardDescription>
                Round-the-clock processing with global accessibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-supply-chain mr-2" />Global infrastructure</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-supply-chain mr-2" />99.9% uptime</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-supply-chain mr-2" />Multi-timezone support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card p-12 rounded-lg border border-border/50">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the future of encrypted supply chain finance and experience the power of secure, transparent factoring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="glow-primary">
              Start Factoring
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Clock, TrendingUp, FileText, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Factoring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 glow-encrypt">ENCRYPTED FACTORING</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Invoice <span className="text-primary glow-primary">Factoring</span> Reimagined
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary encrypted factoring platform where terms remain confidential until both parties agree. Fast, secure, and transparent.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How Encrypted Factoring Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 glow-encrypt">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Submit Invoice</h3>
              <p className="text-sm text-muted-foreground">Upload your invoice with encrypted terms and preferred factoring rates</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">2. Encrypted Matching</h3>
              <p className="text-sm text-muted-foreground">Our system matches you with suitable factors without revealing terms</p>
            </div>
            <div className="text-center">
              <div className="bg-supply-chain/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-supply-chain" />
              </div>
              <h3 className="font-semibold mb-2">3. Secure Agreement</h3>
              <p className="text-sm text-muted-foreground">Terms are revealed only when both parties agree to proceed</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">4. Instant Settlement</h3>
              <p className="text-sm text-muted-foreground">Funds are transferred instantly via smart contract execution</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card border-border/50 glow-encrypt">
            <CardHeader>
              <Clock className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Faster Funding</CardTitle>
              <CardDescription>
                Get funded in minutes, not days
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Traditional Factoring</span>
                <span className="text-2xl font-bold text-muted-foreground">3-7 days</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm">ChainFinance</span>
                <span className="text-2xl font-bold text-primary">5 minutes</span>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-primary font-semibold">⚡ 99.2% faster than traditional methods</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <TrendingUp className="w-10 h-10 text-accent mb-4" />
              <CardTitle>Better Rates</CardTitle>
              <CardDescription>
                Competitive rates through encrypted bidding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Market Average</span>
                <span className="text-2xl font-bold text-muted-foreground">3.5%</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm">ChainFinance</span>
                <span className="text-2xl font-bold text-accent">2.1%</span>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm text-accent font-semibold">💰 Save up to 40% on factoring fees</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Factoring Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Factoring Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
                <div className="text-3xl font-bold">1.8%</div>
                <div className="text-sm text-muted-foreground">per transaction</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Up to $50K per invoice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">5-minute approval</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Basic encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Email support</span>
                </div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 relative glow-primary">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="text-3xl font-bold">1.5%</div>
                <div className="text-sm text-muted-foreground">per transaction</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Up to $500K per invoice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">3-minute approval</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Advanced encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Priority support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">API access</span>
                </div>
                <Button className="w-full mt-6 glow-primary">Choose Professional</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large corporations</CardDescription>
                <div className="text-3xl font-bold">1.2%</div>
                <div className="text-sm text-muted-foreground">per transaction</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Unlimited invoice size</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Instant approval</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Military-grade encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Custom integrations</span>
                </div>
                <Button variant="outline" className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card p-12 rounded-lg border border-border/50">
          <h2 className="text-3xl font-bold mb-4">Ready to Factor Your First Invoice?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using encrypted factoring to improve their cash flow and protect their financial privacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="glow-primary">
              Start Factoring Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Calculate Savings
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Factoring;
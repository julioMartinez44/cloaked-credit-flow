import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Key, Server, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 glow-encrypt">ENTERPRISE SECURITY</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bank-Grade <span className="text-primary glow-primary">Security</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with military-grade encryption and zero-trust architecture to protect your most sensitive financial data.
          </p>
        </div>

        {/* Security Standards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/50">
            <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="font-bold">SOC 2</div>
            <div className="text-sm text-muted-foreground">Compliant</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/50">
            <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="font-bold">AES-256</div>
            <div className="text-sm text-muted-foreground">Encryption</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/50">
            <FileCheck className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="font-bold">PCI DSS</div>
            <div className="text-sm text-muted-foreground">Level 1</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-lg border border-border/50">
            <Server className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="font-bold">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card border-border/50 glow-encrypt">
            <CardHeader>
              <Lock className="w-10 h-10 text-primary mb-4" />
              <CardTitle>End-to-End Encryption</CardTitle>
              <CardDescription>
                Advanced cryptographic protection for all data in transit and at rest
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">AES-256 Encryption</div>
                  <div className="text-sm text-muted-foreground">Military-grade encryption for all sensitive data</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Perfect Forward Secrecy</div>
                  <div className="text-sm text-muted-foreground">Session keys ensure past communications remain secure</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Zero-Knowledge Architecture</div>
                  <div className="text-sm text-muted-foreground">We never have access to your unencrypted data</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <Key className="w-10 h-10 text-accent mb-4" />
              <CardTitle>Identity & Access Management</CardTitle>
              <CardDescription>
                Multi-factor authentication and role-based access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-semibold">Multi-Factor Authentication</div>
                  <div className="text-sm text-muted-foreground">Hardware keys, biometrics, and time-based tokens</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-semibold">Role-Based Access Control</div>
                  <div className="text-sm text-muted-foreground">Granular permissions and least-privilege access</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-semibold">Single Sign-On (SSO)</div>
                  <div className="text-sm text-muted-foreground">Enterprise identity provider integration</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <Eye className="w-10 h-10 text-supply-chain mb-4" />
              <CardTitle>Monitoring & Auditing</CardTitle>
              <CardDescription>
                Real-time threat detection and comprehensive audit trails
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-supply-chain mt-0.5" />
                <div>
                  <div className="font-semibold">24/7 Security Monitoring</div>
                  <div className="text-sm text-muted-foreground">AI-powered threat detection and response</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-supply-chain mt-0.5" />
                <div>
                  <div className="font-semibold">Immutable Audit Logs</div>
                  <div className="text-sm text-muted-foreground">Blockchain-based tamper-proof activity records</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-supply-chain mt-0.5" />
                <div>
                  <div className="font-semibold">Compliance Reporting</div>
                  <div className="text-sm text-muted-foreground">Automated compliance reports for auditors</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <Server className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Infrastructure Security</CardTitle>
              <CardDescription>
                Hardened infrastructure with multiple layers of protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Multi-Region Deployment</div>
                  <div className="text-sm text-muted-foreground">Geographic distribution for resilience</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">DDoS Protection</div>
                  <div className="text-sm text-muted-foreground">Advanced traffic filtering and rate limiting</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold">Secure Enclaves</div>
                  <div className="text-sm text-muted-foreground">Hardware-level isolation for critical operations</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Certifications */}
        <div className="bg-gradient-card p-8 rounded-lg border border-border/50 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Security Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-muted-foreground">Independently audited security controls and processes</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">PCI DSS Level 1</h3>
              <p className="text-sm text-muted-foreground">Highest level of payment card industry compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">ISO 27001</h3>
              <p className="text-sm text-muted-foreground">International information security management standard</p>
            </div>
          </div>
        </div>

        {/* Contact Security Team */}
        <div className="text-center bg-gradient-card p-12 rounded-lg border border-border/50">
          <h2 className="text-3xl font-bold mb-4">Questions About Security?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our security team is available to answer your questions and provide detailed security documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="glow-primary">
              Contact Security Team
            </Button>
            <Button variant="outline" size="lg">
              Download Security Whitepaper
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
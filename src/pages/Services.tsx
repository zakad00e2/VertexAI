import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brain,
  Code,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  LineChart,
  Check,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions powered by cutting-edge machine learning models",
      features: [
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Custom Model Training",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies",
      features: [
        "React & Next.js Applications",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "API Integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android Apps",
        "React Native Development",
        "UI/UX Design",
        "App Store Optimization",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Robust data infrastructure and pipeline development",
      features: [
        "Data Warehousing",
        "ETL Pipeline Design",
        "Real-time Analytics",
        "Database Optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "AWS & Azure Setup",
        "Cloud Migration",
        "DevOps Automation",
        "Kubernetes Orchestration",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits and protection",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Threat Monitoring",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "1 Week Delivery",
        "Basic AI Integration",
        "Responsive Design",
        "30 Days Support",
        "Source Code",
      ],
    },
    {
      name: "Professional",
      price: "$8,000",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "3 Week Delivery",
        "Advanced AI Features",
        "Custom Design System",
        "90 Days Support",
        "Source Code",
        "API Development",
        "Analytics Setup",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large-scale projects",
      features: [
        "Custom Timeline",
        "Full AI Suite",
        "White-label Solution",
        "1 Year Support",
        "Source Code",
        "Dedicated Team",
        "Priority Support",
        "Custom Infrastructure",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions to power your digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border bg-card hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your goals and requirements" },
              { step: "02", title: "Planning", description: "Creating a strategic roadmap" },
              { step: "03", title: "Development", description: "Building your solution with agile methods" },
              { step: "04", title: "Launch", description: "Deploying and optimizing your project" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-accent/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for every project size
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full border-border bg-card ${plan.popular ? 'ring-2 ring-accent shadow-lg scale-105' : ''}`}>
                  <CardHeader>
                    {plan.popular && (
                      <div className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium w-fit mb-2">
                        Most Popular
                      </div>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and find the perfect solution
            </p>
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

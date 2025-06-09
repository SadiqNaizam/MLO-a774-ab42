import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Label might be used outside shadcn Form for simpler sections
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import BenefitHighlightItem from '@/components/BenefitHighlightItem';
import TestimonialCard from '@/components/TestimonialCard';
import PricingTierCard from '@/components/PricingTierCard';

import { Briefcase, Mail, MessageSquare, DollarSign, Users, ShieldCheck, BarChart, Zap, Award } from 'lucide-react'; // Example icons

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).optional(),
});

type FormData = z.infer<typeof formSchema>;

const LandingPage = () => {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send data to a backend
    navigate('/thank-you');
  };

  const placeholderBenefits = [
    { title: "Increased Productivity", description: "Streamline your workflow and get more done with our intuitive tools.", icon: Zap },
    { title: "Data-Driven Insights", description: "Make informed decisions with our comprehensive analytics and reporting features.", icon: BarChart },
    { title: "Enhanced Security", description: "Protect your valuable data with top-tier security measures and protocols.", icon: ShieldCheck },
  ];

  const placeholderTestimonials = [
    { quote: "This product revolutionized how we operate. Highly recommended!", authorName: "Jane Doe", authorTitle: "CEO, Tech Solutions Inc.", authorAvatarSrc: "https://i.pravatar.cc/150?img=1" },
    { quote: "The support team is fantastic, and the features are exactly what we needed.", authorName: "John Smith", authorTitle: "Marketing Manager, Innovate Ltd.", authorAvatarSrc: "https://i.pravatar.cc/150?img=2" },
  ];

  const placeholderPricingTiers = [
    { tierName: "Basic", price: "$29", priceFrequency: "/month", features: ["Core Feature A", "10GB Storage", "Email Support"], ctaText: "Get Started", onCtaClick: () => console.log("Basic tier clicked") },
    { tierName: "Pro", price: "$79", priceFrequency: "/month", features: ["All Basic Features", "50GB Storage", "Priority Support", "Advanced Analytics"], ctaText: "Choose Pro", onCtaClick: () => console.log("Pro tier clicked"), isPopular: true },
    { tierName: "Enterprise", price: "Custom", priceFrequency: "", features: ["All Pro Features", "Unlimited Storage", "Dedicated Support", "Custom Integrations"], ctaText: "Contact Us", onCtaClick: () => console.log("Enterprise tier clicked") },
  ];

  console.log('LandingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Zap className="h-6 w-6 text-green-600" /> {/* Placeholder Logo */}
            <span className="font-bold">SaaSProduct</span>
          </a>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="#features" className={navigationMenuTriggerStyle()}>Features</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#testimonials" className={navigationMenuTriggerStyle()}>Testimonials</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#pricing" className={navigationMenuTriggerStyle()}>Pricing</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#contact" className={navigationMenuTriggerStyle()}>Contact</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => console.log('Login clicked')}>Login</Button>
            <Button onClick={() => form.handleSubmit(onSubmit)()}>Request Demo</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 to-cyan-50 text-center">
          <div className="container px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 mb-6">
              The Future of Your Workflow is Here
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how our innovative SaaS solution can transform your business, boost productivity, and drive growth.
            </p>
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request a Demo
            </Button>
            <div className="mt-12">
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60" alt="SaaS Product Showcase" className="rounded-lg shadow-xl mx-auto w-full max-w-4xl" />
            </div>
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        {/* Features/Benefits Section */}
        <section id="features" className="py-16 container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Us?</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Powerful features designed to give you a competitive edge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderBenefits.map((benefit, index) => (
              <Card key={index} className="text-center_ hover:shadow-lg transition-shadow">
                <CardHeader>
                    <div className="mx-auto_ bg-green-100 rounded-full p-3 w-fit mb-4 inline-block">
                        <benefit.icon className="h-8 w-8 text-green-600" />
                    </div>
                   <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        {/* Social Proof/Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-100">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trusted by Businesses Like Yours</h2>
              <p className="text-gray-600 mt-2">Hear what our satisfied customers have to say.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {placeholderTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} authorAvatarFallback={testimonial.authorName.substring(0,2)} />
              ))}
            </div>
          </div>
        </section>
        
        <Separator className="my-12 md:my-16" />

        {/* Pricing Section */}
        <section id="pricing" className="py-16 container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 mt-2">Choose the plan that's right for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
            {placeholderPricingTiers.map((tier, index) => (
              <PricingTierCard key={index} {...tier} />
            ))}
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        {/* CTA / Form Section */}
        <section id="contact" className="py-16 bg-gradient-to-br from-green-50 to-cyan-50">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Ready to Get Started?</h2>
                <p className="text-gray-600 mt-2">Request a demo or get in touch with our sales team today.</p>
            </div>
            <Card className="max-w-xl mx-auto p-6 md:p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us a bit about your needs..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t bg-gray-100">
        <div className="container text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
             {/* Add social media icons/links here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
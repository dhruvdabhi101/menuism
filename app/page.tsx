"use client";
import CallToAction from "@/components/landing-page/cta";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import MenuDemo from "@/components/landing-page/menu-demo";
import Navbar from "@/components/landing-page/navbar";
import Testimonials from "@/components/landing-page/testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MenuDemo />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

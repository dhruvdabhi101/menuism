import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import Button from "./ui-custom/button";
import AnimatedImage from "./ui-custom/animated-image";

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-spice-texture opacity-10 pointer-events-none" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-cream-500 to-transparent opacity-50 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-saffron-100 border border-saffron-200 shadow-sm">
              <p className="text-sm font-medium text-saffron-800">
                For Indian Restaurant Owners
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-charcoal-800">
              Transform Your{" "}
              <span className="text-gradient font-bold">Menu</span> Into A Work
              of Art
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Create beautiful digital menus that can be printed and displayed
              for your customers. Increase orders, reduce errors, and delight
              your patrons.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                icon={<ChevronRight size={20} />}
                iconPosition="right"
              >
                Create Your Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToFeatures}
                className="group"
              >
                See How It Works
                <ChevronDown
                  size={20}
                  className="ml-2 transition-transform group-hover:translate-y-1"
                />
              </Button>
            </div>

            <div className="mt-8 text-sm text-charcoal-500">
              <p>
                Join{" "}
                <span className="font-medium text-charcoal-700">1,500+</span>{" "}
                restaurants already using MenuKart
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main menu card */}
              <div className="relative z-20 transform rotate-3 subtle-rotate shadow-card">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1553451133-8083c47243d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Restaurant menu sample"
                  className="rounded-xl"
                  animation="zoom-in"
                />
              </div>

              {/* Secondary menu card */}
              <div className="absolute top-10 -left-10 z-10 transform -rotate-6 subtle-rotate shadow-card max-w-[80%]">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Restaurant menu example"
                  className="rounded-xl"
                  animation="fade-in"
                  delay={300}
                />
              </div>

              {/* QR code overlay */}
              <div className="absolute -bottom-6 -right-6 z-30 bg-white p-3 rounded-xl shadow-lg animate-fade-up">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/menu')] bg-contain bg-no-repeat bg-center" />
                <p className="text-xs text-center mt-2 font-medium text-charcoal-600">
                  Scan to view menu
                </p>
              </div>

              {/* Floating spice decoration */}
              <div className="absolute -top-8 -right-8 z-0 opacity-20 animate-float">
                <div className="w-20 h-20 bg-[url('https://png.pngtree.com/png-clipart/20220719/ourmid/pngtree-indian-spices-colorful-powder-png-image_6022399.png')] bg-contain bg-no-repeat bg-center transform rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

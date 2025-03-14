import React from "react";
import {
  Printer,
  QrCode,
  Edit,
  Smartphone,
  Shield,
  PenTool,
  RefreshCw,
  Image,
  Globe,
} from "lucide-react";
import Card from "./ui-custom/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <Card variant="glass" className="h-full" hover="glow">
      <div
        className="p-6 flex flex-col h-full"
        style={{
          animation: "fade-up 0.5s ease-out forwards",
          animationDelay: `${delay}ms`,
          opacity: 0,
        }}
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-saffron-100 text-saffron-600 mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-charcoal-800">
          {title}
        </h3>
        <p className="text-charcoal-600 text-base flex-grow">{description}</p>
      </div>
    </Card>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Printer size={24} />,
      title: "High-Quality Printing",
      description:
        "Print professional menus on premium paper stocks that make a lasting impression.",
    },
    {
      icon: <QrCode size={24} />,
      title: "QR Code Integration",
      description:
        "Let customers easily access your digital menu by scanning a QR code from anywhere.",
    },
    {
      icon: <Edit size={24} />,
      title: "Easy Menu Updates",
      description:
        "Update your menu items, prices, and specials instantly without reprinting.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Friendly",
      description:
        "Perfectly optimized menus for mobile viewing with excellent readability.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Customizable Designs",
      description:
        "Choose from beautiful templates designed specifically for Indian cuisine.",
    },
    {
      icon: <Shield size={24} />,
      title: "Contactless Solution",
      description:
        "Provide a safer dining experience with touchless menu access.",
    },
    {
      icon: <Image size={24} />,
      title: "Food Photography",
      description:
        "Showcase your dishes with stunning photography that makes customers hungry.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Seasonal Updates",
      description:
        "Easily switch between different menus for seasonal offerings or special events.",
    },
    {
      icon: <Globe size={24} />,
      title: "Multiple Languages",
      description:
        "Display your menu in multiple languages to serve diverse customers.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32 relative overflow-hidden bg-cream-50"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-spice-gradient pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-teal-100 border border-teal-200 shadow-sm">
            <p className="text-sm font-medium text-teal-800">
              Powerful Features
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-800">
            Everything You Need To Create The Perfect Menu Experience
          </h2>
          <p className="text-lg text-charcoal-600">
            Our platform offers a comprehensive suite of tools designed
            specifically for Indian restaurants to create exceptional dining
            experiences.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

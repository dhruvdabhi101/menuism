
import React from 'react';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import Card from './ui-custom/card';
import Button from './ui-custom/button';

interface PlanFeatureProps {
  text: string;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ text }) => {
  return (
    <div className="flex items-center space-x-2">
      <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0" />
      <span className="text-charcoal-700">{text}</span>
    </div>
  );
};

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  popular = false,
  delay
}) => {
  return (
    <Card
      variant={popular ? "default" : "outline"}
      className={`h-full relative ${popular ? 'shadow-card border-saffron-200' : ''}`}
      hover="lift"
    >
      <div
        className="p-6 flex flex-col h-full"
        style={{ animation: 'fade-up 0.5s ease-out forwards', animationDelay: `${delay}ms`, opacity: 0 }}
      >
        {popular && (
          <div className="absolute top-0 right-0 bg-saffron-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            Most Popular
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-charcoal-800 mb-2">{name}</h3>
          <p className="text-charcoal-600 mb-4">{description}</p>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-charcoal-800">{price}</span>
            {price !== 'Free' && <span className="text-charcoal-600 ml-1">/month</span>}
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <PlanFeature key={index} text={feature} />
          ))}
        </div>

        <div className="mt-auto">
          <Button
            variant={popular ? "primary" : "outline"}
            fullWidth
            size="lg"
            icon={popular ? <Zap size={18} /> : <ArrowRight size={18} />}
            iconPosition={popular ? "left" : "right"}
          >
            {popular ? "Get Started" : "Start Free"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

const CallToAction: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out MenuKart",
      features: [
        "1 menu design",
        "Up to 15 menu items",
        "Basic QR code",
        "MenuKart branding included"
      ],
      popular: false,
      delay: 0
    },
    {
      name: "Premium",
      price: "₹999",
      description: "The complete solution for restaurants",
      features: [
        "5 menu designs",
        "Unlimited menu items",
        "Custom QR code design",
        "Remove MenuKart branding",
        "Food photography guidance",
        "Seasonal menu templates",
        "Priority support"
      ],
      popular: true,
      delay: 100
    },
    {
      name: "Enterprise",
      price: "₹1,999",
      description: "For restaurant chains & large establishments",
      features: [
        "10 menu designs",
        "Unlimited menu items",
        "Multiple restaurant locations",
        "Custom QR code design",
        "White label solution",
        "API access",
        "Dedicated account manager"
      ],
      popular: false,
      delay: 200
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-teal-100 border border-teal-200 shadow-sm">
            <p className="text-sm font-medium text-teal-800">Simple Pricing</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-800">
            Choose The Plan That's Right For Your Restaurant
          </h2>

          <p className="text-lg text-charcoal-600">
            Whether you're a small family restaurant or a large chain, we have a plan that fits your needs. All plans include our core features.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              delay={plan.delay}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-charcoal-600 mb-4">
            Not sure which plan is right for you? Contact us for a personalized recommendation.
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;


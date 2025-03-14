import React from "react";
import Card from "./ui-custom/card";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  restaurant: string;
  location: string;
  rating: number;
  image: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  restaurant,
  location,
  rating,
  image,
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
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal-800">{name}</h4>
              <p className="text-sm text-charcoal-600">
                {role}, {restaurant}
              </p>
              <p className="text-xs text-charcoal-500">{location}</p>
            </div>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < rating
                    ? "fill-saffron-400 text-saffron-400"
                    : "text-cream-300"
                }
              />
            ))}
          </div>
        </div>

        <div className="flex-grow">
          <Quote size={32} className="text-saffron-200 mb-2" />
          <p className="text-charcoal-700 italic">{quote}</p>
        </div>
      </div>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "MenuKart has transformed how our customers interact with our menu. The QR code solution is brilliant, and our patrons love being able to see photos of our dishes before ordering.",
      name: "Amit Sharma",
      role: "Owner",
      restaurant: "Spice Junction",
      location: "Mumbai",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      quote:
        "As a small family restaurant, I was concerned about the cost of constantly updating printed menus. MenuKart solved this problem completely - now I can update my menu anytime without reprinting costs.",
      name: "Priya Patel",
      role: "Manager",
      restaurant: "Gujarat Bhavan",
      location: "Ahmedabad",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
      quote:
        "The customizable templates are perfect for showcasing our South Indian cuisine. The process was simple, and the printed menu cards look so professional. Our customers are impressed!",
      name: "Venkat Rao",
      role: "Chef & Owner",
      restaurant: "Dosa Delight",
      location: "Bangalore",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "During COVID, we needed a contactless menu solution quickly. MenuKart delivered beyond our expectations. Their support team even helped me set everything up over the phone.",
      name: "Kavita Singh",
      role: "Operations Manager",
      restaurant: "Royal Punjab",
      location: "Delhi",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      quote:
        "I love that I can showcase beautiful photos of our authentic dishes. Since implementing MenuKart, we've seen a noticeable increase in orders of our premium items.",
      name: "Rajesh Gupta",
      role: "Owner",
      restaurant: "Tandoor Magic",
      location: "Jaipur",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      quote:
        "The multilingual option is game-changing for us. We can now present our menu in both English and Hindi, which is perfect for our diverse clientele.",
      name: "Meera Reddy",
      role: "Owner",
      restaurant: "Andhra Spice",
      location: "Hyderabad",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden bg-cream-50"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-spice-gradient pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-saffron-100 border border-saffron-200 shadow-sm">
            <p className="text-sm font-medium text-saffron-800">
              Happy Customers
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-800">
            Trusted by Restaurant Owners Across India
          </h2>

          <p className="text-lg text-charcoal-600">
            Hear from fellow restaurant owners who have transformed their menu
            experience with MenuKart.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              restaurant={testimonial.restaurant}
              location={testimonial.location}
              rating={testimonial.rating}
              image={testimonial.image}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

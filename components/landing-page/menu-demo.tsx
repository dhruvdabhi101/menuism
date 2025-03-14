import React, { useState } from "react";
import { Sparkles, ChevronRight, Coffee, Utensils } from "lucide-react";
import Card from "./ui-custom/card";
import Button from "./ui-custom/button";

const MenuDemo: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("thali");

  const menuCategories = [
    { id: "thali", name: "Thali", icon: <Utensils size={20} /> },
    { id: "mains", name: "Main Course", icon: <Utensils size={20} /> },
    { id: "starters", name: "Starters", icon: <Utensils size={20} /> },
    { id: "beverages", name: "Beverages", icon: <Coffee size={20} /> },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          {/* Text content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-xl">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-burgundy-100 border border-burgundy-200 shadow-sm">
                <p className="text-sm font-medium text-burgundy-800">
                  Interactive Demo
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal-800">
                See How Simple It Is To Create Your Digital Menu
              </h2>

              <p className="text-lg text-charcoal-600 mb-8">
                With MenuKart, you can create a beautiful digital menu in
                minutes. Customize your menu with your branding, add your
                dishes, and generate a QR code for your customers to scan.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 mt-1">
                    <span className="font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-charcoal-800">
                      Add Your Restaurant Details
                    </h3>
                    <p className="text-charcoal-600">
                      Upload your logo, set your restaurant name, and customize
                      your menu&apos;s appearance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 mt-1">
                    <span className="font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-charcoal-800">
                      Input Your Menu Items
                    </h3>
                    <p className="text-charcoal-600">
                      Add categories, dishes, descriptions, prices, and
                      mouthwatering photos of your delicious offerings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 mt-1">
                    <span className="font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-charcoal-800">
                      Generate & Print Your Menu Card
                    </h3>
                    <p className="text-charcoal-600">
                      We&apos;ll create a beautiful menu card with QR code that
                      you can print and display in your restaurant.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Sparkles size={20} />}
                >
                  Try For Free
                </Button>
                <a
                  href="#pricing"
                  className="inline-flex items-center ml-6 text-saffron-600 font-medium hover:text-saffron-700 transition-colors"
                >
                  View Pricing
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Menu Preview */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              {/* Menu Card */}
              <Card
                variant="glass"
                padding="lg"
                className="bg-white border border-cream-200 shadow-card overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-saffron-500 to-burgundy-500 rounded-t-xl" />

                <div className="relative pt-10 pb-3">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center overflow-hidden">
                    <img
                      src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"
                      alt="Restaurant logo"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-center mt-3 text-charcoal-800">
                    Spice Garden
                  </h3>
                  <p className="text-sm text-center text-charcoal-600">
                    Authentic Indian Cuisine
                  </p>
                </div>

                {/* Menu Categories */}
                <div className="flex overflow-x-auto pb-2 gap-2 mb-4 scrollbar-hide mt-2">
                  {menuCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? "bg-saffron-500 text-white"
                          : "bg-cream-100 text-charcoal-700 hover:bg-cream-200"
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Menu Items */}
                <div className="space-y-4">
                  {selectedCategory === "thali" && (
                    <>
                      <div className="flex justify-between items-start p-3 border-b border-cream-200">
                        <div>
                          <h4 className="font-semibold text-charcoal-800">
                            Maharaja Thali
                          </h4>
                          <p className="text-sm text-charcoal-600 mt-1">
                            Dal, rice, 2 rotis, paneer dish, mixed vegetables,
                            raita, pickle, dessert
                          </p>
                        </div>
                        <div className="text-burgundy-500 font-semibold">
                          ₹399
                        </div>
                      </div>

                      <div className="flex justify-between items-start p-3 border-b border-cream-200">
                        <div>
                          <h4 className="font-semibold text-charcoal-800">
                            Rajasthani Thali
                          </h4>
                          <p className="text-sm text-charcoal-600 mt-1">
                            Dal, baati, churma, gatte ki sabzi, kadhi, rice,
                            missi roti
                          </p>
                        </div>
                        <div className="text-burgundy-500 font-semibold">
                          ₹349
                        </div>
                      </div>

                      <div className="flex justify-between items-start p-3">
                        <div>
                          <h4 className="font-semibold text-charcoal-800">
                            South Indian Thali
                          </h4>
                          <p className="text-sm text-charcoal-600 mt-1">
                            Sambhar, rasam, rice, idli, vada, dosa, coconut
                            chutney, payasam
                          </p>
                          <span className="inline-block mt-2 px-2 py-0.5 bg-saffron-100 text-saffron-800 text-xs rounded-full">
                            Popular
                          </span>
                        </div>
                        <div className="text-burgundy-500 font-semibold">
                          ₹299
                        </div>
                      </div>
                    </>
                  )}

                  {selectedCategory === "mains" && (
                    <>
                      <div className="flex justify-between items-start p-3 border-b border-cream-200">
                        <div>
                          <h4 className="font-semibold text-charcoal-800">
                            Butter Chicken
                          </h4>
                          <p className="text-sm text-charcoal-600 mt-1">
                            Tender chicken cooked in rich tomato and butter
                            gravy
                          </p>
                        </div>
                        <div className="text-burgundy-500 font-semibold">
                          ₹299
                        </div>
                      </div>

                      <div className="flex justify-between items-start p-3 border-b border-cream-200">
                        <div>
                          <h4 className="font-semibold text-charcoal-800">
                            Paneer Tikka Masala
                          </h4>
                          <p className="text-sm text-charcoal-600 mt-1">
                            Grilled paneer cubes in spiced onion-tomato gravy
                          </p>
                          <span className="inline-block mt-2 px-2 py-0.5 bg-saffron-100 text-saffron-800 text-xs rounded-full">
                            Best Seller
                          </span>
                        </div>
                        <div className="text-burgundy-500 font-semibold">
                          ₹249
                        </div>
                      </div>

                      <div className="flex justify-between items-start p-3">
                        <div>
                          <h4 className="font-semibold text-charcoal-800">
                            Dal Makhani
                          </h4>
                          <p className="text-sm text-charcoal-600 mt-1">
                            Black lentils simmered overnight with cream and
                            spices
                          </p>
                        </div>
                        <div className="text-burgundy-500 font-semibold">
                          ₹199
                        </div>
                      </div>
                    </>
                  )}

                  {/* Other categories would be implemented similarly */}
                </div>

                {/* QR Code */}
                <div className="mt-6 flex justify-center">
                  <div className="text-center">
                    <p className="text-xs text-charcoal-600 mb-2">
                      Scan to view full menu
                    </p>
                    <div className="w-24 h-24 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/menu')] bg-contain bg-no-repeat bg-center mx-auto" />
                  </div>
                </div>
              </Card>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-burgundy-500 opacity-10 rounded-full animate-float" />
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-saffron-500 opacity-10 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuDemo;

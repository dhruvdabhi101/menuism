"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Utensils, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (step === 1) {
        setStep(2);
      } else {
        // Final submission would redirect
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-charcoal-600 hover:text-saffron-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <div className="bg-saffron-500 p-2 rounded-full">
            <Utensils className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-playfair text-burgundy-500">
            MenuMagic
          </span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair text-burgundy-500 mb-2">
            {step === 1 ? "Create your account" : "Choose your plan"}
          </h1>
          <p className="text-charcoal-600">
            {step === 1
              ? "Start your 14-day free trial today"
              : "Select the plan that works best for your restaurant"}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center mb-8">
          <div className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step >= 1
                  ? "bg-saffron-500 text-white"
                  : "bg-cream-200 text-charcoal-500"
              }`}
            >
              {step > 1 ? <Check className="h-4 w-4" /> : "1"}
            </div>
            <span
              className={`ml-2 text-sm ${
                step >= 1
                  ? "text-burgundy-500 font-medium"
                  : "text-charcoal-500"
              }`}
            >
              Account
            </span>
          </div>
          <div
            className={`h-px w-12 mx-2 ${
              step >= 2 ? "bg-saffron-500" : "bg-cream-300"
            }`}
          ></div>
          <div className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step >= 2
                  ? "bg-saffron-500 text-white"
                  : "bg-cream-200 text-charcoal-500"
              }`}
            >
              2
            </div>
            <span
              className={`ml-2 text-sm ${
                step >= 2
                  ? "text-burgundy-500 font-medium"
                  : "text-charcoal-500"
              }`}
            >
              Plan
            </span>
          </div>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-6 flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                  className="rounded-xl border-cream-300 focus:border-saffron-500 focus:ring-saffron-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                  className="rounded-xl border-cream-300 focus:border-saffron-500 focus:ring-saffron-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="restaurantName">Restaurant name</Label>
              <Input
                id="restaurantName"
                placeholder="Spice Garden"
                required
                className="rounded-xl border-cream-300 focus:border-saffron-500 focus:ring-saffron-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="rounded-xl border-cream-300 focus:border-saffron-500 focus:ring-saffron-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="rounded-xl border-cream-300 focus:border-saffron-500 focus:ring-saffron-500"
              />
              <p className="text-xs text-charcoal-500">
                Must be at least 8 characters
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label
                htmlFor="terms"
                className="text-sm font-normal cursor-pointer"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-saffron-500 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-saffron-500 hover:underline"
                >
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl h-12"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Continue"}
            </Button>

            <p className="text-center text-sm text-charcoal-600 mt-8">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-saffron-500 hover:text-saffron-600 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 flex-1">
            <RadioGroup
              defaultValue={selectedPlan}
              onValueChange={setSelectedPlan}
              className="space-y-4"
            >
              {[
                {
                  id: "starter",
                  title: "Starter",
                  price: "₹999",
                  description: "Perfect for small cafes and food stalls",
                  features: [
                    "Digital menu with up to 30 items",
                    "5 QR code cards",
                    "Basic customization",
                    "Menu updates (twice a month)",
                    "Email support",
                  ],
                  color: "border-saffron-300 bg-saffron-50",
                },
                {
                  id: "premium",
                  title: "Premium",
                  price: "₹1,999",
                  description: "Ideal for restaurants and bistros",
                  features: [
                    "Digital menu with unlimited items",
                    "15 QR code cards",
                    "Advanced customization",
                    "Unlimited menu updates",
                    "Priority support",
                  ],
                  color: "border-teal-300 bg-teal-50",
                  recommended: true,
                },
                {
                  id: "enterprise",
                  title: "Enterprise",
                  price: "Custom",
                  description: "For restaurant chains and large establishments",
                  features: [
                    "Everything in Premium",
                    "Custom number of QR cards",
                    "White-label solution",
                    "API access",
                    "Dedicated account manager",
                  ],
                  color: "border-burgundy-300 bg-burgundy-50",
                },
              ].map((plan) => (
                <div key={plan.id} className="relative">
                  {plan.recommended && (
                    <div className="absolute -top-3 right-4 z-10">
                      <span className="bg-saffron-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                        Recommended
                      </span>
                    </div>
                  )}
                  <Label
                    htmlFor={plan.id}
                    className={`flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? `border-saffron-500 ring-2 ring-saffron-500/20 ${plan.color}`
                        : "border-cream-300 hover:border-saffron-300"
                    }`}
                  >
                    <RadioGroupItem
                      value={plan.id}
                      id={plan.id}
                      className="sr-only"
                    />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg font-playfair text-burgundy-500">
                          {plan.title}
                        </h3>
                        <p className="text-sm text-charcoal-600">
                          {plan.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-burgundy-500">
                          {plan.price}
                        </span>
                        {plan.price !== "Custom" && (
                          <span className="text-sm text-charcoal-500">
                            /month
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-saffron-500" />
                          <span className="text-sm text-charcoal-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl h-12"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Complete Sign Up"}
              </Button>

              <p className="text-center text-xs text-charcoal-500 mt-4">
                You won&apos;t be charged during your 14-day free trial. Cancel
                anytime.
              </p>
            </div>
          </form>
        )}
      </div>

      {/* Right side - Image */}
      <div className="hidden md:block w-1/2 bg-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-saffron-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="w-full max-w-md">
            {step === 1 ? (
              <div className="space-y-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-card">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Restaurant+Menu+App"
                    alt="Menu App"
                    fill
                    className="object-cover"
                  />
                </div>

                <Card className="border-none shadow-card bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-saffron-100 flex items-center justify-center">
                        <span className="text-saffron-500 font-medium">R</span>
                      </div>
                      <div>
                        <p className="italic text-charcoal-700 mb-2">
                          &ldquo;MenuMagic transformed how we present our menu
                          to customers. The QR cards look elegant and match our
                          restaurant&apos;s decor perfectly.&rdquo;
                        </p>
                        <p className="font-medium text-burgundy-500">
                          Rajesh Kumar
                        </p>
                        <p className="text-sm text-charcoal-600">
                          Owner, Spice Garden, Mumbai
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-up">
                <h3 className="text-2xl font-bold font-playfair text-burgundy-500">
                  What you&apos;ll get:
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: "Beautiful Digital Menu",
                      description:
                        "Create a stunning digital menu that reflects your restaurant's style and brand.",
                      icon: (
                        <svg
                          className="h-6 w-6 text-saffron-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 7H17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 12H17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 17H13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Custom QR Code Cards",
                      description:
                        "Receive elegantly designed physical QR code cards for your tables.",
                      icon: (
                        <svg
                          className="h-6 w-6 text-teal-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 11L11 11L11 3L3 3L3 11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 21L11 21L11 13L3 13L3 21Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 3L21 3L21 11L13 11L13 3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 13H17V17H13V13Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 17H21V21H17V17Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 17H17V21H13V17Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 13H21V17H17V13Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Easy Menu Management",
                      description:
                        "Update your menu items, prices, and descriptions anytime with just a few clicks.",
                      icon: (
                        <svg
                          className="h-6 w-6 text-burgundy-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 20H21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.18821C20.0665 4.44558 20.1213 4.72142 20.1213 5C20.1213 5.27857 20.0665 5.55442 19.9598 5.81179C19.8532 6.06916 19.697 6.30302 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "14-Day Free Trial",
                      description:
                        "Try all features risk-free for 14 days with no credit card required.",
                      icon: (
                        <svg
                          className="h-6 w-6 text-saffron-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 12L11 14L15 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                    },
                  ].map((item, i) => (
                    <Card
                      key={i}
                      className="border-none shadow-card bg-white/80 backdrop-blur-sm"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">{item.icon}</div>
                          <div>
                            <h4 className="font-medium text-burgundy-500">
                              {item.title}
                            </h4>
                            <p className="text-sm text-charcoal-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 h-16 w-16 bg-saffron-300 rounded-full opacity-40 animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 h-12 w-12 bg-teal-300 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 h-10 w-10 bg-burgundy-300 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import useAuth from "../hooks/use-auth";
import Link from "next/link";
import Button from "./ui-custom/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { session, signOut } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await signOut();
    // navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    // navigate('/auth');
    setIsMobileMenuOpen(false);
  };

  const handleDashboard = () => {
    // navigate('/dashboard');
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-4 px-6 md:px-8",
        {
          "bg-white/80 backdrop-blur-md shadow-subtle": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-playfair font-bold text-saffron-500"
          >
            Menu<span className="text-burgundy-500">Kart</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-charcoal-800 hover:text-saffron-500 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-charcoal-800 hover:text-saffron-500 transition-colors duration-300"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-charcoal-800 hover:text-saffron-500 transition-colors duration-300"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-charcoal-800 hover:text-saffron-500 transition-colors duration-300"
          >
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Log Out
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleDashboard}
                icon={<User size={18} />}
              >
                Dashboard
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={handleLogin}>
                Log In
              </Button>
              <Button variant="primary" size="sm" onClick={handleLogin}>
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal-800 hover:text-saffron-500 transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-charcoal-800 hover:text-saffron-500 transition-colors py-2 border-b border-cream-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-charcoal-800 hover:text-saffron-500 transition-colors py-2 border-b border-cream-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-charcoal-800 hover:text-saffron-500 transition-colors py-2 border-b border-cream-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-charcoal-800 hover:text-saffron-500 transition-colors py-2 border-b border-cream-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              {session ? (
                <>
                  <Button variant="outline" fullWidth onClick={handleLogout}>
                    Log Out
                  </Button>
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={handleDashboard}
                    icon={<User size={18} />}
                  >
                    Dashboard
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" fullWidth onClick={handleLogin}>
                    Log In
                  </Button>
                  <Button variant="primary" fullWidth onClick={handleLogin}>
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

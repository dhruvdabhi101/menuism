import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-800 text-white pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6 text-saffron-400">
              Menu<span className="text-teal-400">Kart</span>
            </h3>
            <p className="text-cream-200 mb-6">
              Transforming restaurant menus into beautiful digital experiences
              for restaurant owners across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cream-200 hover:text-saffron-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream-200 hover:text-saffron-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-cream-200 hover:text-saffron-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-cream-200 hover:text-saffron-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream-200 hover:text-saffron-400 transition-colors"
                >
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-saffron-400 mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-cream-200">
                  123 Restaurant Row, Mumbai, Maharashtra 400001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="text-saffron-400 mr-3 flex-shrink-0"
                />
                <span className="text-cream-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="text-saffron-400 mr-3 flex-shrink-0"
                />
                <span className="text-cream-200">support@menukart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-700 mt-12 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-cream-300 text-sm">
            &copy; {new Date().getFullYear()} MenuKart. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-cream-400 text-sm">
              Made with ❤️ for Indian Restaurant Owners
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

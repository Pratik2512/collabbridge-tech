
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-tech-blue-700"
            >
              <span>CollabCraze</span>
              <span className="text-tech-gray-900">Tech</span>
            </Link>
            <p className="text-tech-gray-600">
              Bridging Business & Tech for a Smarter Future. We provide sustainable tech solutions to help businesses grow and thrive in the digital age.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h3 className="text-base font-semibold uppercase text-tech-gray-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-tech-gray-600 transition-colors hover:text-tech-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-tech-gray-600 transition-colors hover:text-tech-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-tech-gray-600 transition-colors hover:text-tech-blue-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-tech-gray-600 transition-colors hover:text-tech-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold uppercase text-tech-gray-900">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-tech-gray-600 transition-colors hover:text-tech-blue-600"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-tech-gray-600 transition-colors hover:text-tech-blue-600"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-tech-gray-600 transition-colors hover:text-tech-blue-600"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-tech-gray-600 transition-colors hover:text-tech-blue-600"
                >
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold uppercase text-tech-gray-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-tech-blue-600" />
                <span className="text-tech-gray-600">
                  123 Tech Avenue, Innovation District, CA 94103
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-tech-blue-600" />
                <span className="text-tech-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-tech-blue-600" />
                <span className="text-tech-gray-600">info@collabcraze.tech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-tech-gray-500">
            &copy; {currentYear} CollabCraze Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-tech-gray-700 dark:bg-tech-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-tech-blue-700"
            >
              <span>CollabCraze</span>
              <span className="text-tech-gray-900 dark:text-white">Tech</span>
            </Link>
            <p className="text-tech-gray-600 dark:text-tech-gray-400">
              Bridging Business & Tech for a Smarter Future. We provide sustainable tech solutions to help businesses grow and thrive in the digital age.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/collabcraze.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h3 className="text-base font-semibold uppercase text-tech-gray-900 dark:text-white">
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
            <h3 className="text-base font-semibold uppercase text-tech-gray-900 dark:text-white">
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
            <h3 className="text-base font-semibold uppercase text-tech-gray-900 dark:text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-tech-blue-600" />
                <span className="text-tech-gray-600">
                  Opp. Jogeshwari Misal, Sant Tukaram, Pimpri, Pune 411018
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-tech-blue-600" />
                <a
                  href="tel:+91-7066908355"
                  className="text-tech-gray-600 hover:text-tech-blue-600"
                >
                  +91-7066908355

                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-tech-blue-600" />
                <a
                  href="mailto:collabcraze.tech@gmail.com"
                  className="text-tech-gray-600 hover:text-tech-blue-600"
                >
                  collabcraze.tech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-tech-gray-700 pt-8">
          <p className="text-center text-sm text-tech-gray-500">
            &copy; {currentYear} CollabCraze Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

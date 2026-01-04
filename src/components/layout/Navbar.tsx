
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-tech-blue-700 transition-opacity duration-200 hover:opacity-80"
        >
          <img
            src="/favicon_io/favicon-32x32.png"
            alt="CollabCraze Logo"
            className="h-8 w-8"
          />
          <span>CollabCraze</span>
          <span className="text-tech-gray-900">Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
          <Button
            className="rounded-full bg-tech-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-tech-blue-700 hover:shadow-md"
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-tech-gray-700 hover:text-tech-blue-600"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="animate-fade-in space-y-1 px-4 pb-5 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-tech-gray-700 hover:bg-tech-blue-50 hover:text-tech-blue-700"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="mt-4 w-full rounded-full bg-tech-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-tech-blue-700 hover:shadow-md"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

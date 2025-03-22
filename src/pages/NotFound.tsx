
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-gradient-to-b from-tech-blue-50 to-white px-4 text-center">
      <div className="pattern-bg absolute inset-0 opacity-40"></div>
      <div className="relative animate-fade-in">
        <h1 className="text-9xl font-bold text-tech-blue-600">404</h1>
        <h2 className="mt-8 text-3xl font-bold text-tech-gray-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-tech-gray-600">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="mt-8">
          <Button
            className="rounded-full bg-tech-blue-600 px-6 py-2.5 text-white shadow-sm transition-all duration-300 hover:bg-tech-blue-700 hover:shadow-md"
            asChild
          >
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

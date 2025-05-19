import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-nexos-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-6">Puslapis nerastas</p>
        <Link to="/">
          <Button className="nexos-button-primary">
            Grįžti į pagrindinį puslapį
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

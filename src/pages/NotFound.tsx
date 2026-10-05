import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-pres-bg text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-full bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center text-pres-accent mb-6 shadow-[0_0_30px_rgba(255,173,1,0.2)]">
        <span className="text-3xl font-bold font-heading">404</span>
      </div>
      <h1 className="text-4xl font-bold font-heading mb-3">Page Not Found</h1>
      <p className="text-pres-text-muted text-lg mb-8 max-w-md">
        The requested slide or page could not be located.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg font-semibold transition-all transform hover:scale-105 shadow-md"
      >
        <Home className="w-4 h-4" />
        <span>Return to Deck</span>
      </Link>
    </div>
  );
};

export default NotFound;

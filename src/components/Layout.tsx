import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlinkLabsExactBackground from "./BlinkLabsExactBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Fix Issue 2: Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Fix Issue 3: Ensure content visibility on load
  useEffect(() => {
    // Force immediate visibility of all content elements
    const ensureVisibility = () => {
      const elements = document.querySelectorAll('.glass-card, .animate-fade-in, h1, h2, h3, p, .scroll-slide-left, .scroll-slide-right');
      elements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.visibility = 'visible';
          el.style.opacity = '1';
        }
      });
    };

    // Run immediately and after a short delay
    ensureVisibility();
    const timer = setTimeout(ensureVisibility, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative">
      <BlinkLabsExactBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24">
          <div className="max-w-4xl mx-auto px-4">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
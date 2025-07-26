import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import DynamicBackground from "./DynamicBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Fix Issue 2: Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Fix Issue 3: Initialize scroll animations
  useEffect(() => {
    const initScrollAnimations = () => {
      const elements = document.querySelectorAll('.scroll-slide-left, .scroll-slide-right, .scroll-fade-in');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      elements.forEach((el) => observer.observe(el));
      
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };

    const cleanup = initScrollAnimations();
    return cleanup;
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <DynamicBackground />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
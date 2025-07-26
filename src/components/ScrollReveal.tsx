import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fix Issue 3: Reduce timing conflicts and ensure visibility
            const timer = setTimeout(() => {
              if (entry.target && entry.target instanceof HTMLElement) {
                entry.target.classList.add("in-view");
                // Force repaint to ensure visibility
                entry.target.style.transform = '';
                entry.target.style.opacity = '';
              }
            }, Math.max(delay, 100));
            
            // Cleanup timer if component unmounts
            return () => clearTimeout(timer);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '20px' // Add some margin to trigger earlier
      }
    );

    const element = ref.current;
    if (element) {
      // Fix Issue 1: Ensure element is visible before observing
      element.style.visibility = 'visible';
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
import { useEffect, useRef } from "react";

const DynamicBackground = () => {
  const blobsRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createBlob = () => {
      if (!blobsRef.current) return;

      const blob = document.createElement("div");
      blob.className = "absolute rounded-full opacity-20 animate-pulse";
      
      // Random size between 100-300px
      const size = Math.random() * 200 + 100;
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;
      
      // Random position
      blob.style.left = `${Math.random() * 100}%`;
      blob.style.top = `${Math.random() * 100}%`;
      
      // Random color from our palette
      const colors = [
        "bg-primary/10",
        "bg-secondary/10", 
        "bg-accent/10",
        "bg-tertiary/10",
        "bg-quaternary/10"
      ];
      blob.className += ` ${colors[Math.floor(Math.random() * colors.length)]}`;
      
      // Random animation duration
      const duration = Math.random() * 10 + 15; // 15-25 seconds
      blob.style.animation = `float ${duration}s ease-in-out infinite, morphBlob ${duration * 0.8}s ease-in-out infinite`;
      
      blobsRef.current.appendChild(blob);
      
      // Remove blob after animation
      setTimeout(() => {
        if (blob.parentNode) {
          blob.parentNode.removeChild(blob);
        }
      }, duration * 1000);
    };

    const createSmokeParticle = () => {
      if (!smokeRef.current) return;

      const particle = document.createElement("div");
      particle.className = "absolute rounded-full opacity-5 bg-white";
      
      // Small particle size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Start from bottom
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = "100%";
      
      // Drift upward
      const duration = Math.random() * 20 + 30; // 30-50 seconds
      particle.style.animation = `smokeRise ${duration}s linear infinite`;
      
      smokeRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, duration * 1000);
    };

    // Create initial blobs
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createBlob(), i * 2000);
    }

    // Create blobs periodically
    const blobInterval = setInterval(createBlob, 8000);

    // Create smoke particles
    const smokeInterval = setInterval(createSmokeParticle, 2000);

    return () => {
      clearInterval(blobInterval);
      clearInterval(smokeInterval);
    };
  }, []);

  return (
    <>
      {/* Dynamic Blobs */}
      <div 
        ref={blobsRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          filter: "blur(40px)",
        }}
      />
      
      {/* Smoke Particles */}
      <div 
        ref={smokeRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          filter: "blur(1px)",
        }}
      />

      <style>{`
        @keyframes morphBlob {
          0%, 100% { 
            border-radius: 50% 50% 50% 50%;
            transform: rotate(0deg) scale(1);
          }
          25% { 
            border-radius: 60% 40% 70% 30%;
            transform: rotate(90deg) scale(1.1);
          }
          50% { 
            border-radius: 40% 60% 30% 70%;
            transform: rotate(180deg) scale(0.9);
          }
          75% { 
            border-radius: 70% 30% 60% 40%;
            transform: rotate(270deg) scale(1.05);
          }
        }

        @keyframes smokeRise {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-50vh) translateX(20px) scale(1.5);
            opacity: 0.02;
          }
          100% {
            transform: translateY(-100vh) translateX(-10px) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default DynamicBackground;
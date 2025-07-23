import { useEffect, useRef } from "react";

const RotatingEarth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    let rotation = 0;

    // Create dots pattern for earth
    const dots: Array<{ x: number; y: number; z: number; originalZ: number }> = [];
    
    // Generate dots in a spherical pattern
    for (let i = 0; i < 800; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      
      dots.push({ x, y, z, originalZ: z });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius + 20);
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)");
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.05)");
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 20, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Rotate dots
      rotation += 0.005;
      
      // Sort dots by z-coordinate for proper layering
      const rotatedDots = dots.map(dot => {
        const rotatedX = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);
        
        return {
          x: rotatedX,
          y: dot.y,
          z: rotatedZ,
          originalZ: dot.originalZ
        };
      }).sort((a, b) => a.z - b.z);

      // Draw dots
      rotatedDots.forEach(dot => {
        const screenX = centerX + dot.x * radius;
        const screenY = centerY + dot.y * radius;
        
        // Only draw dots on the visible hemisphere
        if (dot.z > -0.2) {
          const depth = (dot.z + 1) / 2; // Normalize to 0-1
          const size = Math.max(0.5, 2 * depth);
          const opacity = Math.max(0.1, depth * 0.6);
          
          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.fill();
        }
      });

      // Add glow effect
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        className="max-w-full h-auto"
        style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))" }}
      />
    </div>
  );
};

export default RotatingEarth;
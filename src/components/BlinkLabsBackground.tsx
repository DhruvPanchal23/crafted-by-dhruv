import { useEffect, useRef } from "react";

const BlinkLabsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const dots: Array<{
      x: number;
      y: number;
      opacity: number;
      phase: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeDots();
    };

    const initializeDots = () => {
      dots.length = 0;
      const spacing = 24; // Smaller spacing for more dots like Blink Labs
      const offsetX = 12;
      const offsetY = 12;
      
      for (let x = offsetX; x < canvas.width + spacing; x += spacing) {
        for (let y = offsetY; y < canvas.height + spacing; y += spacing) {
          dots.push({
            x,
            y,
            opacity: Math.random() * 0.4 + 0.1,
            phase: Math.random() * Math.PI * 2
          });
        }
      }
    };

    const animate = () => {
      // Dark background similar to Blink Labs
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach((dot, index) => {
        // Very subtle pulsing animation
        const pulseIntensity = 0.3;
        const speed = 0.0005;
        const animatedOpacity = dot.opacity + 
          Math.sin(time * speed + dot.phase + index * 0.01) * pulseIntensity;
        
        // Ensure opacity stays within bounds
        const finalOpacity = Math.max(0.05, Math.min(0.4, animatedOpacity));
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2); // Very small dots (1px radius)
        ctx.fillStyle = `rgba(120, 120, 140, ${finalOpacity})`; // Subtle blue-gray color
        ctx.fill();
      });
      
      time += 16;
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default BlinkLabsBackground;
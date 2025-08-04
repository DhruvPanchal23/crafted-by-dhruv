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
      baseOpacity: number;
      phase: number;
      size: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeDots();
    };

    const initializeDots = () => {
      dots.length = 0;
      const spacing = 40;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing + (spacing / 2),
            y: j * spacing + (spacing / 2),
            baseOpacity: Math.random() * 0.3 + 0.1,
            phase: Math.random() * Math.PI * 2,
            size: Math.random() * 2 + 1
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach((dot) => {
        const opacity = dot.baseOpacity + Math.sin(time * 0.001 + dot.phase) * 0.2;
        const size = dot.size + Math.sin(time * 0.0008 + dot.phase) * 0.5;
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.5, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 100, 120, ${Math.max(0, opacity)})`;
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
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    />
  );
};

export default BlinkLabsBackground;
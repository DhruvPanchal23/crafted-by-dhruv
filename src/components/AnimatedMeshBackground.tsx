import { useEffect, useRef } from "react";

const AnimatedMeshBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradientMesh = () => {
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time * 0.001) * 100,
        canvas.height * 0.3 + Math.cos(time * 0.0008) * 80,
        0,
        canvas.width * 0.2 + Math.sin(time * 0.001) * 100,
        canvas.height * 0.3 + Math.cos(time * 0.0008) * 80,
        300
      );
      gradient1.addColorStop(0, "rgba(138, 43, 226, 0.3)"); // Purple
      gradient1.addColorStop(1, "rgba(138, 43, 226, 0)");

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.cos(time * 0.0012) * 120,
        canvas.height * 0.2 + Math.sin(time * 0.0009) * 90,
        0,
        canvas.width * 0.8 + Math.cos(time * 0.0012) * 120,
        canvas.height * 0.2 + Math.sin(time * 0.0009) * 90,
        250
      );
      gradient2.addColorStop(0, "rgba(255, 20, 147, 0.25)"); // Pink
      gradient2.addColorStop(1, "rgba(255, 20, 147, 0)");

      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.6 + Math.sin(time * 0.0007) * 150,
        canvas.height * 0.7 + Math.cos(time * 0.001) * 100,
        0,
        canvas.width * 0.6 + Math.sin(time * 0.0007) * 150,
        canvas.height * 0.7 + Math.cos(time * 0.001) * 100,
        350
      );
      gradient3.addColorStop(0, "rgba(0, 191, 255, 0.2)"); // Cyan
      gradient3.addColorStop(1, "rgba(0, 191, 255, 0)");

      const gradient4 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.cos(time * 0.0015) * 80,
        canvas.height * 0.8 + Math.sin(time * 0.0011) * 120,
        0,
        canvas.width * 0.3 + Math.cos(time * 0.0015) * 80,
        canvas.height * 0.8 + Math.sin(time * 0.0011) * 120,
        280
      );
      gradient4.addColorStop(0, "rgba(255, 165, 0, 0.15)"); // Orange
      gradient4.addColorStop(1, "rgba(255, 165, 0, 0)");

      const gradient5 = ctx.createRadialGradient(
        canvas.width * 0.1 + Math.sin(time * 0.0013) * 60,
        canvas.height * 0.5 + Math.cos(time * 0.0006) * 140,
        0,
        canvas.width * 0.1 + Math.sin(time * 0.0013) * 60,
        canvas.height * 0.5 + Math.cos(time * 0.0006) * 140,
        320
      );
      gradient5.addColorStop(0, "rgba(50, 205, 50, 0.18)"); // Green
      gradient5.addColorStop(1, "rgba(50, 205, 50, 0)");

      return [gradient1, gradient2, gradient3, gradient4, gradient5];
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "screen";
      
      const gradients = createGradientMesh();
      
      gradients.forEach((gradient) => {
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      ctx.globalCompositeOperation = "source-over";
      
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
        filter: "blur(1px)",
      }}
    />
  );
};

export default AnimatedMeshBackground;
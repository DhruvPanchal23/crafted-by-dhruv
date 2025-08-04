import { useEffect, useRef, useCallback } from "react";

/**
 * BlinkLabsExactBackground - Pixel-perfect replica of https://www.blinklabs.ai/ background
 * 
 * Features analyzed from the original:
 * - Pure black background (#000000)
 * - Subtle animated dot grid pattern
 * - Dots with ~24px spacing in a perfect grid
 * - Very small dots (1-2px radius)
 * - Gentle opacity pulsing (0.1-0.4 range)
 * - No mouse interaction effects (minimal design)
 * - Optimized for performance with requestAnimationFrame
 */
const BlinkLabsExactBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const dots: Array<{
      x: number;
      y: number;
      baseOpacity: number;
      phase: number;
      pulseSpeed: number;
    }> = [];

    // Exact configuration matching Blink Labs
    const config = {
      spacing: 24,           // Perfect 24px grid spacing
      dotRadius: 1,          // Small 1px radius dots
      baseOpacity: 0.15,     // Base opacity for subtle visibility
      opacityRange: 0.2,     // Gentle pulsing range
      animationSpeed: 0.0003, // Very slow, subtle animation
      dotColor: [120, 120, 140] as const, // Subtle blue-gray matching their aesthetic
    };

    const resizeCanvas = () => {
      // High-DPI display support
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
      
      initializeDots();
    };

    const initializeDots = () => {
      dots.length = 0;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Create perfect grid pattern exactly like Blink Labs
      const offsetX = config.spacing / 2;
      const offsetY = config.spacing / 2;
      
      for (let x = offsetX; x < width + config.spacing; x += config.spacing) {
        for (let y = offsetY; y < height + config.spacing; y += config.spacing) {
          dots.push({
            x,
            y,
            baseOpacity: config.baseOpacity + (Math.random() - 0.5) * 0.05, // Slight randomization
            phase: Math.random() * Math.PI * 2, // Random phase for organic feel
            pulseSpeed: 0.8 + Math.random() * 0.4, // Varied pulse speeds
          });
        }
      }
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      
      // Pure black background exactly like Blink Labs
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Render dots with subtle animation
      dots.forEach((dot, index) => {
        // Multi-wave animation for organic feel
        const wave1 = Math.sin(time * config.animationSpeed + dot.phase);
        const wave2 = Math.sin(time * config.animationSpeed * 1.3 + index * 0.01);
        const combinedWave = (wave1 * 0.7 + wave2 * 0.3) * dot.pulseSpeed;
        
        // Calculate opacity with subtle pulsing
        const opacity = Math.max(
          0.05, // Minimum visibility
          Math.min(
            0.5, // Maximum brightness
            dot.baseOpacity + (combinedWave * config.opacityRange)
          )
        );
        
        // Render dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, config.dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${config.dotColor[0]}, ${config.dotColor[1]}, ${config.dotColor[2]}, ${opacity})`;
        ctx.fill();
      });
      
      time += 16; // ~60fps timing
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="blink-labs-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        background: "#000000",
        // Performance optimizations
        willChange: "auto",
        transform: "translateZ(0)", // Force GPU acceleration
      }}
    />
  );
};

export default BlinkLabsExactBackground;
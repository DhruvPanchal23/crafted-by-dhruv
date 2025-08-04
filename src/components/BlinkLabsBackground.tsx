import { useEffect, useRef, useCallback } from "react";

const BlinkLabsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  // Move useCallback to top level of component
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

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
      currentOpacity: number;
      phase: number;
      pulseSpeed: number;
      mouseInfluence: number;
      gridX: number;
      gridY: number;
      size: number;
    }> = [];

    const config = {
      spacing: 32,
      dotSize: 1.2,
      baseOpacity: 0.15,
      pulseRange: 0.25,
      mouseRadius: 150,
      mouseInfluenceStrength: 0.6,
      animationSpeed: 0.0008,
      colors: {
        primary: [140, 140, 160],
        accent: [160, 140, 180],
        highlight: [180, 160, 200]
      }
    };

    const resizeCanvas = () => {
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
      
      for (let x = config.spacing / 2; x < width; x += config.spacing) {
        for (let y = config.spacing / 2; y < height; y += config.spacing) {
          const jitterX = (Math.random() - 0.5) * 2;
          const jitterY = (Math.random() - 0.5) * 2;
          
          dots.push({
            x: x + jitterX,
            y: y + jitterY,
            baseOpacity: config.baseOpacity + (Math.random() - 0.5) * 0.05,
            currentOpacity: config.baseOpacity,
            phase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.8 + Math.random() * 0.4,
            mouseInfluence: 0,
            gridX: Math.floor(x / config.spacing),
            gridY: Math.floor(y / config.spacing),
            size: config.dotSize + (Math.random() - 0.5) * 0.3
          });
        }
      }
    };

    const updateMouseInfluence = () => {
      dots.forEach(dot => {
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < config.mouseRadius) {
          const influence = 1 - (distance / config.mouseRadius);
          dot.mouseInfluence = influence * config.mouseInfluenceStrength;
        } else {
          dot.mouseInfluence *= 0.95;
        }
      });
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      updateMouseInfluence();
      
      dots.forEach((dot, index) => {
        const baseWave = Math.sin(time * config.animationSpeed + dot.phase);
        const secondaryWave = Math.sin(time * config.animationSpeed * 1.3 + dot.phase + index * 0.01);
        const tertiaryWave = Math.sin(time * config.animationSpeed * 0.7 + dot.gridX * 0.1 + dot.gridY * 0.1);
        
        const combinedWave = (baseWave * 0.5 + secondaryWave * 0.3 + tertiaryWave * 0.2);
        
        const animatedOpacity = dot.baseOpacity + 
          (combinedWave * config.pulseRange * dot.pulseSpeed) +
          (dot.mouseInfluence * 0.4);
        
        dot.currentOpacity = Math.max(0.02, Math.min(0.8, animatedOpacity));
        
        const colorIndex = dot.mouseInfluence > 0.1 ? 'highlight' : 
                          (dot.gridX + dot.gridY) % 3 === 0 ? 'accent' : 'primary';
        const [r, g, b] = config.colors[colorIndex];
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dot.currentOpacity})`;
        ctx.fill();
        
        if (dot.mouseInfluence > 0.2 || dot.currentOpacity > 0.4) {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${dot.currentOpacity * 0.1})`;
          ctx.fill();
        }
      });
      
      time += 16;
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: "#000000",
        willChange: "transform",
      }}
    />
  );
};

export default BlinkLabsBackground;
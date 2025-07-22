import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import dhruvPortrait from "@/assets/dhruv-portrait.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const Home = () => {
  const [greeting, setGreeting] = useState("");

  const highlights = ["UI/UX Design", "Full Stack Development", "Frontend Development"];
  const { currentText: currentHighlight } = useTypingEffect({
    texts: highlights,
    speed: 150,
    deleteSpeed: 100,
    delayBetweenTexts: 2000,
  });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 17) setGreeting("Good Afternoon");
    else if (hour < 21) setGreeting("Good Evening");
    else setGreeting("Good Night");
  }, []);

  const techStack = [
    "ReactJS", "NextJS", "TypeScript", "TailwindCSS",
    "NodeJS", "ExpressJS", "MongoDB", "Git", "GitHub", "Vercel", "Figma", "Adobe"
  ];

  const skills = [
    "UI/UX Design",
    "Full Stack Development", 
    "Frontend Development",
    "Backend Development",
    "React Specialist",
    "TypeScript Expert",
    "Modern Web Apps",
    "Responsive Design",
    "API Development",
    "Database Design",
    "Cloud Solutions",
    "Performance Optimization"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                {greeting}
              </p>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="gradient-text-animated block">FROM PIXELS TO PRODUCTS</span>
                <span className="text-4xl lg:text-6xl block mt-2">LET'S MAKE IT HAPPEN!</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                I'm available for full-time roles & freelance projects.
              </p>
              
              <p className="text-xl font-medium text-foreground">
                Crafting experiences that remember you back.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="premium" size="hero" className="group">
                Connect With Me
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 pt-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Profile & Collaboration Section */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative space-y-8">
              {/* Profile Image */}
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-float hover:shadow-[0_0_40px_hsla(var(--primary),0.4)] transition-all duration-300">
                <img 
                  src={dhruvPortrait} 
                  alt="Dhruv Panchal" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Collaboration Card */}
              <div className="glass-card p-6 space-y-4 max-w-sm">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  I prioritize client collaboration, fostering open communication.
                </p>
                
                <div className="space-y-3">
                  <p className="text-sm font-semibold">I'm very flexible with time zone communications</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇬🇧</span>
                    <span className="text-sm font-medium">UK</span>
                    <span className="text-xl">🇮🇳</span>
                    <span className="text-sm font-medium">India</span>
                    <span className="text-xl">🇺🇸</span>
                    <span className="text-sm font-medium">USA</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Remote, Based in Surat, India</p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <span className="text-xl font-bold text-primary">D</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Let's work together on your next project</h4>
                  <p className="text-sm text-primary font-medium">dhruvpanchal.dev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <ScrollReveal delay={200}>
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Passionate about cutting-edge technologies</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techStack.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 glass-card hover:scale-105 transition-transform text-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Current Project Section */}
      <ScrollReveal delay={400}>
        <section className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">The Inside Scoop</h2>
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Currently building a custom portfolio platform
              </h3>
              <Button variant="outline" size="lg">
                View Recent Work
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final Statement */}
      <ScrollReveal delay={600}>
        <section className="container mx-auto px-4 py-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold gradient-text">
                Websites that stand out and make a difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every pixel has a purpose. I craft digital experiences that not only look stunning 
                but also drive meaningful engagement and deliver measurable results.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="premium" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Read More
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
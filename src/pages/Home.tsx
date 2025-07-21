import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, MapPin, Clock, Globe } from "lucide-react";
import dhruvPortrait from "@/assets/dhruv-portrait.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const Home = () => {
  const [greeting, setGreeting] = useState("");

  const highlights = ["UI/UX", "Full Stack Development", "Cyber Security"];
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
    "NodeJS", "MongoDB", "ExpressJS", "Git", "GitHub", "Figma", "Adobe"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Hey! {greeting} 👋
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-shadow">
                <span className="gradient-text-animated">Pixels, Logic and Story</span>
                <br />
                I build experiences that remember you back
              </h1>
              <p className="text-xl text-muted-foreground">
                Hello, I'm <span className="text-foreground font-semibold">Dhruv Panchal</span> – 
                Full Stack Developer & UI/UX Designer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="premium" size="hero" className="group">
                Let's Connect
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-muted-foreground">dhruvpanchal.dev@gmail.com</p>
            </div>

            {/* Typing Effect */}
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Currently:</span>
              <span className="text-primary font-medium min-w-[200px]">
                {currentHighlight}
                <span className="animate-blink">|</span>
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-float hover:shadow-[0_0_40px_hsla(var(--primary),0.4)] transition-all duration-300">
                <img 
                  src={dhruvPortrait} 
                  alt="Dhruv Panchal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2">
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <ScrollReveal>
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-medium">Based in Surat</span>
              </div>
              <p className="text-sm text-muted-foreground">Remote-friendly</p>
            </div>

            <div className="glass-card text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium">Available</span>
              </div>
              <Button variant="outline" size="sm" className="mt-2">
              <Download className="h-3 w-3 mr-1" />
              Resume
              </Button>
            </div>

            <div className="glass-card text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="font-medium">Timezone-aware</span>
              </div>
              <div className="flex justify-center gap-1 mt-2">
              <span>🇬🇧</span>
              <span>🇮🇳</span>
              <span>🇺🇸</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stack Showcase */}
      <ScrollReveal delay={200}>
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techStack.map((tech, index) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="px-4 py-2 glass-card hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </Badge>
          ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Tagline Cards */}
      <ScrollReveal delay={400}>
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card text-center p-8">
            <h3 className="text-2xl font-bold mb-2 gradient-text">
              Bridging Imagination & Innovation
            </h3>
            <p className="text-muted-foreground">
              Where creative vision meets technical excellence
            </p>
          </div>

          <div className="glass-card text-center p-8">
            <h3 className="text-2xl font-bold mb-2 gradient-text">
              Let's Build What Matters
            </h3>
            <p className="text-muted-foreground">
              Creating meaningful digital experiences together
            </p>
          </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA */}
      <ScrollReveal delay={600}>
        <section className="container mx-auto px-4 py-12 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Open to Work
          </h2>
          <p className="text-muted-foreground mb-6">
            Freelance & Full-time Opportunities
          </p>
          <Button variant="premium" size="lg" className="animate-bounce">
            Start a Project
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
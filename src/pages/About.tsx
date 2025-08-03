import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin, Clock, Award, Target, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import dhruvPortrait from "@/assets/dhruv-portrait.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: "It feels like 2 freelancers in one.",
      mainText: "Dhruv provides a strong grasp of modern tech stacks and design systems to craft seamless digital solutions — end to end.",
      label: "Proficiency"
    },
    {
      title: "100% Satisfaction Rate",
      mainText: "Turning expectations into reality, where 100% satisfaction isn't just a promise—it's the minimum standard.",
      label: "Satisfaction"
    },
    {
      title: "Fast Responses",
      mainText: "From code to communication, I'm committed to delivering consistent, timely, and scalable results — no guesswork.",
      label: "Reliability"
    },
    {
      title: "Infinity",
      mainText: "Code with curiosity, design with intention, and bring energy into every project I touch — this is more than a job.",
      label: "Passion"
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const quickFacts = [
    { icon: Clock, label: "Coding since", value: "2022" },
    { icon: MapPin, label: "Location", value: "Surat, India" },
    { icon: Award, label: "Status", value: "Remote-ready" },
    { icon: Target, label: "Currently", value: "Pre-final year B.Tech CSE student" },
  ];

  const proficiencyCards = [
    {
      title: "Proficiency",
      subtitle: "Two freelancers in one",
      description: "Full-stack development & UI/UX design expertise"
    },
    {
      title: "Satisfaction",
      subtitle: "100% is the baseline",
      description: "Exceeding expectations is the standard"
    },
    {
      title: "Reliability",
      subtitle: "Fast responses, no guesswork",
      description: "Clear communication and timely delivery"
    },
    {
      title: "Passion",
      subtitle: "Energy in every project",
      description: "Bringing enthusiasm to every line of code"
    }
  ];

  const futureGoals = [
    "Creative AI applications",
    "Micro-SaaS development",
    "AI in Digital Forensics",
    "Global collaborations",
    "Research design ethics"
  ];

  const interests = [
    { emoji: "🎬", text: "Video editing" },
    { emoji: "📷", text: "Urban chaos photography" },
    { emoji: "🎧", text: "Vibing to synth/lo-fi" }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          <span className="gradient-text">Know who I am</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Pixels, logic & soul – that's my trinity
        </p>
      </div>

      {/* Profile & Bio Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Dhruv Panchal</span> – 
              pre-final year B.Tech CSE student, full stack developer, UI/UX designer & creative technologist. 
              I build web experiences that are more about the journey than just utility.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently diving deep into <span className="text-primary font-medium">AI in Digital Forensics</span>, 
              blending cybersecurity with intelligent systems to create innovative solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work sits at the intersection of code & creativity. I'm always open to collaborations 
              or just a good conversation over coffee + code.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-center gap-3 glass-card p-4">
                  <fact.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{fact.label}</p>
                    <p className="font-medium">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Say Hello
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative animate-fade-in">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={dhruvPortrait} 
                alt="Dhruv Panchal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2">
              <span className="text-sm font-medium text-primary">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Card Grid */}
      <ScrollReveal>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proficiencyCards.map((card, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-bold text-lg mb-2 gradient-text">{card.title}</h3>
                <p className="text-sm font-medium mb-3">{card.subtitle}</p>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Future Goals */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Future Goals</h2>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-center gap-2 mb-6">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">What's Next</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {futureGoals.map((goal, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What I Bring to the Table Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Enhanced multi-layer background with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-primary/10 via-secondary/8 to-primary/6 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-secondary/10 to-primary/8 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-primary/8 to-secondary/6 rounded-full blur-xl opacity-40"></div>
        <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-gradient-to-r from-primary/6 to-secondary/4 rounded-full blur-lg opacity-30"></div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Section Header with enhanced hover animation */}
          <div className="text-center mb-16 md:mb-20 lg:mb-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 tracking-wide group cursor-default">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent transition-all duration-700 group-hover:bg-gradient-to-l group-hover:from-secondary group-hover:via-primary group-hover:to-secondary bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
                WHAT I BRING TO THE TABLE
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/90 max-w-3xl mx-auto font-light">
              apart from a positive attitude and polite demeanor
            </p>
          </div>

          {/* Enhanced Cards Carousel with Advanced Animations */}
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
              {/* Left: Advanced Stacked Card Display */}
              <div className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md lg:max-w-lg group perspective-1000">
                  {/* Enhanced stacked layers with sophisticated depth and parallax */}
                  <div className="absolute -top-16 -left-16 w-full h-full rounded-3xl border border-border/8 opacity-25 backdrop-blur-sm bg-gradient-to-br from-background/15 to-background/8 transition-all duration-1000 group-hover:opacity-35 group-hover:-top-20 group-hover:-left-20 group-hover:rotate-1 -z-30 shadow-2xl shadow-primary/5"></div>
                  <div className="absolute -top-12 -left-12 w-full h-full rounded-3xl border border-border/12 opacity-35 backdrop-blur-sm bg-gradient-to-br from-background/20 to-background/12 transition-all duration-800 group-hover:opacity-45 group-hover:-top-16 group-hover:-left-16 group-hover:-rotate-1 -z-20 shadow-xl shadow-primary/8"></div>
                  <div className="absolute -top-8 -left-8 w-full h-full rounded-3xl border border-border/18 opacity-50 backdrop-blur-sm bg-gradient-to-br from-background/30 to-background/18 transition-all duration-600 group-hover:opacity-60 group-hover:-top-12 group-hover:-left-12 group-hover:rotate-0.5 -z-10 shadow-lg shadow-primary/12"></div>
                  <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-border/25 opacity-65 backdrop-blur-sm bg-gradient-to-br from-background/35 to-background/25 transition-all duration-400 group-hover:opacity-75 group-hover:-top-8 group-hover:-left-8 group-hover:-rotate-0.5 -z-5 shadow-md shadow-primary/15"></div>
                  
                  {/* Main card with advanced styling and 3D hover effects */}
                  <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl border border-border/40 shadow-2xl relative overflow-hidden backdrop-blur-xl bg-background/50 transition-all duration-500 group-hover:shadow-primary/25 group-hover:scale-[1.02] group-hover:rotate-0 transform-gpu hover:shadow-3xl">
                    {/* Enhanced background effects with animated gradients */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/25 via-secondary/15 to-transparent rounded-full blur-2xl transition-all duration-700 group-hover:opacity-90 group-hover:scale-110"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary/20 via-primary/12 to-transparent rounded-full blur-xl transition-all duration-500 group-hover:scale-105"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 rounded-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                    
                    <div className="relative z-10">
                      <div className="text-center space-y-6 md:space-y-8">
                        {/* Enhanced tag with sophisticated glow and animations */}
                        <div className="mb-6 md:mb-8">
                          <span className="inline-block px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-primary/25 to-secondary/20 border border-primary/40 text-sm md:text-base font-bold text-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:scale-105 backdrop-blur-md relative overflow-hidden group/tag">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10">{cards[currentCard].label}</span>
                          </span>
                        </div>
                        
                        {/* Enhanced title with sophisticated typography hierarchy and animations */}
                        <div className="space-y-3 md:space-y-4">
                          <p className="text-xs md:text-sm text-muted-foreground/80 font-medium tracking-wider uppercase opacity-70">It feels like</p>
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight transition-all duration-500 ease-in-out">
                            {cards[currentCard].title === "It feels like 2 freelancers in one." ? (
                              <span className="block">
                                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground/90">It feels like</span>
                                <br />
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                                  2 freelancers
                                </span>
                                <br />
                                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground/90">in one.</span>
                              </span>
                            ) : cards[currentCard].title === "100% Satisfaction Rate" ? (
                              <span className="block">
                                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                  100%
                                </span>
                                <br />
                                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground/90">Satisfaction Rate</span>
                              </span>
                            ) : cards[currentCard].title === "Fast Responses" ? (
                              <span className="block">
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                  Fast
                                </span>
                                <br />
                                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground/90">Responses</span>
                              </span>
                            ) : (
                              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                                ∞
                              </span>
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced floating particles with varied animations */}
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-60 shadow-lg shadow-primary/50"></div>
                  <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse delay-1000 opacity-70 shadow-md shadow-secondary/40"></div>
                  <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse delay-500 opacity-50 shadow-lg shadow-primary/30"></div>
                  <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-secondary rounded-full animate-ping opacity-40"></div>
                </div>
              </div>

              {/* Right: Enhanced Content with Improved Spacing and Typography */}
              <div className="space-y-8 md:space-y-12 lg:space-y-16 order-1 lg:order-2">
                <div className="transition-all duration-700 ease-in-out space-y-6 md:space-y-10">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight tracking-tight">
                    {cards[currentCard].label}
                  </h4>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/95 leading-relaxed font-light max-w-2xl tracking-wide">
                    {cards[currentCard].mainText}
                  </p>
                </div>

                {/* Enhanced Navigation with Sophisticated Styling */}
                <div className="flex items-center gap-6 md:gap-8 pt-4">
                  <button
                    onClick={prevCard}
                    className="group relative w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-background/70 hover:bg-background/90 border border-border/40 hover:border-primary/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background transform-gpu overflow-hidden"
                    aria-label="Previous highlight"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground group-hover:text-primary transition-all duration-300 relative z-10 group-hover:scale-110" />
                  </button>
                  <button
                    onClick={nextCard}
                    className="group relative w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-background/70 hover:bg-background/90 border border-border/40 hover:border-primary/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background transform-gpu overflow-hidden"
                    aria-label="Next highlight"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground group-hover:text-primary transition-all duration-300 relative z-10 group-hover:scale-110" />
                  </button>
                </div>

                {/* Enhanced pagination indicators with tooltips and sophisticated animations */}
                <div className="flex gap-3 md:gap-4 pt-2">
                  {cards.map((card, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCard(index)}
                      className={`group relative transition-all duration-400 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background transform-gpu overflow-hidden ${
                        index === currentCard 
                          ? 'w-10 md:w-12 lg:w-14 h-3 md:h-4 bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/40 scale-110' 
                          : 'w-3 md:w-4 h-3 md:h-4 bg-muted/60 hover:bg-muted-foreground/80 hover:scale-125 hover:shadow-md hover:shadow-primary/20'
                      }`}
                      aria-label={`Go to ${card.label}`}
                      title={`${card.label}: ${card.title}`}
                    >
                      {index === currentCard && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-60"></div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside Work */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-12">Outside Work</h2>
        <div className="max-w-2xl mx-auto glass-card p-8">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Heart className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">What I Love</h3>
          </div>
          <div className="space-y-4">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <span className="text-2xl">{interest.emoji}</span>
                <span className="text-muted-foreground">{interest.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
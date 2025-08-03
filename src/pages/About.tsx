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
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Enhanced background with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary/8 via-secondary/6 to-primary/4 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-secondary/8 to-primary/6 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-gradient-to-tl from-primary/6 to-secondary/4 rounded-full blur-xl opacity-30"></div>
        
        <div className="relative z-10 px-4">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide group">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent transition-all duration-300 group-hover:bg-gradient-to-l">
                WHAT I BRING TO THE TABLE
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground opacity-90 max-w-2xl mx-auto">
              apart from a positive attitude and polite demeanor
            </p>
          </div>

          {/* Enhanced Cards Carousel */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Enhanced Stacked Card Display */}
              <div className="relative h-80 md:h-96 flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md group">
                  {/* Enhanced stacked layers with better visibility and depth */}
                  <div className="absolute -top-12 -left-12 w-full h-full rounded-3xl border border-border/5 opacity-20 backdrop-blur-sm bg-gradient-to-br from-background/10 to-background/5 transition-all duration-700 group-hover:opacity-30 group-hover:-top-14 group-hover:-left-14 -z-30"></div>
                  <div className="absolute -top-8 -left-8 w-full h-full rounded-3xl border border-border/8 opacity-30 backdrop-blur-sm bg-gradient-to-br from-background/15 to-background/8 transition-all duration-500 group-hover:opacity-40 group-hover:-top-10 group-hover:-left-10 -z-20"></div>
                  <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-border/15 opacity-50 backdrop-blur-sm bg-gradient-to-br from-background/25 to-background/15 transition-all duration-300 group-hover:opacity-60 group-hover:-top-6 group-hover:-left-6 -z-10"></div>
                  
                  {/* Main card with enhanced styling and hover effects */}
                  <div className="glass-card p-6 md:p-8 rounded-3xl border border-border/30 shadow-2xl relative overflow-hidden backdrop-blur-xl bg-background/40 transition-all duration-300 group-hover:shadow-primary/20 group-hover:scale-[1.02]">
                    {/* Enhanced background effects */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 via-secondary/10 to-transparent rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-80"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/15 via-primary/8 to-transparent rounded-full blur-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="text-center space-y-6">
                        {/* Enhanced tag with better contrast and glow */}
                        <div className="mb-6">
                          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/15 border border-primary/30 text-sm font-semibold text-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/30 hover:scale-105 backdrop-blur-sm">
                            {cards[currentCard].label}
                          </span>
                        </div>
                        
                        {/* Enhanced title with better typography hierarchy */}
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground/80 font-medium tracking-wide">It feels like</p>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight transition-all duration-500 ease-in-out">
                            {cards[currentCard].title === "It feels like 2 freelancers in one." ? (
                              <>
                                It feels like{" "}
                                <span className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                  2 freelancers
                                </span>{" "}
                                in one.
                              </>
                            ) : (
                              cards[currentCard].title
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating particles/glow effects */}
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-secondary/70 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>

              {/* Right: Enhanced Content and Navigation with better spacing */}
              <div className="space-y-8 md:space-y-12 order-1 lg:order-2">
                <div className="transition-all duration-500 ease-in-out space-y-6 md:space-y-8">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                    {cards[currentCard].label}
                  </h4>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed opacity-90 max-w-xl">
                    {cards[currentCard].mainText}
                  </p>
                </div>

                {/* Enhanced Navigation with better accessibility and spacing */}
                <div className="flex items-center gap-6 md:gap-8">
                  <button
                    onClick={prevCard}
                    className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/60 hover:bg-background/80 border border-border/30 hover:border-primary/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                    aria-label="Previous highlight"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </button>
                  <button
                    onClick={nextCard}
                    className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/60 hover:bg-background/80 border border-border/30 hover:border-primary/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                    aria-label="Next highlight"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </button>
                </div>

                {/* Enhanced Card indicators with tooltips and better animations */}
                <div className="flex gap-3 md:gap-4">
                  {cards.map((card, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCard(index)}
                      className={`group relative transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background ${
                        index === currentCard 
                          ? 'w-8 md:w-10 h-3 md:h-4 bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 scale-110' 
                          : 'w-3 md:w-4 h-3 md:h-4 bg-muted hover:bg-muted-foreground/70 hover:scale-125'
                      }`}
                      aria-label={`Go to ${card.label}`}
                      title={`${card.label}: ${card.title}`}
                    >
                      {index === currentCard && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-50"></div>
                      )}
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
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
      <section className="py-32 relative overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide">
              WHAT I BRING TO THE TABLE
            </h2>
            <p className="text-lg text-muted-foreground">
              apart from a positive attitude and polite demeanour
            </p>
          </div>

          {/* Cards Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Card Display */}
              <div className="relative">
                <div className="glass-card p-8 rounded-2xl border border-border/20 shadow-2xl relative overflow-hidden">
                  {/* Background gradient rings */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full blur-lg"></div>
                  
                  <div className="relative z-10 card-transition">
                    <p className="text-sm text-muted-foreground mb-2">It feels like</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight card-fade-in">
                      {cards[currentCard].title}
                    </h3>
                  </div>
                </div>
                
                {/* Card stack effect */}
                <div className="absolute -top-2 -left-2 w-full h-full glass-card rounded-2xl border border-border/10 opacity-30 -z-10"></div>
                <div className="absolute -top-4 -left-4 w-full h-full glass-card rounded-2xl border border-border/5 opacity-20 -z-20"></div>
              </div>

              {/* Right: Content and Navigation */}
              <div className="space-y-8">
                <div className="card-transition">
                  <h4 className="text-xl font-bold text-primary mb-4 card-fade-in">
                    {cards[currentCard].label}
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed card-fade-in">
                    {cards[currentCard].mainText}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevCard}
                    className="w-12 h-12 rounded-full bg-background hover:bg-accent border border-border flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextCard}
                    className="w-12 h-12 rounded-full bg-background hover:bg-accent border border-border flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                {/* Card indicators */}
                <div className="flex gap-2">
                  {cards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCard(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentCard 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted hover:bg-muted-foreground'
                      }`}
                    />
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
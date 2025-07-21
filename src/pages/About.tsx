import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin, Clock, Award, Target, Heart } from "lucide-react";
import dhruvPortrait from "@/assets/dhruv-portrait.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  const quickFacts = [
    { icon: Clock, label: "Coding since", value: "2022" },
    { icon: MapPin, label: "Location", value: "Surat, India" },
    { icon: Award, label: "Status", value: "Remote-ready" },
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
      <div className="container mx-auto px-4">
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
    </div>
  );
};

export default About;
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Globe, Code, Music } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import RotatingEarth from "@/components/RotatingEarth";
import dhruvPortrait from "@/assets/dhruv-portrait.jpg";
import ParticleBackground from "@/components/ParticleBackground"; // Added ParticleBackground import

const Home = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 17) setGreeting("Good Afternoon");
    else if (hour < 21) setGreeting("Good Evening");
    else setGreeting("Good Night");
  }, []);

  const techStack = [
    { name: "ReactJS", color: "bg-blue-600" },
    { name: "NextJS", color: "bg-gray-700" },
    { name: "TypeScript", color: "bg-blue-700" },
    { name: "TailwindCSS", color: "bg-teal-600" },
    { name: "NodeJS", color: "bg-green-600" },
    { name: "ExpressJS", color: "bg-gray-600" },
    { name: "MongoDB", color: "bg-green-700" },
    { name: "Git", color: "bg-orange-700" },
    { name: "GitHub", color: "bg-purple-700" },
    { name: "Vercel", color: "bg-gray-500" },
    { name: "Figma", color: "bg-pink-600" },
    { name: "Adobe", color: "bg-red-700" }
  ];

  const scrollingSkills = [
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

  const welcomingLines = [
    "Hello",
    "Namaskar",
    "Namaste",
    "स्वस्थस्य स्वागतं",
    "नमस्कार",
    "নমস্কার",
    "Hallo",
    "Bonjour",
    "Привет",
    "مرحباً",
    "કેમ છો?"
  ];

  return (
    <div className="min-h-screen py-20">

      {/* Welcoming Lines Section */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-8 mt-0 px-4">
        {welcomingLines.map((line, index) => (
          <span
            key={index}
            className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {line}
          </span>
        ))}
      </div>

                                         {/* Hero Section with Enhanced Design */}
        <section className="flex flex-col items-center justify-center text-center px-4 mb-16">

                 {/* Enhanced Headline with Gradient */}
         <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.2] mb-6 text-glow-primary gradient-text-flow">
           Pixels. Logic. Story.
         </h1>

                 {/* Enhanced Subheadline */}
         <div className="mb-12">
           <span className="text-xl md:text-3xl text-foreground/90 font-medium text-glow">
             I craft digital experiences you'll never forget.
           </span>
         </div>

                 {/* Enhanced Avatar and intro */}
         <div className="flex items-center justify-center gap-4 mb-10 glass-card px-6 py-3 rounded-full card-hover">
           <span className="text-lg text-foreground/80">Hello, I'm</span>
           <span className="text-xl font-bold gradient-text-flow">Dhruv Panchal</span>
           <img 
             src={dhruvPortrait} 
             alt="Dhruv Panchal" 
             className="w-10 h-10 rounded-full border-2 border-primary/50 object-cover shadow-lg"
           />
           <span className="text-lg text-foreground/80">Developer & Designer</span>
         </div>

                 {/* Enhanced CTA Section */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="px-10 py-5 text-lg rounded-full button-magnetic btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Let's Connect <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 card-hover">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-foreground/80 text-sm">Available for projects</span>
          </div>
        </div>

                                   {/* Contact Info */}
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 card-hover mb-16">
          <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" />
          </svg>
          <span className="text-foreground/80 text-sm">dhruvpanchal.dev@gmail.com</span>
        </div>
      </section>

                           {/* Enhanced Scrolling Skills Banner */}
        <div className="border-y border-primary/20 py-12 overflow-hidden relative mb-16">
        <div className="flex animate-scroll whitespace-nowrap relative z-10">
          {[...scrollingSkills, ...scrollingSkills].map((skill, index) => (
            <span key={index} className="px-8 text-foreground/80 text-xl font-medium text-glow">
              {skill} <span className="text-primary">•</span>
            </span>
          ))}
        </div>
      </div>

                           {/* Enhanced Main Content Grid */}
        <section className="py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8 scroll-slide-left">
              {/* Enhanced Collaboration Card */}
              <div className="glass-card p-8 space-y-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-tertiary/20 text-tertiary">
                    <Heart className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-tertiary/80 tracking-wider">COLLABORATION</span>
                    <h3 className="text-2xl font-bold text-glow">Working Together</h3>
                  </div>
                </div>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  I prioritize client collaboration, fostering open communication and ensuring your vision comes to life through every iteration.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-success text-sm font-medium">Always responsive</span>
                </div>
              </div>

              {/* Enhanced Timezone Card */}
              <div className="glass-card p-8 space-y-6 card-hover">
                <div className="text-center space-y-4">
                  <span className="text-sm font-medium text-secondary/80 tracking-wider">GLOBAL REACH</span>
                  <h3 className="text-2xl font-bold text-glow">I'm very flexible with time</h3>
                  <h3 className="text-2xl font-bold text-secondary gradient-text-flow">zone communications</h3>
                </div>
                
                <div className="flex justify-center py-4">
                  <RotatingEarth />
                </div>
                
                <div className="flex justify-center gap-4">
                  <div className="glass-card px-4 py-3 rounded-lg card-hover">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇬🇧</span>
                      <span className="text-sm font-medium text-foreground">UK</span>
                    </div>
                  </div>
                  <div className="glass-card px-4 py-3 rounded-lg bg-secondary/20 border-secondary/30 card-hover">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇮🇳</span>
                      <span className="text-sm font-medium text-secondary">India</span>
                    </div>
                  </div>
                  <div className="glass-card px-4 py-3 rounded-lg card-hover">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span>
                      <span className="text-sm font-medium text-foreground">USA</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground/70">Currently in</span>
                  </div>
                  <p className="text-lg font-semibold text-glow mb-4">India</p>
                  <Button variant="outline" size="sm" className="rounded-full button-magnetic">
                    Connect now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Tech Stack Card */}
              <div className="glass-card p-8 space-y-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/20 text-accent">
                    <Code className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent/80 tracking-wider">TECHNOLOGY</span>
                    <h3 className="text-2xl font-bold text-glow">Cutting-edge Stack</h3>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 tech-stack-grid">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="glass-card p-3 rounded-xl text-center card-hover border border-primary/20 hover:border-primary/50"
                    >
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 scroll-slide-right">
              {/* Enhanced Profile Card */}
              <div className="glass-card p-8 text-center space-y-6 card-hover">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center mx-auto pulse-glow">
                  <span className="text-white text-3xl font-bold text-glow">D</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-glow">Let's work together</h3>
                  <p className="text-foreground/70 mb-6">Ready to bring your next project to life</p>
                  <div className="glass-card px-6 py-3 inline-flex items-center gap-3 rounded-full card-hover">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">dhruvpanchal.dev@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Inside Scoop Card */}
              <div className="glass-card p-8 space-y-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-quaternary/20 text-quaternary">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-lg">🚀</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-quaternary/80 tracking-wider">THE INSIDE SCOOP</span>
                    <h3 className="text-xl font-bold text-glow">Current Project</h3>
                  </div>
                </div>
                <p className="text-lg text-foreground/80">Currently building a custom portfolio platform with cutting-edge animations</p>
                <Button variant="outline" className="w-full group button-magnetic">
                  View Recent Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform ml-2" />
                </Button>
              </div>

              {/* Enhanced Standout Card */}
              <div className="glass-card p-8 space-y-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-lg">✨</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary/80 tracking-wider">IMPACT</span>
                    <h3 className="text-xl font-bold text-glow">Stand Out</h3>
                  </div>
                </div>
                <p className="text-lg text-foreground/80">Websites that make a difference and leave lasting impressions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

                                                                                   {/* Footer Section */}
         <ScrollReveal>
           <section className="container mx-auto px-4 py-16">
             <div className="text-center mb-12">
               <p className="text-sm text-muted-foreground mb-2">MY SITE</p>
               <h2 className="text-4xl font-bold mb-4">
                 Explore, Connect
                 <br />
                 <span className="gradient-text-animated">& Leave Your Mark</span>
               </h2>
               <p className="text-muted-foreground">Explore, experiment && say hello</p>
             </div>

           <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             {/* Uses Card */}
             <div className="glass-card p-6 space-y-4">
               <div className="flex items-center gap-3 text-purple-500">
                 <Code className="h-5 w-5" />
                 <div className="w-5 h-5 bg-pink-500 rounded-full"></div>
                 <div className="w-5 h-5 bg-green-500 rounded-lg"></div>
               </div>
               <h3 className="text-lg font-semibold">Uses</h3>
               <p className="text-sm text-muted-foreground">
                 Check out my favorite tools and spots around the web.
               </p>
               <Button variant="outline" size="sm" className="w-full">
                 Explore Tools
               </Button>
             </div>

             {/* Guestbook Card */}
             <div className="glass-card p-6 space-y-4">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                   <span className="text-purple-500">💬</span>
                 </div>
                 <div className="w-8 h-8 bg-purple-700 rounded-lg"></div>
               </div>
               <h3 className="text-lg font-semibold">Guestbook</h3>
               <p className="text-sm text-muted-foreground">
                 Let me know you were here!
               </p>
               <Button variant="outline" size="sm" className="w-full">
                 Sign Guestbook
               </Button>
             </div>

             {/* Recent Favorite Card */}
             <div className="glass-card p-6 space-y-4">
               <div className="flex items-center gap-2">
                 <Music className="h-5 w-5 text-green-500" />
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 <span className="text-sm font-medium text-green-500">Recent Favorite</span>
               </div>
               <div className="space-y-2">
                 <p className="text-sm text-muted-foreground">I'm listening to</p>
                 <h4 className="font-semibold">"Namastute"</h4>
                 <p className="text-sm text-muted-foreground">
                   by <span className="text-purple-500">Seedhe Maut</span> from the album<br />
                   <span className="font-medium">Namastute</span>
                 </p>
               </div>
               <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg h-20 flex items-center justify-center">
                 <Music className="h-8 w-8 text-white" />
               </div>
             </div>
           </div>
         </section>
       </ScrollReveal>
    </div>
  );
};

export default Home;
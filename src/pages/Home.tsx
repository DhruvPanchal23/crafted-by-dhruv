import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Globe, Code, Music } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import RotatingEarth from "@/components/RotatingEarth";

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

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">{greeting}</span>
            <span className="text-sm">✨</span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-white">FROM PIXELS TO </span>
              <span className="gradient-text-animated">PRODUCTS</span>
              <br />
              <span className="text-white">LET'S MAKE IT </span>
              <span className="gradient-text-animated">HAPPEN!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm available for full-time roles & freelance projects.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Crafting experiences that remember you back.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="premium" size="lg" className="group px-8 py-4 text-lg rounded-full">
              Connect With Me
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Scrolling Skills Banner */}
      <div className="border-y border-border/50 py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...scrollingSkills, ...scrollingSkills].map((skill, index) => (
            <span key={index} className="px-8 text-muted-foreground text-lg">
              {skill} •
            </span>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Collaboration Card */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-purple-500" />
                <h3 className="text-lg font-semibold">COLLABORATION</h3>
              </div>
              <p className="text-muted-foreground">
                I prioritize client collaboration, fostering open communication.
              </p>
            </div>

            {/* Timezone Card */}
            <div className="glass-card p-8 space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-white">I'm very flexible with time</h3>
                <h3 className="text-xl font-semibold text-blue-400">zone communications</h3>
              </div>
              
              <div className="flex justify-center">
                <RotatingEarth />
              </div>
              
              <div className="flex justify-center gap-4">
                <div className="glass-card px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇬🇧</span>
                    <span className="text-sm font-medium text-white">UK</span>
                  </div>
                </div>
                <div className="glass-card px-3 py-2 rounded-lg bg-blue-500/20">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇮🇳</span>
                    <span className="text-sm font-medium text-blue-400">India</span>
                  </div>
                </div>
                <div className="glass-card px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-sm font-medium text-white">USA</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Remote</span>
                </div>
                <p className="text-sm font-medium text-white">India</p>
                <Button variant="outline" size="sm" className="mt-4 rounded-full">
                  Connect now
                  <ArrowRight className="h-3 w-3 ml-2" />
                </Button>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-purple-500" />
                <h3 className="text-lg font-semibold">Passionate about cutting-edge technologies</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className={`${tech.color} rounded-lg px-3 py-2 text-white text-sm font-medium text-center`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Websites Card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
                <h3 className="text-lg font-semibold">Websites that stand out and make a difference</h3>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="glass-card p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Let's work together on your next project</h3>
                <div className="glass-card px-4 py-2 inline-flex items-center gap-2 rounded-lg">
                  <span className="text-sm">✉️</span>
                  <span className="text-sm font-medium">dhruvpanchal.dev@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Inside Scoop Card */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">🔗</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">THE INSIDE SCOOP</span>
              </div>
              <h3 className="text-xl font-semibold">Currently building a custom portfolio platform</h3>
              <Button variant="outline" className="w-full group">
                View Recent Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform ml-2" />
              </Button>
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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin, 
  ExternalLink,
  Code, 
  Palette,
  Database,
  Smartphone,
  Figma,
  Chrome,
  CheckCircle
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import dhruvPortrait from "@/assets/dhruv-portrait.jpg";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  // Skills data with proficiency levels
  const skills = [
    { name: "JavaScript", level: 95, icon: Code },
    { name: "React", level: 90, icon: Code },
    { name: "Node.js", level: 85, icon: Database },
    { name: "Python", level: 80, icon: Code },
    { name: "TypeScript", level: 85, icon: Code },
    { name: "Figma", level: 90, icon: Figma },
    { name: "Adobe XD", level: 85, icon: Palette },
    { name: "UI/UX Design", level: 92, icon: Smartphone }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing UI/UX design skills with modern animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="heading-xl mb-6 text-white">
              Dhruv Panchal – Crafting User-Centric Web Experiences
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Full Stack Developer & UI/UX Designer
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="heading-lg text-center mb-16 text-foreground">About Me</h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal className="slide-in-left">
                <div className="text-center md:text-left">
                  <Avatar className="w-48 h-48 mx-auto md:mx-0 mb-6 border-4 border-primary/20">
                    <AvatarImage src={dhruvPortrait} alt="Dhruv Panchal" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                </div>
              </ScrollReveal>
              
              <ScrollReveal className="slide-in-right">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    I'm a passionate Full Stack Developer and UI/UX Designer with expertise in creating 
                    seamless digital experiences. With a strong foundation in both frontend and backend 
                    technologies, I bring ideas to life through clean, efficient code and user-centered design.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    My technical expertise spans JavaScript, React, Node.js, Python, and modern design tools 
                    like Figma and Adobe XD. I'm committed to delivering high-quality solutions that not 
                    only look great but also provide exceptional user experiences.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["JavaScript", "React", "Node.js", "Python", "Figma", "Adobe XD"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-16 text-foreground">Featured Projects</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <Card className="project-card">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" className="btn-primary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="btn-outline">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-16 text-foreground">Skills & Expertise</h2>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 50}>
                  <div className="flex items-center gap-4 p-4 card">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar h-2">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="heading-lg text-center mb-16 text-foreground">Get In Touch</h2>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <ScrollReveal className="slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Work Together</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">dhruv@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">San Francisco, CA</span>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Button size="icon" variant="outline" className="btn-outline">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="btn-outline">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="btn-outline">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="slide-in-right">
              <Card className="card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Dhruv Panchal. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
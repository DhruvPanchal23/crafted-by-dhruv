import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Lock } from "lucide-react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Dev", "UI/UX", "Cyber Security"];

  const projects = [
    {
      title: "Personal Portfolio",
      category: "Web Dev",
      description: "Modern dark glassmorphism portfolio website with smooth animations and responsive design",
      tech: ["ReactJS", "TailwindCSS", "TypeScript", "Framer Motion"],
      github: "https://github.com/dhruvpanchal/portfolio",
      live: "https://dhruvpanchal.dev",
      isPrivate: false,
      featured: true
    },
    {
      title: "Hospital Management System",
      category: "Web Dev",
      description: "Complete hospital management solution with patient records, appointment scheduling, and PDF reporting",
      tech: ["HTML", "JavaScript", "MySQL", "TCPDF", "PHP"],
      github: null,
      live: null,
      isPrivate: true,
      featured: true
    },
    {
      title: "Netflix UI Clone",
      category: "Web Dev",
      description: "Pixel-perfect Netflix interface clone with movie browsing, search, and user authentication",
      tech: ["React", "Firebase", "MovieDB API", "CSS3"],
      github: "https://github.com/dhruvpanchal/netflix-clone",
      live: "https://netflix-clone-dhruv.vercel.app",
      isPrivate: false,
      featured: false
    },
    {
      title: "ARP Spoofing Detector",
      category: "Cyber Security",
      description: "Network security tool to detect and prevent ARP spoofing attacks in real-time",
      tech: ["Python", "Scapy", "Tkinter", "Network Security"],
      github: null,
      live: null,
      isPrivate: true,
      featured: false
    },
    {
      title: "E-Commerce Dashboard",
      category: "UI/UX",
      description: "Modern admin dashboard design for e-commerce platforms with analytics and inventory management",
      tech: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping"],
      github: null,
      live: "https://figma.com/dhruvpanchal/ecommerce-dashboard",
      isPrivate: false,
      featured: false
    },
    {
      title: "Task Management App",
      category: "Web Dev",
      description: "Collaborative task management application with real-time updates and team features",
      tech: ["NextJS", "MongoDB", "Socket.io", "TailwindCSS"],
      github: "https://github.com/dhruvpanchal/task-manager",
      live: null,
      isPrivate: false,
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">From concepts to commit</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Here's what I've brought to life
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 inline-flex rounded-xl">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`mx-1 ${activeFilter === filter ? "shadow-glow" : ""}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card p-6 hover:scale-105 transition-all duration-300 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                </div>
                {project.isPrivate && (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {project.category === "UI/UX" ? "Design" : "Live"}
                    </a>
                  </Button>
                )}
                {project.isPrivate && !project.github && !project.live && (
                  <Button variant="outline" size="sm" disabled>
                    <Lock className="h-3 w-3 mr-1" />
                    Private
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found for "{activeFilter}" category.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Like what you see?</h2>
            <p className="text-muted-foreground mb-6">
              Let's collaborate on your next project
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero">
                Start a Project
              </Button>
              <Button variant="outline">
                View All on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Twitter,
  Globe,
  MessageSquare,
  Send
} from "lucide-react";

const Links = () => {
  const links = [
    {
      title: "Website",
      description: "My personal portfolio website",
      url: "https://dhruvpanchal.dev",
      icon: Globe,
      featured: true
    },
    {
      title: "LinkedIn",
      description: "Professional network & career updates",
      url: "https://linkedin.com/in/dhruv-panchal",
      icon: Linkedin,
      featured: true
    },
    {
      title: "GitHub",
      description: "Open source projects & contributions",
      url: "https://github.com/dhruvpanchal",
      icon: Github,
      featured: true
    },
    {
      title: "Twitter",
      description: "Thoughts, tech updates & random musings",
      url: "https://twitter.com/dhruvpanchal",
      icon: Twitter,
      featured: false
    },
    {
      title: "Email",
      description: "Direct communication for projects",
      url: "mailto:dhruvpanchal.dev@gmail.com",
      icon: Mail,
      featured: true
    },
    {
      title: "Resume",
      description: "Download my latest resume",
      url: "/resume.pdf",
      icon: FileText,
      featured: true
    },
    {
      title: "Projects",
      description: "Showcase of my development work",
      url: "/work",
      icon: ExternalLink,
      featured: false
    },
    {
      title: "Guestbook",
      description: "Leave a message for me",
      url: "/guestbook",
      icon: MessageSquare,
      featured: false
    },
    {
      title: "Feedback",
      description: "Help me improve my website",
      url: "/feedback",
      icon: Send,
      featured: false
    }
  ];

  const featuredLinks = links.filter(link => link.featured);
  const otherLinks = links.filter(link => !link.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">All Links</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Find me across the web
          </p>
        </div>

        {/* Featured Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Other Links */}
        <div>
          <h2 className="text-2xl font-bold mb-8">More</h2>
          <div className="grid grid-cols-1 gap-4">
            {otherLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="glass-card p-4 hover:scale-[1.02] transition-all duration-300 group block"
                style={{ animationDelay: `${(featuredLinks.length + index) * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Quick Contact</h2>
            <p className="text-muted-foreground mb-6">
              Need to reach me quickly? Here are the best ways
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" asChild>
                <a href="mailto:dhruvpanchal.dev@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/dhruv-panchal" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;

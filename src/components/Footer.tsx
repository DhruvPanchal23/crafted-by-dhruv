import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Twitter, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">MY SITE</h2>
          <p className="text-muted-foreground">Explore, Connect & Leave Your Mark</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card text-center">
            <h3 className="font-semibold mb-2">Tools</h3>
            <p className="text-sm text-muted-foreground mb-4">Check out my tool kit</p>
            <Link to="/work">
              <Button variant="outline" size="sm">
                View Tools <ExternalLink className="h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div className="glass-card text-center">
            <h3 className="font-semibold mb-2">Guest Book</h3>
            <p className="text-sm text-muted-foreground mb-4">I'd love to hear from you</p>
            <Link to="/guestbook">
              <Button variant="outline" size="sm">
                Leave Message <ExternalLink className="h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div className="glass-card text-center">
            <h3 className="font-semibold mb-2">Current Vibe</h3>
            <p className="text-sm text-muted-foreground mb-4">Namastute by Seedhe Maut</p>
            <Button variant="outline" size="sm" disabled>
              Playing <span className="animate-pulse">♪</span>
            </Button>
          </div>
        </div>

        {/* Quotes */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-lg font-medium gradient-text">"Bridging Imagination & Innovation"</p>
          <p className="text-muted-foreground">"Let's Build What Matters"</p>
          <p className="text-sm text-primary">"Open to Work"</p>
          <p className="text-sm text-muted-foreground">"From concepts to crafted realities"</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/dhruv-panchal" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/dhruvpanchal" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:dhruvpanchal.dev@gmail.com">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/dhruvpanchal" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>Current Version: 1.0 | Last Updated: July 2025</p>
          <p>© {currentYear} Dhruv Panchal • Crafted with Coffee, Playlists & Curiosity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
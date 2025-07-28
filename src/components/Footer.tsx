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
          <h2 className="text-lg font-medium mb-4 text-muted-foreground tracking-wide">MY SITE</h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-2 leading-[1.2]">
            Explore, experiment
          </h3>
          <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.2]">
            <span className="gradient-text italic">& say hello</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            From concept to creation, let's make it happen!
          </p>
          <Button variant="hero" size="hero" asChild className="mb-12">
            <Link to="/connect">
              Get In Touch <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Uses Card */}
          <div className="glass-card p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 3a1 1 0 0 0-1 1v2H6a1 1 0 0 0-1 1v2H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2V7a1 1 0 0 0-1-1h-1V4a1 1 0 0 0-1-1H8zm1 2h6v2H9V5zm-2 4h10v8H7V9z"/>
                </svg>
              </div>
              <div className="text-pink-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Uses</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Check out my favorite tools and spots around the web.
            </p>
            <Link to="/work">
              <Button variant="outline" size="sm" className="text-purple-400 border-purple-400">
                Explore Tools <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Guestbook Card */}
          <div className="glass-card p-6 text-left">
            <div className="mb-4">
              <div className="text-purple-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Guestbook</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Let me know you were here!
            </p>
            <Link to="/guestbook">
              <Button variant="outline" size="sm" className="text-purple-400 border-purple-400">
                Sign Guestbook <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </Link>
            <div className="mt-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          {/* Music Card */}
          <div className="glass-card p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-green-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <span className="text-green-400 text-sm font-medium">Recent Favorite</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">I'm listening to</p>
            <h3 className="font-semibold text-lg mb-1">"Namastute"</h3>
            <p className="text-sm text-muted-foreground mb-1">
              by <span className="text-purple-400">Seedhe Maut</span> from the album
            </p>
            <p className="text-sm text-muted-foreground mb-4 italic">Namastute</p>
            <div className="bg-purple-500/20 rounded-lg p-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Professional Section */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-2xl font-medium">I'm available for full-time roles & freelance projects.</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I thrive on crafting dynamic web applications, and delivering seamless user experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary/50 rounded-full">Open to Work</span>
            <span className="px-3 py-1 bg-secondary/50 rounded-full">Full Stack Developer</span>
            <span className="px-3 py-1 bg-secondary/50 rounded-full">Remote Available</span>
          </div>
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
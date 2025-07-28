import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Twitter, ExternalLink, Code, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium mb-4 text-muted-foreground tracking-wide">MY SITE</h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-2 leading-[1.2]">
            Explore, Connect
          </h3>
          <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.2]">
            <span className="gradient-text-animated">& Leave Your Mark</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Explore, experiment && say hello
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
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
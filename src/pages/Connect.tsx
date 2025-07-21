import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Mail, 
  Clock, 
  Globe, 
  Send, 
  Shield,
  Star,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Good Wi-Fi, Great Vibes</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Ping Me!
          </p>
          <Badge variant="secondary" className="glass-card">
            <Star className="h-3 w-3 mr-1" />
            Recommended by Professionals
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Availability */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Availability</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>Open to Work – Global (except Antarctica 😄)</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Surat, India</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href="mailto:dhruvpanchal.dev@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    dhruvpanchal.dev@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Response Time</h2>
              </div>
              <p className="text-muted-foreground">
                Typically within <span className="text-foreground font-medium">24 hours</span>
              </p>
            </div>

            {/* Privacy */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Privacy</h2>
              </div>
              <p className="text-muted-foreground">
                Spam's not my thing. Privacy? Always.
              </p>
            </div>

            {/* Fun Quote */}
            <div className="glass-card p-6 text-center">
              <p className="text-lg font-medium gradient-text">
                "You know the business – I know the chemistry."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-card border-border/30"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-card border-border/30"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass-card border-border/30"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass-card border-border/30 min-h-[120px]"
                  placeholder="What's on your mind?"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                <Send className="h-4 w-4 mr-2" />
                Let's Connect
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Thank you for helping improve this website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Send,
  Mail,
  Star,
  MessageSquare,
  Lightbulb,
  Bug,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: ""
  });
  const { toast } = useToast();

  const categories = [
    { id: "general", label: "General Feedback", icon: MessageSquare },
    { id: "suggestion", label: "Suggestion", icon: Lightbulb },
    { id: "bug", label: "Bug Report", icon: Bug },
    { id: "appreciation", label: "Appreciation", icon: Heart }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback submitted!",
      description: "Thank you for helping improve this website. Your input is valuable!",
    });
    setFormData({ name: "", email: "", category: "", message: "" });
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
            <span className="gradient-text">Refining the experience</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your feedback matters
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-8">
            {/* Why Feedback Matters */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Why Your Feedback Matters</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every piece of feedback helps me create a better experience. Whether it's a bug you found, 
                a feature suggestion, or just your thoughts on the design – I value your input.
              </p>
            </div>

            {/* Contact Options */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Other Contact Options</h2>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Prefer email? You can also reach me directly at:
                </p>
                <a 
                  href="mailto:dhruvpanchal.dev@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  dhruvpanchal.dev@gmail.com
                </a>
              </div>
            </div>

            {/* Thank You Note */}
            <div className="glass-card p-6 text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground text-sm">
                For taking the time to help improve this website
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send Feedback</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name (Optional)
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-card border-border/30"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email (Optional)
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-card border-border/30"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, category: category.id }))}
                      className={`p-3 rounded-lg border text-left transition-all duration-300 ${
                        formData.category === category.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/30 hover:border-border/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <category.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{category.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Feedback *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass-card border-border/30 min-h-[120px]"
                  placeholder="Share your thoughts, suggestions, or report any issues..."
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Feedback
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Your feedback helps make this website better for everyone
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
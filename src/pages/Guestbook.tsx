import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Github, Chrome, User, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Guestbook = () => {
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  // Mock messages
  const messages = [
    {
      id: 1,
      name: "John Doe",
      message: "Amazing portfolio! Love the glassmorphism design.",
      timestamp: "2 hours ago",
      avatar: "JD"
    },
    {
      id: 2,
      name: "Sarah Chen",
      message: "The animations are so smooth! Great work on the user experience.",
      timestamp: "5 hours ago",
      avatar: "SC"
    },
    {
      id: 3,
      name: "Alex Kumar",
      message: "Impressive projects! Looking forward to your blog posts.",
      timestamp: "1 day ago",
      avatar: "AK"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      toast({
        title: "Please log in first",
        description: "You need to authenticate before leaving a message.",
      });
      return;
    }
    
    toast({
      title: "Message added!",
      description: "Thank you for leaving a message in my guestbook.",
    });
    setMessage("");
  };

  const handleLogin = (provider: string) => {
    toast({
      title: `Logging in with ${provider}...`,
      description: "This is a demo. In production, this would connect to auth.",
    });
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Leave a Message</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            I'd love to hear from you!
          </p>
        </div>

        {/* Auth Section */}
        {!isLoggedIn && (
          <div className="glass-card p-8 mb-8 text-center">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4">Sign in to leave a message</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => handleLogin("GitHub")}
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                Continue with GitHub
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleLogin("Google")}
                className="gap-2"
              >
                <Chrome className="h-4 w-4" />
                Continue with Google
              </Button>
            </div>
          </div>
        )}

        {/* Message Form */}
        {isLoggedIn && (
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-semibold mb-6">Leave a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts, feedback, or just say hello..."
                  className="glass-card border-border/30 min-h-[100px]"
                  maxLength={150}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">
                    {message.length}/150 characters
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => setMessage("")}
                    >
                      Clear
                    </Button>
                    <Button type="submit" size="sm">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Messages */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Recent Messages</h2>
          
          {messages.map((msg) => (
            <div key={msg.id} className="glass-card p-6 hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                  {msg.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{msg.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {msg.timestamp}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no messages */}
        {messages.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              No messages yet. Be the first to leave one!
            </p>
          </div>
        )}
      </div>
  );
};

export default Guestbook;
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Zap } from "lucide-react";

const EngineRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        {/* Animated 404 */}
        <div className="mb-12 animate-fade-in">
          <div className="text-8xl lg:text-9xl font-bold text-primary/20 mb-4 animate-pulse">
            404
          </div>
          <div className="flex justify-center mb-6">
            <Zap className="h-16 w-16 text-primary animate-bounce" />
          </div>
        </div>

        {/* Message */}
        <div className="glass-card p-8 space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold">
            <span className="gradient-text">Lost, this page is.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            In another system, it may be.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The page you're looking for seems to have drifted into hyperspace. 
            Perhaps it was moved, deleted, or you mistyped the URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Take Me Home
            </Button>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/20">
            <div>
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-xs text-muted-foreground">Possible URLs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">1</div>
              <div className="text-xs text-muted-foreground">You Found</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Work", path: "/work" },
            { name: "Connect", path: "/connect" }
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link.path)}
              className="glass-card p-4 hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-sm font-medium">{link.name}</div>
            </button>
          ))}
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-xs text-muted-foreground">
          <p>
            "May the <span className="text-primary">force</span> be with you... 
            and better navigation skills too."
          </p>
        </div>
      </div>
    </div>
  );
};

export default EngineRoom;
import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

const Blog = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">101 errors?</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Nah, just ideas brewing with a sip of coffee.
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-12 space-y-8">
            <div className="flex justify-center">
              <Coffee className="h-16 w-16 text-primary animate-float" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Coming Soon
                <span 
                  className={`ml-2 inline-block w-1 h-8 bg-primary transition-opacity duration-100 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm brewing up some thoughtful content about development, design, 
                and the beautiful chaos of creating digital experiences. 
              </p>

              <p className="text-muted-foreground">
                In the meantime, feel free to explore my work or reach out for a chat!
              </p>
            </div>

            {/* Coffee Animation */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Currently brewing</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>

            {/* Subscribe placeholder */}
            <div className="pt-8 border-t border-border/20">
              <p className="text-sm text-muted-foreground mb-4">
                Want to be notified when I publish?
              </p>
              <div className="flex justify-center">
                <div className="glass-card px-6 py-3 text-sm text-muted-foreground">
                  Newsletter coming soon ☕
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="glass-card p-6 text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">∞</h3>
            <p className="text-sm text-muted-foreground">Cups of coffee consumed</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">101+</h3>
            <p className="text-sm text-muted-foreground">Ideas in the pipeline</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">Soon™</h3>
            <p className="text-sm text-muted-foreground">Launch timeline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
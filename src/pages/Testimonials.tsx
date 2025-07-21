import { Badge } from "@/components/ui/badge";
import { Quote, Star, MapPin, Briefcase } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Shravan Goswami",
      role: "Research Associate",
      company: "Cambridge University",
      location: "Cambridge, UK",
      rating: 5,
      content: "Dhruv is a skilled developer with a strong foundation in both frontend and backend technologies. His ability to handle pressure and deliver quality work under tight deadlines is impressive. He brings creativity and technical expertise to every project.",
      skills: ["Full Stack Development", "Problem Solving", "Team Collaboration"],
      featured: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Senior UI/UX Designer",
      company: "TechCorp India",
      location: "Mumbai, India",
      rating: 5,
      content: "Working with Dhruv on our design system was a pleasure. He has an eye for detail and understands the balance between aesthetics and functionality. His designs are not just beautiful but also highly user-centric.",
      skills: ["UI/UX Design", "Design Systems", "User Research"],
      featured: false
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      location: "San Francisco, USA",
      rating: 5,
      content: "Dhruv delivered our MVP ahead of schedule with clean, maintainable code. His communication skills are excellent, and he proactively suggests improvements. Highly recommend for any web development project.",
      skills: ["React", "Node.js", "Architecture"],
      featured: false
    },
    {
      id: 4,
      name: "Dr. Rajesh Patel",
      role: "Professor",
      company: "IIT Bombay",
      location: "Mumbai, India",
      rating: 5,
      content: "Dhruv's work on cybersecurity projects shows deep understanding of network security principles. His ARP spoofing detection tool demonstrated both technical competence and practical application of security concepts.",
      skills: ["Cybersecurity", "Network Security", "Python"],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            What people say about working with me
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`glass-card p-8 hover:scale-[1.02] transition-all duration-300 ${
                testimonial.featured ? "lg:col-span-2 border-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-primary opacity-50" />
                {testimonial.featured && (
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </blockquote>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Author Info */}
              <div className="border-t border-border/20 pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Briefcase className="h-3 w-3" />
                      <span className="text-sm">{testimonial.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <span className="text-sm font-medium">{testimonial.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="text-sm">{testimonial.location}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
            <p className="text-muted-foreground mb-6">
              Join these amazing people and let's create something extraordinary
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/connect" className="btn-primary">
                Start a Project
              </a>
              <a href="mailto:dhruvpanchal.dev@gmail.com" className="btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
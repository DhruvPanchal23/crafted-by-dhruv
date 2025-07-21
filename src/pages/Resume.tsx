import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap
} from "lucide-react";

const Resume = () => {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "GraphQL"],
    tools: ["Git", "GitHub", "Figma", "Adobe Creative Suite", "VS Code", "Docker"],
    other: ["UI/UX Design", "Responsive Design", "Cybersecurity", "Network Security", "Python"]
  };

  const experience = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "Jan 2023 - Present",
      location: "Remote",
      responsibilities: [
        "Developed 10+ responsive web applications using React and Node.js",
        "Collaborated with clients to deliver custom solutions on time and within budget",
        "Implemented modern UI/UX practices resulting in 40% improved user engagement",
        "Maintained 100% client satisfaction rate through effective communication"
      ]
    },
    {
      title: "UI/UX Design Intern",
      company: "TechCorp Solutions",
      period: "Jun 2023 - Aug 2023",
      location: "Surat, India",
      responsibilities: [
        "Designed user interfaces for 3 mobile applications using Figma",
        "Conducted user research and usability testing with 50+ participants",
        "Created design systems and component libraries for consistent branding",
        "Collaborated with development team to ensure pixel-perfect implementation"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sardar Vallabhbhai National Institute of Technology",
      period: "2022 - 2026",
      location: "Surat, India",
      gpa: "8.5/10",
      relevant: ["Data Structures & Algorithms", "Database Management", "Software Engineering", "Computer Networks"]
    }
  ];

  const projects = [
    {
      name: "Personal Portfolio Website",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      description: "Modern dark glassmorphism portfolio with smooth animations and responsive design"
    },
    {
      name: "Hospital Management System",
      tech: ["HTML", "JavaScript", "MySQL", "PHP"],
      description: "Complete hospital management solution with patient records and appointment scheduling"
    },
    {
      name: "ARP Spoofing Detector",
      tech: ["Python", "Scapy", "Tkinter"],
      description: "Network security tool to detect and prevent ARP spoofing attacks in real-time"
    }
  ];

  const achievements = [
    "100% client satisfaction rate in freelance projects",
    "Led team of 4 developers in college hackathon",
    "Contributed to 5+ open source projects on GitHub",
    "Speaker at college tech symposium on 'Web Security'"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h1>
          <Button variant="hero" size="lg">
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Contact Info */}
        <div className="glass-card p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Dhruv Panchal</h2>
            <p className="text-xl text-muted-foreground">Full Stack Developer & UI/UX Designer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Surat, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">dhruvpanchal.dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-primary" />
              <span className="text-sm">linkedin.com/in/dhruv-panchal</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-primary" />
              <span className="text-sm">github.com/dhruvpanchal</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-3 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </p>
                    <p className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-sm">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-6">
              <div className="flex flex-wrap items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </p>
                  <p className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {edu.relevant.map((course) => (
                  <Badge key={course} variant="outline" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Key Projects</h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
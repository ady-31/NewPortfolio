import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "He Is Capturing - Photography Portfolio",
      description: "A stunning photography portfolio website showcasing creative work with an elegant, responsive design and smooth user experience.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
      period: "2024",
      liveUrl: "https://he-is-capturing.netlify.app/",
      githubUrl: "https://github.com/ady-31/he_is_capturing-site"
    },
    {
      title: "Real-Time Chat Application",
      description: "Built a real-time messaging platform with JWT authentication, supporting both private and group chats with instant communication.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "React.js", "Socket.IO", "MongoDB", "JWT"],
      period: "Jan 2024 - Feb 2024"
    },
    {
      title: "Text Summarization Model",
      description: "Developed a Flask API leveraging machine learning to generate concise text summaries with optimized performance and Redux state management.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Flask", "Machine Learning", "Redux"],
      period: "Mar 2023 - May 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground" data-testid="text-projects-subtitle">Some of my recent work and personal projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300" data-testid={`card-project-${index}`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                data-testid={`img-project-${index}`}
              />
              <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${index}`}>{project.title}</h3>
              <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                    data-testid={`badge-project-tech-${index}-${techIndex}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.liveUrl || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline text-sm font-medium"
                  data-testid={`link-project-view-${index}`}
                >
                  <ExternalLink className="w-4 h-4 inline mr-1" />
                  View Project
                </a>
                <a 
                  href={project.githubUrl || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline text-sm font-medium"
                  data-testid={`link-project-code-${index}`}
                >
                  <Github className="w-4 h-4 inline mr-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

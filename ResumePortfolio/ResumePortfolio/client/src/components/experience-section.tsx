import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "SDE Intern",
      company: "Persist Ventures Software Company",
      period: "Aug 2024 - Sep 2024",
      description: "Developed AgriConnect, a platform connecting farmers with buyers, enhancing engagement by 40% in a month. Designed a responsive UI, implemented secure authentication, and deployed a real-time crop marketplace, boosting transactions by 30%.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "Web Developer Intern",
      company: "Genesis Freelance",
      period: "May 2024 - Jun 2024",
      description: "Developed a job portal for local artisans, connecting over 200 artisans with potential clients and increasing job opportunities by 40% in three months. Built a secure backend with Express.js and MongoDB, improving listing updates by 50% and reducing response times by 30%.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-experience-title">Professional Experience</h2>
          <p className="text-xl text-muted-foreground" data-testid="text-experience-subtitle">My journey in software development</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-secondary">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="bg-card p-6 rounded-lg border border-border ml-6" data-testid={`card-experience-${index}`}>
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold" data-testid={`text-experience-title-${index}`}>{exp.title}</h3>
                    <p className="text-secondary font-medium" data-testid={`text-experience-company-${index}`}>{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="bg-muted px-3 py-1 rounded-full text-sm font-medium" data-testid={`text-experience-period-${index}`}>
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`text-experience-description-${index}`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                      data-testid={`badge-experience-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Code, Layers, Gavel, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "C", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: ["React", "Node.js", "Express.js", "TensorFlow", "Flask"]
    },
    {
      title: "Tools & Analytics",
      icon: Gavel,
      skills: ["Power BI", "Tableau", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Matplotlib"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-skills-title">Technical Skills</h2>
          <p className="text-xl text-muted-foreground" data-testid="text-skills-subtitle">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-card p-6 rounded-lg border border-border" data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <IconComponent className="w-5 h-5 mr-2 text-secondary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="skill-badge bg-muted px-3 py-1 rounded-full text-sm font-medium"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

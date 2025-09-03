import { Star, Trophy, Brain } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Star,
      title: "HackerRank 5 Stars",
      description: "Problem Solving in Python with 50+ solved challenges covering basic to advanced DSA"
    },
    {
      icon: Trophy,
      title: "Dean's Top 10%",
      description: "Recognition for excellent academic performance and extra-curricular activities at university"
    },
    {
      icon: Brain,
      title: "AI/ML Workshop",
      description: "Completed two-day intensive workshop on Artificial Intelligence and Machine Learning by IIT Roorkee"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-achievements-title">Achievements</h2>
          <p className="text-xl text-muted-foreground" data-testid="text-achievements-subtitle">Recognition and accomplishments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center bg-card p-8 rounded-lg border border-border" data-testid={`card-achievement-${index}`}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-achievement-title-${index}`}>{achievement.title}</h3>
                <p className="text-muted-foreground" data-testid={`text-achievement-description-${index}`}>{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

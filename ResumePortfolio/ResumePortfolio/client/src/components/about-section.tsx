export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-about-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-description">
            Currently pursuing B.Tech in Computer Science at Lovely Professional University. 
            I'm a passionate software engineer with hands-on experience in building scalable web applications and 
            implementing machine learning solutions. My goal is to leverage technology to solve real-world problems 
            and create meaningful impact through innovative software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

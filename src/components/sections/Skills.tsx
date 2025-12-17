const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs"],
    },
    {
      title: "Tools & More",
      skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Expertise
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group flex items-center gap-3 py-2"
                      style={{
                        animationDelay: `${(categoryIndex * 5 + skillIndex) * 50}ms`,
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

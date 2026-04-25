import Section from "./Section";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "CI/CD", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <Section id="skills" alternate>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map(({ category, skills }) => (
          <div
            key={category}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

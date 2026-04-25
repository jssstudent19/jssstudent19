import Section from "./Section";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, string> = {
  Frontend: "🖥️",
  Backend: "⚙️",
  Tools: "🔧",
  Languages: "🌐",
};

export default function SkillsSection() {
  return (
    <Section id="skills" alternate>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A curated collection of technologies I work with daily, organized by
          area of expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map(({ category, color, skills }) => (
          <div
            key={category}
            className="bg-card border border-border rounded-xl p-6 
              transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl" aria-hidden="true">
                {categoryIcons[category] || "📁"}
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {category}
              </h3>
              <div
                className={`h-1 flex-1 rounded-full bg-gradient-to-r ${color} opacity-60`}
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} gradientClass={color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

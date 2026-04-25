import type { Skill } from "@/data/skills";
import { getProficiencyDotColor, getProficiencyLabel } from "@/data/skills";

interface SkillBadgeProps {
  skill: Skill;
  gradientClass: string;
}

export default function SkillBadge({ skill, gradientClass }: SkillBadgeProps) {
  return (
    <div
      className={`group relative inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg shadow-sm 
        transition-all duration-300 ease-in-out
        hover:shadow-md hover:-translate-y-1 hover:border-transparent`}
    >
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradientClass} opacity-0 
          group-hover:opacity-10 transition-opacity duration-300`}
      />

      <span className="text-lg flex-shrink-0" aria-hidden="true">
        {skill.icon}
      </span>

      <span className="font-medium text-foreground text-sm">{skill.name}</span>

      <div className="flex items-center gap-1 ml-1" title={`Proficiency: ${getProficiencyLabel(skill.proficiency)}`}>
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-200
              ${i < getProficiencyLevel(skill.proficiency) ? getProficiencyDotColor(skill.proficiency) : "bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}

function getProficiencyLevel(proficiency: Skill["proficiency"]): number {
  const levels = { beginner: 1, intermediate: 2, advanced: 3, expert: 4 };
  return levels[proficiency];
}

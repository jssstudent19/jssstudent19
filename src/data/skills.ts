export type ProficiencyLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  name: string;
  icon: string;
  proficiency: ProficiencyLevel;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

const proficiencyOrder: Record<ProficiencyLevel, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: "⚛️", proficiency: "expert" },
      { name: "Next.js", icon: "▲", proficiency: "expert" },
      { name: "TypeScript", icon: "TS", proficiency: "advanced" },
      { name: "Tailwind CSS", icon: "🎨", proficiency: "expert" },
      { name: "HTML5", icon: "📄", proficiency: "expert" },
      { name: "CSS3", icon: "🎭", proficiency: "advanced" },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: "🟢", proficiency: "advanced" },
      { name: "Python", icon: "🐍", proficiency: "advanced" },
      { name: "PostgreSQL", icon: "🐘", proficiency: "intermediate" },
      { name: "REST APIs", icon: "🔌", proficiency: "advanced" },
      { name: "GraphQL", icon: "◈", proficiency: "intermediate" },
      { name: "MongoDB", icon: "🍃", proficiency: "intermediate" },
    ],
  },
  {
    category: "Tools",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", icon: "📦", proficiency: "expert" },
      { name: "Docker", icon: "🐳", proficiency: "intermediate" },
      { name: "CI/CD", icon: "🔄", proficiency: "advanced" },
      { name: "VS Code", icon: "💻", proficiency: "expert" },
      { name: "Webpack", icon: "📦", proficiency: "intermediate" },
      { name: "Jest", icon: "🃏", proficiency: "advanced" },
    ],
  },
  {
    category: "Languages",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "JavaScript", icon: "JS", proficiency: "expert" },
      { name: "TypeScript", icon: "TS", proficiency: "advanced" },
      { name: "Python", icon: "🐍", proficiency: "advanced" },
      { name: "SQL", icon: "🗃️", proficiency: "intermediate" },
      { name: "Rust", icon: "🦀", proficiency: "beginner" },
    ],
  },
];

export function getProficiencyColor(proficiency: ProficiencyLevel): string {
  const colors: Record<ProficiencyLevel, string> = {
    beginner: "bg-gray-200 dark:bg-gray-700",
    intermediate: "bg-blue-200 dark:bg-blue-900",
    advanced: "bg-green-200 dark:bg-green-900",
    expert: "bg-amber-200 dark:bg-amber-900",
  };
  return colors[proficiency];
}

export function getProficiencyDotColor(proficiency: ProficiencyLevel): string {
  const colors: Record<ProficiencyLevel, string> = {
    beginner: "bg-gray-400",
    intermediate: "bg-blue-500",
    advanced: "bg-green-500",
    expert: "bg-amber-500",
  };
  return colors[proficiency];
}

export function getProficiencyLabel(proficiency: ProficiencyLevel): string {
  return proficiency.charAt(0).toUpperCase() + proficiency.slice(1);
}

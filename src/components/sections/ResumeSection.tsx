import Link from "next/link";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  period: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Led the frontend architecture for a SaaS platform serving 50K+ users. Implemented performance optimizations that reduced load times by 40%. Mentored junior developers and established coding standards.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple web applications from concept to deployment. Developed RESTful APIs and integrated third-party services. Collaborated with design team to implement responsive UI components.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Junior Web Developer",
    company: "Digital Agency Co.",
    period: "2018 - 2020",
    description:
      "Developed responsive websites and web applications for diverse clients. Converted design mockups into pixel-perfect code. Improved site accessibility scores to meet WCAG 2.1 AA standards.",
    technologies: ["JavaScript", "HTML/CSS", "WordPress", "PHP"],
  },
];

const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2014 - 2018",
    description:
      "Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Software Engineering, Database Systems.",
  },
];

const certifications: Certification[] = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    period: "2023",
  },
  {
    name: "Meta Frontend Developer Certificate",
    issuer: "Meta (Coursera)",
    period: "2022",
  },
];

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags?: string[];
}

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  tags,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-primary font-medium">{subtitle}</p>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {period}
        </span>
      </div>
      <p className="text-muted-foreground mb-3">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ResumeSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-foreground">Resume</h2>
        <Link
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download PDF
        </Link>
      </div>

      <section className="mb-10">
        <h3 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
          Work Experience
        </h3>
        <div className="ml-2">
          {experiences.map((exp) => (
            <TimelineItem
              key={exp.title + exp.company}
              title={exp.title}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
              tags={exp.technologies}
            />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
          Education
        </h3>
        <div className="ml-2">
          {education.map((edu) => (
            <TimelineItem
              key={edu.degree + edu.institution}
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
              description={edu.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
          Certifications
        </h3>
        <div className="ml-2">
          {certifications.map((cert) => (
            <TimelineItem
              key={cert.name}
              title={cert.name}
              subtitle={cert.issuer}
              period={cert.period}
              description=""
            />
          ))}
        </div>
      </section>
    </div>
  );
}

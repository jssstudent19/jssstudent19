"use client";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground text-sm font-medium">
            {project.title}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-3 border-t border-border">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 text-sm font-medium text-foreground bg-muted rounded-lg hover:bg-muted/80 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

"use client";

import { useState, useMemo } from "react";
import { projects, categories, allTechStacks } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Section from "./Section";

type FilterMode = "category" | "tech";

export default function ProjectsSection() {
  const [filterMode, setFilterMode] = useState<FilterMode>("category");
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = useMemo(() => {
    if (filterMode === "category") {
      return ["All", ...categories];
    }
    return ["All", ...allTechStacks];
  }, [filterMode]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    if (filterMode === "category") {
      return projects.filter((p) => p.category === activeFilter);
    }
    return projects.filter((p) => p.techStack.includes(activeFilter));
  }, [activeFilter, filterMode]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleModeChange = (mode: FilterMode) => {
    setFilterMode(mode);
    setActiveFilter("All");
  };

  return (
    <Section id="projects">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work, from web applications to developer
          tools.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleModeChange("category")}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                filterMode === "category"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              By Category
            </button>
            <button
              type="button"
              onClick={() => handleModeChange("tech")}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                filterMode === "tech"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              By Technology
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No projects found matching this filter.
          </p>
        </div>
      )}
    </Section>
  );
}

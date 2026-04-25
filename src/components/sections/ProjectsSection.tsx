import Section from "./Section";

const placeholderProjects = [
  { title: "Project One", description: "A web application built with modern technologies." },
  { title: "Project Two", description: "An innovative solution to a common problem." },
  { title: "Project Three", description: "A full-stack application with real-time features." },
];

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderProjects.map((project) => (
          <div
            key={project.title}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Image</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

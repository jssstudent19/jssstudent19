export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and Stripe payment integration.",
    image: "/images/projects/ecommerce.jpg",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    category: "Frontend",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "project-2",
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging application with WebSocket support, private and group channels, message history, and file sharing.",
    image: "/images/projects/chat.jpg",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "Full Stack",
    liveUrl: "https://example.com/chat",
    githubUrl: "https://github.com/example/chat",
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experience with dark mode support and smooth animations.",
    image: "/images/projects/portfolio.jpg",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: "Frontend",
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/example/portfolio",
  },
  {
    id: "project-4",
    title: "Task Management API",
    description:
      "A RESTful API for task management with user roles, project organization, deadline tracking, and email notifications.",
    image: "/images/projects/task-api.jpg",
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT", "Nodemailer"],
    category: "Backend",
    liveUrl: "https://api.example.com/tasks",
    githubUrl: "https://github.com/example/task-api",
  },
  {
    id: "project-5",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard displaying current conditions and forecasts with location-based search and animated weather icons.",
    image: "/images/projects/weather.jpg",
    techStack: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    category: "Frontend",
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/example/weather",
  },
  {
    id: "project-6",
    title: "CI/CD Pipeline Tool",
    description:
      "A deployment automation tool that streamlines build, test, and deployment workflows with support for multiple environments.",
    image: "/images/projects/cicd.jpg",
    techStack: ["Go", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    category: "DevOps",
    liveUrl: "https://example.com/cicd",
    githubUrl: "https://github.com/example/cicd",
  },
];

export const categories = Array.from(
  new Set(projects.map((p) => p.category)),
);

export const allTechStacks = Array.from(
  new Set(projects.flatMap((p) => p.techStack)),
).sort();

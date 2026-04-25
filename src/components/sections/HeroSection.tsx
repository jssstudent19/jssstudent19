import Section from "./Section";

export default function HeroSection() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Hello, I am{" "}
            <span className="text-primary">Your Name</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            A developer passionate about building beautiful, performant, and
            accessible web experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-colors hover:bg-muted"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Photo</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

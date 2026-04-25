export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
          I am a developer passionate about building beautiful, performant, and
          accessible web experiences. Explore my projects, skills, and get in
          touch.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
      </main>
    </div>
  );
}

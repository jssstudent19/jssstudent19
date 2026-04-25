import Section from "./Section";

export default function AboutSection() {
  return (
    <Section id="about" alternate>
      <h2 className="animate-fade-in text-3xl sm:text-4xl font-bold text-foreground mb-8">
        About Me
      </h2>
      <div className="animate-slide-up flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <div className="w-40 h-40 rounded-lg bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Image</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-muted-foreground leading-relaxed">
            I am a software developer with experience in building modern web
            applications. I specialize in frontend development with React and
            Next.js, and I have a strong foundation in backend technologies.
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-primary">&#10003;</span> Frontend Development
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">&#10003;</span> Backend Development
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">&#10003;</span> UI/UX Design
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

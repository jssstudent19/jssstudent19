"use client";

import Section from "./Section";

export default function ContactSection() {
  return (
    <Section id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-muted-foreground mb-6">
            Have a question or want to work together? Fill out the form below
            and I will get back to you as soon as possible.
          </p>
          <div className="space-y-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="block text-primary hover:underline"
            >
              hello@example.com
            </a>
          </div>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted (placeholder)");
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-colors hover:bg-primary/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}

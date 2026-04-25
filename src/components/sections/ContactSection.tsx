"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Section from "./Section";

interface FormField {
  value: string;
  error: string;
  touched: boolean;
}

interface ContactForm {
  name: FormField;
  email: FormField;
  subject: FormField;
  message: FormField;
}

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

const initialForm: ContactForm = {
  name: { value: "", error: "", touched: false },
  email: { value: "", error: "", touched: false },
  subject: { value: "", error: "", touched: false },
  message: { value: "", error: "", touched: false },
};

function validateField(name: string, value: string): string {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      return "";
    case "email":
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
      return "";
    case "subject":
      if (!value.trim()) return "Subject is required";
      if (value.trim().length < 3) return "Subject must be at least 3 characters";
      return "";
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10) return "Message must be at least 10 characters";
      return "";
    default:
      return "";
  }
}

function validateAll(form: ContactForm): ContactForm {
  const updated = { ...form };
  (Object.keys(form) as (keyof ContactForm)[]).forEach((key) => {
    updated[key] = {
      ...form[key],
      error: validateField(key, form[key].value),
      touched: true,
    };
  });
  return updated;
}

function hasErrors(form: ContactForm): boolean {
  return Object.values(form).some((field) => field.error !== "");
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof ContactForm],
        value,
        error: prev[name as keyof ContactForm].touched ? validateField(name, value) : "",
      },
    }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof ContactForm],
        touched: true,
        error: validateField(name, value),
      },
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validated = validateAll(form);
    setForm(validated);
    if (hasErrors(validated)) return;

    setStatus("submitting");

    // TODO: Connect to email service (e.g., EmailJS, Resend, Nodemailer, or custom API endpoint)
    // Example integration:
    //   const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ ... }) });
    //   if (!res.ok) throw new Error('Failed to send message');
    try {
      console.log("Form submitted:", {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setStatus("idle");
  };

  const isFieldError = (field: FormField) => field.touched && field.error !== "";

  const renderField = (name: keyof ContactForm, label: string, type: string = "text", rows?: number) => {
    const field = form[name];
    const error = isFieldError(field);
    const inputClasses = [
      "w-full px-4 py-2 border rounded-lg bg-background text-foreground",
      "focus:outline-none focus:ring-2 transition-all",
      error
        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
        : "border-border focus:ring-primary focus:border-primary",
    ].join(" ");

    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1">
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            value={field.value}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={rows || 4}
            className={inputClasses}
            aria-invalid={error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={field.value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses}
            aria-invalid={error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        )}
        {error && (
          <p id={`${name}-error`} className="mt-1 text-sm text-red-500" role="alert">
            {field.error}
          </p>
        )}
      </div>
    );
  };

  return (
    <Section id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
        Get In Touch
      </h2>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-700 dark:text-green-300 font-medium">
            Message sent successfully! I will get back to you soon.
          </p>
          <button
            onClick={handleReset}
            className="mt-2 text-sm text-green-600 dark:text-green-400 hover:underline"
          >
            Send another message
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-700 dark:text-red-300 font-medium">
            Something went wrong. Please try again.
          </p>
          <button
            onClick={handleReset}
            className="mt-2 text-sm text-red-600 dark:text-red-400 hover:underline"
          >
            Try again
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <p className="text-muted-foreground mb-6">
            Have a question or want to work together? Fill out the form and I
            will get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Connect with me
            </h3>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary hover:bg-muted transition-all group"
            >
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 1.749-.654A6.455 6.455 0 0112 6.782c.695.002 1.396.094 2.054.276.908-.385 1.748-.654 1.748-.654.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-primary group-hover:text-foreground transition-colors font-medium">GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary hover:bg-muted transition-all group"
            >
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-primary group-hover:text-foreground transition-colors font-medium">LinkedIn</span>
            </a>

            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary hover:bg-muted transition-all group"
            >
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-primary group-hover:text-foreground transition-colors font-medium">hello@example.com</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 space-y-4"
        >
          {renderField("name", "Name")}
          {renderField("email", "Email", "email")}
          {renderField("subject", "Subject")}
          {renderField("message", "Message", "textarea", 5)}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

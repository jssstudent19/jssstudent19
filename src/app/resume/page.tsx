import type { Metadata } from "next";
import ResumeSection from "@/components/sections/ResumeSection";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume with work experience, education, and certifications.",
};

export default function ResumePage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <ResumeSection />
    </div>
  );
}

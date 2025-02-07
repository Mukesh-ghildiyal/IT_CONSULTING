"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Techsectra is an IT consulting firm focused on providing businesses with tailored technology solutions and highly skilled IT professionals. We work with clients to scale their teams, navigate complex IT challenges, and deliver high-impact solutions—all with an emphasis on hands-on, proactive support through our Concierge Tech Service.
`;

export default function About() {
  return (
    <div className="max-w-5xl mx-auto text-center space-y-6">
      <h2 className="text-4xl font-bold text-white p-3">About Us</h2>
      <TextGenerateEffect words={words} />
    </div>
  );
}

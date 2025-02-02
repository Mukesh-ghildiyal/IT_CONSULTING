import React from "react";
import {
  ShieldCheck,
  Lightbulb,
  Check,
  Code,
  Server,
  Cloud,
  ArrowRight,
  Shield,
  Cpu,
} from "lucide-react";
import { LampDemo } from "./ui/lamp";

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-950 to-neutral-900 py-32 overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_10%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-6 py-2 text-base font-medium text-primary-500">
            How It Works
          </span>
          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our Process for IT Success
            <span className="block text-primary-500">
              Crafting a Tailored IT Roadmap
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-400">
            Our expert consultants analyze your requirements and create a
            customized IT strategy. This includes: 🔹 Identifying the best
            technologies for your business 🔹 Defining a roadmap for seamless
            implementation 🔹 Ensuring cost-effective and scalable solutions
          </p>
        </div>

        {/* Feature Sections */}
        <div className="mt-24 space-y-24">
          {/* Section 1 */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-primary-500">
                <span className="text-sm font-semibold">
                  🚀 Ready to Transform Your Business?
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Connect Like You are In The Same Room
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-neutral-400">
                  We start by understanding your business challenges and goals.
                  In this free consultation, we discuss:
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Your current IT infrastructure",
                  " Pain points and inefficiencies",
                  "Your short-term and long-term business objectives",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-neutral-300"
                  >
                    <div className="mr-3 rounded-full bg-primary-500/20 p-1">
                      <Check className="h-4 w-4 text-primary-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-primary-500/50">
                <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-3xl group-hover:bg-primary-500/20" />
                <LampDemo />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-6 lg:grid-cols-2">
                {[
                  {
                    icon: <ShieldCheck className="h-6 w-6" />,
                    title: "Cybersecurity Solutions",
                    description:
                      "Ensuring data protection and regulatory compliance.",
                  },
                  {
                    icon: <Code className="h-6 w-6" />,
                    title: "Custom Software Development",
                    description:
                      "Building tailored applications to meet business needs.",
                  },
                  {
                    icon: <Server className="h-6 w-6" />,
                    title: "Infrastructure Optimization",
                    description:
                      "Enhancing performance, reliability, and cost-efficiency.",
                  },
                  {
                    icon: <Cloud className="h-6 w-6" />,
                    title: "Cloud Integration",
                    description:
                      "Seamless migration and management of cloud solutions.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-primary-500/50"
                  >
                    <div className="mb-4 inline-block rounded-lg bg-primary-500/10 p-2 text-primary-500">
                      {feature.icon}
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-primary-500">
                <Lightbulb className="mr-2 h-5 w-5" />
                <span className="text-sm font-semibold">
                  Innovative IT Solutions
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Scalable and Secure IT Strategies
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-neutral-400">
                  Our tailored solutions ensure a seamless digital
                  transformation that aligns with your business objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges Section */}
          {/* Challenges Section */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-12">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white">
                Solving IT Challenges for Businesses
              </h3>
              <p className="mt-4 text-xl text-neutral-400">
                Overcome technology hurdles with expert IT solutions.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Shield />,
                  title: "Cybersecurity Protection",
                  description:
                    "Safeguard your business with advanced security measures, risk assessments, and threat mitigation.",
                },
                {
                  icon: <Cloud />,
                  title: "Cloud & Infrastructure",
                  description:
                    "Optimize your IT infrastructure with scalable cloud solutions and seamless migrations.",
                },
                {
                  icon: <Cpu />,
                  title: "IT Strategy & Consulting",
                  description:
                    "Align your technology roadmap with business goals through expert IT consulting and digital transformation strategies.",
                },
              ].map((challenge, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl border border-neutral-800 bg-neutral-900/80 p-8 transition-all hover:border-primary-500/50"
                >
                  <div className="mb-6 inline-block rounded-lg bg-primary-500/10 p-3 text-primary-500">
                    {challenge.icon}
                  </div>
                  <h4 className="mb-4 text-xl font-bold text-white">
                    {challenge.title}
                  </h4>
                  <p className="text-neutral-400">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-primary-400"
            >
              Get a Free IT Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

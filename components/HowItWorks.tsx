"use client";
import React from "react";
import {
  ShieldCheck,
  Lightbulb,
  Check,
  Code,
  Server,
  Cloud,
  Shield,
  Cpu,
} from "lucide-react";
import { LampDemo } from "./ui/lamp";
import { motion } from "framer-motion";

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-950 to-neutral-900 py-32 overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_10%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-6 py-2 text-base font-medium text-primary-500"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Our Process for IT Success
            <span className="block text-blue-500">
              Crafting a Tailored IT Roadmap
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-xl text-neutral-400"
          >
            🔹 Consultation 🔹 Talent Matching 🔹 Seamless Integration 🔹
            Ongoing Support And Organization
          </motion.p>
        </motion.div>

        {/* Feature Sections */}
        <div className="mt-24 space-y-24">
          {/* Section 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-blue-500">
                <span className="text-sm font-semibold">
                  🚀 Ready to Transform Your Business?
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Industries We Serve.
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-neutral-400">
                  We start by understanding your business challenges and goals.
                  In this free consultation, we discuss:
                </p>
              </div>
              <ul className="space-y-4">
                {["Fintech", "Healthcare", "E-commerce", "Cloud & Devops"].map(
                  (feature) => (
                    <motion.li
                      key={feature}
                      variants={fadeInUp}
                      className="flex items-center text-neutral-300"
                    >
                      <div className="mr-3 rounded-full bg-primary-500/20 p-1">
                        <Check className="h-4 w-4 text-blue-500" />
                      </div>
                      {feature}
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-primary-500/50">
                <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-primary-500/10 blur-3xl group-hover:bg-primary-500/20" />
                <LampDemo />
              </div>
            </motion.div>
          </motion.div>
          zz
          {/* Section 2 */}
          {/* Section 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            {/* Section Heading */}
            <motion.h2
              variants={fadeInUp}
              className="col-span-2 text-center text-4xl font-bold text-blue-500"
            >
              Why Choose Techsectra?
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="order-2 lg:order-1 space-y-8"
            >
              <div className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-blue-500">
                <Lightbulb className="mr-2 h-5 w-5" />
                <span className="text-sm font-semibold">
                  Innovative IT Solutions
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-500">
                  What Sets Techsectra Apart?
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-white">
                  Our tailored solutions ensure a seamless digital
                  transformation that aligns with your business objectives.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="order-1 lg:order-2 grid gap-6 lg:grid-cols-2"
            >
              {[
                {
                  icon: <ShieldCheck className="h-6 w-6" />,
                  title: "Concierge Tech Support",
                  description:
                    "Every client receives a dedicated tech lead who monitors the performance of your resources, ensuring that challenges are addressed proactively and that your team consistently delivers excellence.",
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: "Quality Talent",
                  description:
                    "We pride ourselves on providing top-tier professionals. Our rigorous vetting process ensures that only the best and brightest make it onto your team.",
                },
                {
                  icon: <Server className="h-6 w-6" />,
                  title: "Agility & Flexibility",
                  description:
                    "Whether you need a single developer or an entire team, our flexible engagement models allow you to scale your resources to fit your needs.",
                },
                {
                  icon: <Cloud className="h-6 w-6" />,
                  title: "Fast & Efficient Onboarding",
                  description:
                    "We understand that time is money. Our streamlined process ensures that you get the talent you need quickly, without compromising on quality.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative rounded-xl border border-neutral-300 bg-white p-6 shadow-lg transition-all hover:border-blue-500/50"
                >
                  <div className="mb-4 inline-block rounded-lg bg-primary-500/10 p-2 text-blue-500">
                    {feature.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-black">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-neutral-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* Challenges Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-12"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white">Our Services</h3>
              <p className="mt-4 text-xl text-neutral-400">
                Overcome technology hurdles with expert IT solutions.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <Shield />,
                  title: "On Demand Talent",
                  description:
                    "Need skilled professionals for short-term projects? Our pool of pre-vetted experts can help with a wide range of technologies and domains, from software development to cloud architecture. Whether you need one developer or an entire team, we have you covered.",
                },
                {
                  icon: <Cloud />,
                  title: "Dedicated Team",
                  description:
                    "We provide long-term, integrated teams that become a part of your company. These teams work within your existing processes, ensuring smooth collaboration and the flexibility to scale as needed. With our concierge tech lead, your team is continuously supported and optimized for success.",
                },
                {
                  icon: <Cpu />,
                  title: "IT Consulting",
                  description:
                    "Our experts advise businesses on how to align technology with their strategic goals. We guide you through digital transformation, system integration, software architecture, and cloud adoption.",
                },
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative rounded-xl border border-neutral-800 bg-neutral-900/80 p-8 transition-all hover:border-blue-500/50"
                >
                  <div className="mb-6 inline-block rounded-lg bg-primary-500/10 p-3 text-blue-500">
                    {challenge.icon}
                  </div>
                  <h4 className="mb-4 text-xl font-bold text-white">
                    {challenge.title}
                  </h4>
                  <p className="text-neutral-400">{challenge.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

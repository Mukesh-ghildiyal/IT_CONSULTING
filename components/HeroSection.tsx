"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Code,
  ShieldCheck,
  Cloud,
  MonitorSmartphone,
  Globe2,
  Database,
  Cpu,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your business data.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Computing",
    description: "Scalable cloud solutions for seamless business operations.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Management",
    description:
      "Optimized data storage and analytics for business intelligence.",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "IT Infrastructure",
    description: "Robust IT infrastructure planning and deployment.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI & Automation",
    description: "Innovative AI solutions to automate business processes.",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Networking Solutions",
    description: "Reliable networking solutions for seamless connectivity.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "IT Strategy Consulting",
    description: "Expert guidance to align IT strategies with business goals.",
  },
];

export default function HeroSection() {
  return (
    <div className="relative min-h-screen -mt-32 bg-gradient-to-b from-neutral-900 to-neutral-800 pt-[92px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 md:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm text-neutral-400">
              Innovative IT Consulting for Business Growth
            </span>
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 text-5xl font-extrabold tracking-wider text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text md:text-6xl lg:text-7xl"
          >
            "Techsectra:Your
            <br />
            <span className="text-white"> Partner in IT Excellence "</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400"
          >
            At Techsectra, we bridge the gap between business needs and
            cutting-edge technology. Our concierge service, powered by dedicated
            tech leads, sets us apart—ensuring seamless integration, continuous
            support, and optimized performance of your IT resources.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="/setup"
              className="group flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-primary-400"
            >
              Try For Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/our-work"
              className="group flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-neutral-700"
            >
              Our Work
              <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          </motion.div>
          <motion.div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-primary-500"
              >
                <div className="mb-4 inline-block rounded-lg bg-primary-500/10 p-2 text-blue-500">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

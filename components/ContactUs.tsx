"use client";
import React, { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
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

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.id.replace("contact-", "")]: e.target.value,
    });
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            {"Let's Connect"}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-neutral-400"
          >
            Transform your Business
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2"
        >
          {/* Contact Information Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {[
              {
                icon: <Phone className="h-6 w-6 text-yellow-400" />,
                title: "24/7 Support",
                content: (
                  <a
                    href="tel:+919487245606"
                    className="mt-1 text-neutral-300 hover:text-yellow-400"
                  >
                    +91 9487245606
                  </a>
                ),
              },
              {
                icon: <Mail className="h-6 w-6 text-yellow-400" />,
                title: "Email Us",
                content: (
                  <a
                    href="mailto:muku7354@gmail.com"
                    className="mt-1 text-neutral-300 hover:text-yellow-400"
                  >
                    muku@gmail.com
                  </a>
                ),
              },
              {
                icon: <MapPin className="h-6 w-6 text-yellow-400" />,
                title: "VirtualSync",
                content: (
                  <p className="mt-1 text-neutral-300">
                    RT Nagar, Uttarakhand, 244715
                    <br />
                    India
                  </p>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-neutral-800/30 p-6 transition-all duration-300 hover:bg-neutral-800/40"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media Links */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl bg-neutral-800/30 p-6"
            >
              <h3 className="mb-4 font-semibold text-white">
                Follow Our Journey
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Twitter className="h-5 w-5 text-neutral-400" />,
                    href: "",
                  },
                  {
                    icon: <Linkedin className="h-5 w-5 text-neutral-400" />,
                    href: "",
                  },
                  {
                    icon: <Github className="h-5 w-5 text-neutral-400" />,
                    href: "",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/50 transition-all hover:bg-yellow-400/20"
                  >
                    {React.cloneElement(social.icon, {
                      className:
                        "h-5 w-5 text-neutral-400 transition-colors group-hover:text-yellow-400",
                    })}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-2xl bg-neutral-800/30 p-8"
          >
            <form className="space-y-6" onSubmit={formSubmit}>
              <div className="space-y-4">
                {[
                  {
                    id: "contact-name",
                    label: "Your Name",
                    type: "text",
                    value: formState.name,
                  },
                  {
                    id: "contact-email",
                    label: "Business Email",
                    type: "email",
                    value: formState.email,
                  },
                  {
                    id: "contact-company",
                    label: "Company Name",
                    type: "text",
                    value: formState.company,
                  },
                  {
                    id: "contact-size",
                    label: "Company Size",
                    type: "text",
                    value: formState.size,
                  },
                ].map((field, index) => (
                  <div key={index} className="relative">
                    <input
                      type={field.type}
                      id={field.id}
                      value={field.value}
                      onChange={handleChange}
                      className="peer w-full rounded-lg border-transparent bg-neutral-800/60 p-4 text-sm text-white placeholder-transparent backdrop-blur-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                      placeholder={field.label}
                    />
                    <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                      {field.label}
                    </label>
                  </div>
                ))}

                <div className="relative">
                  <textarea
                    id="contact-message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="peer w-full rounded-lg border-transparent bg-neutral-800/60 p-4 text-sm text-white placeholder-transparent backdrop-blur-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="Message"
                  ></textarea>
                  <label className="pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm text-neutral-400 transition duration-200 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-yellow-400 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-yellow-400">
                    Tell us about your IT needs
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Get Started Now
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

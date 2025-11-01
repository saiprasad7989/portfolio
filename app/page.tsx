"use client";

import { motion } from "framer-motion";
import { Mail, Github, Phone, ArrowUpRight, Download } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const projects = [
  {
    title: "AI-Powered B2B SaaS Platform",
    description:
      "Built intelligent document processing with GPT-4o and Claude APIs, conducting 40+ customer interviews and managing full product lifecycle.",
    tags: ["Product", "LLM", "NextJS"],
    link: "#",
  },
  {
    title: "Design System & Component Library",
    description:
      "Created design system with 60+ accessible components adopted by 3 product teams, reducing development time significantly.",
    tags: ["Frontend", "Design"],
    link: "https://design-system-pi-eight.vercel.app",
  },
  {
    title: "Custom LLM Fine-Tuning Pipeline",
    description:
      "Built end-to-end fine-tuning pipeline achieving 40% improvement in accuracy and 60% reduction in hallucinations.",
    tags: ["ML", "LLM"],
    link: "/blog/llm-fine-tuning",
  },
];

const skills = [
  "Product Strategy",
  "User Research",
  "React/NextJS",
  "TypeScript",
  "LLM Integration",
  "Design Systems",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-[680px] px-5 pt-16 sm:px-6 md:px-8 md:pt-24">
        <motion.header
          className="mb-12 md:mb-16"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <motion.div
            className="mb-5 flex items-start justify-between gap-3 md:mb-6 md:gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.05,
            }}
          >
            <h1 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground sm:text-[32px]">
              BTN Sai Prasad
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: 0.15,
              }}
              className="mt-1"
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>
          <motion.p
            className="mb-6 text-[15px] leading-[1.7] text-gray md:mb-8"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.1,
            }}
          >
            Product professional building B2B SaaS MVPs. Expertise in product
            strategy, user research, and technical execution with React/NextJS
            and LLM integration.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.15,
            }}
          >
            <motion.a
              href="mailto:saiprasad7989@gmail.com"
              className="flex items-center gap-1.5 text-[13px] text-gray-light transition-colors duration-200 hover:text-foreground md:text-[14px]"
              whileHover={{ x: 2, color: "var(--foreground)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Email</span>
            </motion.a>
            <span className="h-1 w-1 rounded-full bg-border" />
            <motion.a
              href="https://github.com/saiprasad7989"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-gray-light transition-colors duration-200 hover:text-foreground md:text-[14px]"
              whileHover={{ x: 2, color: "var(--foreground)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </motion.a>
            <span className="h-1 w-1 rounded-full bg-border" />
            <motion.a
              href="tel:+917989299237"
              className="flex items-center gap-1.5 text-[13px] text-gray-light transition-colors duration-200 hover:text-foreground md:text-[14px]"
              whileHover={{ x: 2, color: "var(--foreground)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+91 798 929 9237</span>
              <span className="sm:hidden">Phone</span>
            </motion.a>
            <span className="h-1 w-1 rounded-full bg-border" />
            <motion.a
              href="/resume.md"
              download="BTN_Sai_Prasad_Resume.md"
              className="flex items-center gap-1.5 text-[13px] text-gray-light transition-colors duration-200 hover:text-foreground md:text-[14px]"
              whileHover={{ x: 2, color: "var(--foreground)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </motion.a>
          </motion.div>
        </motion.header>

        <motion.section
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <motion.h2
            className="mb-6 text-[13px] font-medium uppercase tracking-[0.02em] text-gray-light md:mb-8"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            Experience
          </motion.h2>
          <div>
            <div className="mb-3 flex flex-col gap-1.5 sm:mb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-[15px] font-medium leading-[1.4] text-foreground md:text-[16px]">
                Co-Founder & Product Lead
              </h3>
              <span className="text-[12px] tabular-nums text-gray-light md:text-[13px]">
                2023 — Present
              </span>
            </div>
            <p className="mb-5 text-[14px] text-gray md:mb-6">
              BuzzX · MVP Agency
            </p>
            <ul className="space-y-3 text-[14px] leading-[1.7] text-gray md:space-y-4 md:text-[15px]">
              <li className="pl-5 before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                Led product strategy for 15+ SaaS MVPs with 150+ user interviews
              </li>
              <li className="pl-5 before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                Architected React/NextJS applications with 95+ Lighthouse scores
              </li>
              <li className="pl-5 before:absolute before:-ml-5 before:content-['—'] before:text-gray-light">
                Pioneered LLM-powered features using GPT-4o and Claude
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="mb-12 md:mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            variants={item}
            className="mb-6 text-[13px] font-medium uppercase tracking-[0.02em] text-gray-light md:mb-8"
          >
            Projects
          </motion.h2>
          <div className="space-y-3 md:space-y-4">
            {projects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <motion.a
                  href={project.link}
                  className="group block rounded-lg border border-border bg-secondary/50 p-5 backdrop-blur-sm transition-all duration-200 hover:border-gray-light hover:bg-secondary/80 md:rounded-xl md:p-6"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                  }}
                  whileTap={{ scale: 0.995 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <div className="mb-3 flex items-start justify-between gap-2 md:mb-4">
                    <h3 className="text-[15px] font-medium leading-[1.4] text-foreground md:text-[16px]">
                      {project.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      whileHover={{
                        opacity: 1,
                        x: 2,
                        y: -2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                    >
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-light transition-colors duration-200 group-hover:text-foreground" />
                    </motion.div>
                  </div>
                  <p className="mb-3 text-[14px] leading-[1.7] text-gray md:mb-4 md:text-[15px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={tag}
                        className="rounded-md bg-background px-2.5 py-1 text-[12px] font-medium text-gray transition-colors duration-200 group-hover:text-foreground md:px-3 md:py-1.5 md:text-[13px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <motion.h2
            className="mb-6 text-[13px] font-medium uppercase tracking-[0.02em] text-gray-light md:mb-8"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            Skills
          </motion.h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {skills.map((skill, idx) => (
              <motion.span
                key={skill}
                className="rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-[13px] font-medium text-gray backdrop-blur-sm transition-all duration-200 hover:border-gray-light hover:bg-secondary/80 hover:text-foreground md:px-4 md:py-2 md:text-[14px]"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  delay: idx * 0.03,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 500, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <motion.h2
            className="mb-6 text-[13px] font-medium uppercase tracking-[0.02em] text-gray-light md:mb-8"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            Education
          </motion.h2>
          <div>
            <h3 className="mb-2 text-[15px] font-medium leading-[1.4] text-foreground md:mb-3 md:text-[16px]">
              Bachelor of Technology — Data Science
            </h3>
            <p className="mb-1.5 text-[14px] text-gray md:mb-2">
              Sreyas Institute of Engineering & Technology
            </p>
            <p className="text-[12px] tabular-nums text-gray-light md:text-[13px]">
              2020 — 2024
            </p>
          </div>
        </motion.section>

        <motion.footer
          className="border-t border-border pb-8 pt-6 md:pb-10 md:pt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <p className="text-[12px] text-gray-light md:text-[13px]">
            © {new Date().getFullYear()} BTN Sai Prasad. All rights reserved.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}

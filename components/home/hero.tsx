"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";
import { StarHeader } from "@/components/shared/star-header";

const displayedRoles = [
  "Computer Engineer",
  "Software Developer",
  "Systems Engineer",
  "Full/MERN Stack Engineer",
  "GenAI",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 40]);
  const y2 = useTransform(scrollY, [0, 800], [0, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % displayedRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StarHeader>
      {/* <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-12"> */}
      <section className="relative flex min-h-screen items-center justify-center py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:gap-12 xl:grid-cols-[1fr_440px]"> */}

          <div className="flex justify-center">

            {/* <motion.div className="flex flex-col justify-center space-y-5" style={{ y: y1 }}> */}
            <motion.div
              className="flex max-w-4xl flex-col items-center justify-center space-y-6 text-center"
              style={{ y: y1 }}
            >


              {/* Greeting badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Available for Tech. roles
                </span> */}

               <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_12px_3px_rgba(129,140,248,0.85)]" />
                  Open for Tech. roles
                </span>





              </motion.div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  Hi, I&apos;m Amit Mandal
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="h-12"
                >
                  <div className="relative flex h-full items-center justify-center overflow-hidden">
                    {displayedRoles.map((role, index) => (
                      <div
                        key={role}
                        className={`absolute transform transition-all duration-500 ${
                          index === currentRoleIndex
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                      >
                        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{role}</h2>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  // className="max-w-150 text-muted-foreground md:text-xl"

                  className="max-w-2xl text-muted-foreground md:text-xl"
                >
                  M.Tech. CS student from NIT Durgapur with a passion for Programming,
                  Full-Stack development, Machine learning & AI. I build scalable systems
                  with a strong focus on reliability, efficiency and real world impact.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                // className="flex flex-wrap gap-3"
                className="flex flex-wrap justify-center gap-3"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="/RESUME_Am.pdf"
                    download="Amit_Mandal_RESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                // className="flex gap-3 pt-2"

                className="flex justify-center gap-3 pt-2"
              >
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.id}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full bg-muted/50 hover:bg-primary/10"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {getIconComponent(social.icon)}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side — stats card */}
            {/* <motion.div
              className="flex items-center justify-center"
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-full max-w-sm space-y-4">
               
                <div className="rounded-2xl border bg-card/60 p-6 shadow-xl backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-2xl font-bold text-primary">
                      AM
                    </div>
                    <div>
                      <p className="font-semibold">Amit Mandal</p>
                      <p className="text-sm text-muted-foreground">NIT Durgapur · CGPA 8.16</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Projects", value: "4+" },
                      { label: "LeetCode", value: "150+" },
                      { label: "CGPA (B.Tech)", value: "8.89" },
                      { label: "GATE", value: "2024 ✓" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-muted/60 p-3 text-center">
                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="rounded-2xl border bg-card/60 p-4 shadow backdrop-blur-sm">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Core Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "Python", "React", "Node.js", "MongoDB", "Django"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>
    </StarHeader>
  );
}

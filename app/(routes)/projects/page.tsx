"use client";

import { motion } from "framer-motion";
import { StarHeader } from "@/components/shared/star-header";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="flex min-h-screen flex-col">
      <StarHeader>
        <section className="relative py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Projects
              </h1> */}
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                >
                  <span className="bg-linear-to-r from-slate-50 via-emerald-200 to-teal-400 bg-clip-text text-transparent">
                    Projects
                  </span>
                </motion.h1>



              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
                Things I&apos;ve built <br />Systems Software, Full-Stack apps and ML pipelines.
              </p>
            </motion.div>
          </div>
        </section>
      </StarHeader>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="mb-6 text-2xl font-bold">Featured</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other */}
          {otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold">Other Projects</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

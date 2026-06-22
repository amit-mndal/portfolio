"use client";

import { motion } from "framer-motion";
import { StarHeader } from "@/components/shared/star-header";
import { education } from "@/data/education";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Code2, Zap, Heart } from "lucide-react";

export default function AboutPage() {
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
                About Me
              </h1> */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                <span className="bg-linear-to-r from-slate-50 via-emerald-200 to-teal-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h1>



              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
                A bit about who I am, where I come from & what drives me.
              </p>
            </motion.div>
          </div>
        </section>
      </StarHeader>

      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Hi! I&apos;m <span className="font-semibold text-foreground">Amit Mandal</span>,
                  M.Tech. Computer Science from{" "}
                  <span className="font-semibold text-primary">NIT Durgapur</span> with a CGPA of
                  8.49. I completed my B.Tech. in CSE from Cooch-Behar Government Engineering College with
                  a CGPA of 8.89.
                </p>

                 <p className="leading-relaxed">
                    My work focuses on MERN Stack Engineering, Development and AI-powered modern web applications. 
                    I enjoy solving real-world problems by building efficient and scalable software solutions.
                  </p>


                <p className="leading-relaxed">
                  I&apos;m drawn to problems at the intersection of systems and software, with a strong
                  interest in building scalable applications and understanding how systems work at a
                  deeper level. I enjoy solving complex problems and turning ideas into practical,
                  efficient software solutions while actively targeting Software Development Engineer (SDE) roles.
                </p>
                <p className="leading-relaxed">
                  My technical toolkit spans C++, Python, JavaScript, React, Django and various ML
                  libraries.  I am currently expanding my knowledge in Retrieval-Augmented Generation (RAG) and Agentic AI systems 
                  to build more intelligent and autonomous application. 
                </p>
               <p className="leading-relaxed">
                  Beyond technology, I have represented Malda district as a Wicketkeeper-Batsman in an 
                  inter-district cricket tournament. I am also passionate about cinematography, traveling, 
                  and exploring diverse cultures and experiences.
                </p>
                            </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Programming",
                  "Full Stack Dev",
                  "Systems",
                  "GenAI",
                  "RAG",
                  "Agentic AI",
                  "Machine Learning",
                  "Open Source",
                ].map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Right — quick facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "West Bengal, India",
                  color: "text-blue-500",
                },
                {
                  icon: GraduationCap,
                  label: "Education",
                  value: "M.Tech. CS — NIT Durgapur",
                  color: "text-primary",
                },
                {
                  icon: Code2,
                  label: "Focus",
                  value: "Development · Systems · MERN Stack",
                  color: "text-green-500",
                },
                // {
                //   icon: Zap,
                //   label: "Currently",
                //   value: "Building Smart Job Tracker (MERN + Gemini AI)",
                //   color: "text-yellow-500",
                // },
                {
                  icon: Heart,
                  label: "Interests",
                  value: "Travel ·  Cricket ·  Cinematography ",
                  color: "text-red-500",
                },
              ].map(({ icon: Icon, label, value, color }) => (
                <Card key={label} className="border-2 transition-colors hover:border-primary">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Icon className={`h-6 w-6 shrink-0 ${color}`} />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {label}
                      </p>
                      <p className="font-medium">{value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Education section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-2 transition-all hover:border-primary hover:shadow-md">
                    <CardContent className="flex flex-col gap-2 p-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold">{edu.degree}</h3>
                        </div>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" /> {edu.location}
                        </p>
                        {edu.description && (
                          <p className="text-sm text-muted-foreground">{edu.description}</p>
                        )}
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1 text-right">
                        <p className="text-sm text-muted-foreground">
                          {edu.startDate} — {edu.endDate}
                        </p>
                        {edu.gpa && (
                          <Badge variant="secondary" className="mt-1">
                            {edu.gpa}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

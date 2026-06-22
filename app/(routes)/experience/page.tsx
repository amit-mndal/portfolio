"use client";

import { motion } from "framer-motion";
import { StarHeader } from "@/components/shared/star-header";
import { experiences } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FlaskConical, Crown, MapPin } from "lucide-react";

const typeConfig = {
  work: { icon: Briefcase, color: "text-blue-500", label: "Work" },
  research: { icon: FlaskConical, color: "text-purple-500", label: "Research" },
  leadership: { icon: Crown, color: "text-yellow-500", label: "Leadership" },
  education: { icon: Briefcase, color: "text-green-500", label: "Education" },
};

export default function ExperiencePage() {
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
                Experience
              </h1> */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                <span className="bg-linear-to-r from-slate-50 via-emerald-200 to-teal-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </motion.h1>



              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
                My professional background and internships.
              </p>
            </motion.div>
          </div>
        </section>
      </StarHeader>

      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">

          <div className="mb-12 text-center">
            <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg leading-relaxed">
              As a recent M.Tech. graduate and a fresher with hands-on virtual internship experience, 
              I am eager to apply my technical skills, problem-solving mindset and continuous learning approach 
              to real-world software challenges. I am actively seeking opportunities to build my career, contribute 
              to impactful projects and grow as a Software Development Engineer.
            </p>
          </div>



          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

            {experiences.map((exp, index) => {
              const config = typeConfig[exp.type ?? "work"];
              const Icon = config.icon;


              return (

                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative md:pl-16"
                >

                  {/* Timeline dot */}
                  <div className="absolute left-3.5 top-6 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background md:flex">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                  <Card className="border-2 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Icon className={`h-5 w-5 ${config.color}`} />
                            <h3 className="text-lg font-semibold">{exp.title}</h3>
                          </div>
                          <p className="font-medium text-primary">{exp.company}</p>
                          <p className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" /> {exp.location}
                          </p>
                        </div>
                        {/* <div className="flex flex-col items-end gap-2">
                          <Badge variant="outline" className="text-xs">
                            {exp.startDate} — {exp.endDate}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${config.color}`}
                          >
                            {config.label}
                          </Badge>
                        </div> */}

                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2">
                            {exp.certificateUrl && (
                              <a
                                href={exp.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-primary underline underline-offset-4"
                              >
                                Certificate
                              </a>
                            )}

                            <Badge
                              variant="secondary"
                              className={`text-xs ${config.color}`}
                            >
                              {config.label}
                            </Badge>
                          </div>

                          <Badge variant="outline" className="text-xs">
                            {exp.startDate} — {exp.endDate}
                          </Badge>
                        </div>



                      </div>

                      <p className="mb-4 text-sm text-muted-foreground">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

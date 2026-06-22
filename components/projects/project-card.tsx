"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
      
        <CardHeader className="pb-3">
          {/* <CardTitle className="text-lg">{project.title}</CardTitle> */}
          <CardTitle className="text-lg font-semibold tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-emerald-300">
            {project.title}
          </CardTitle>


          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>

          {project.achievements.length > 0 && (
            <ul className="mt-4 space-y-1.5">
              {project.achievements.slice(0, 2).map((achievement, i) => (
                <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>

        <CardFooter className="gap-2 pt-3">
          {project.github && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" asChild className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

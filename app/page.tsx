import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { Achievements } from "@/components/home/achievements";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <FeaturedProjects />
      <SkillsShowcase />
      <Achievements />
    </div>
  );
}

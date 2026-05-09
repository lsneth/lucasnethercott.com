"use client"

import React, { useState } from "react"
import Text from "@/components/Text"
import ProjectSection from "@/components/ProjectSection"
import RoleSection from "@/components/RoleSection"
import { projects } from "@/data/projects"
import { roles } from "@/data/roles"
import { calculateYearsExperience } from "@/lib/utils"

export default function Home() {
  const yearsExperience = calculateYearsExperience()
  const [activeTab, setActiveTab] = useState<"projects" | "roles">("projects")

  return (
    <main className="pb-20">
      <div className="max-sm:my-10 sm:my-32" />
      <div className="flex flex-col items-center text-center gap-4">
        <Text weight="medium" className="text-accent1 tracking-wide uppercase text-sm md:text-base">
          Hi, my name is
        </Text>
        <Text size="xl" weight="bold" as="h1" className="bg-gradient-to-r from-white via-white to-accent1 bg-clip-text text-transparent leading-[1.1]">
          Luke Nethercott
        </Text>
        <Text size="lg" weight="medium" className="text-white/60">
          {/* Technophile. Tinkerer. Early adopter. Productivity nerd. Self-hoster. AI Pragmatist. Software Engineer. Home-labber. */}
          Technophile. AI Pragmatist. <br/>Software Engineer.
        </Text>
      </div>
      
      <div className="max-sm:my-10 sm:my-16" />
      
      <Text size="sm" weight="normal" className="max-w-2xl text-center mx-auto text-white/80">
        I'm passionate about technology and I love to build solutions. Check out some of my experience below.
      </Text>
      
      <div className="max-sm:my-20 sm:my-40" />
      
      <div className="flex flex-col gap-8">
        <div className="flex border-b border-white/10 w-full">
          <button
            onClick={() => setActiveTab("projects")}
            className={`pb-4 px-4 text-sm md:text-base font-bold transition-all duration-300 border-b-2 -mb-[1px] ${
              activeTab === "projects"
                ? "text-white border-accent1"
                : "text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("roles")}
            className={`pb-4 px-4 text-sm md:text-base font-bold transition-all duration-300 border-b-2 -mb-[1px] ${
              activeTab === "roles"
                ? "text-white border-accent1"
                : "text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            Roles
          </button>
        </div>

        {activeTab === "projects" ? (
          <div className="grid gap-8">
            {projects.map((project) => (
              <ProjectSection
                key={project.title}
                title={project.title}
                pathToImage={project.pathToImage}
                imageAltText={project.imageAltText}
                description={project.description}
                codeLink={project.codeLink}
                deployedLink={project.deployedLink}
                skills={project.skills}
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-8">
            {roles.map((role, index) => (
              <RoleSection key={index} role={role} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

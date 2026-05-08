import React from "react"
import Text from "@/components/Text"
import ProjectSection from "@/components/ProjectSection"
import { projects } from "@/data/projects"
import { calculateYearsExperience } from "@/lib/utils"

export default function Home() {
  const yearsExperience = calculateYearsExperience()

  return (
    <main>
      <div className="max-sm:hidden sm:my-20" />
      <Text className="m-auto sm:text-center">Hi, my name is</Text>
      <div className="max-sm:my-1 sm:my-2" />
      <Text size="xl" className="m-auto max-sm:-ml-0.5 sm:text-center">
        Luke Nethercott
      </Text>
      <div className="max-sm:my-2 sm:my-5" />
      <Text className="m-auto text-accent1 sm:text-center">
        Software Developer
      </Text>
      <div className="m-auto max-sm:my-10 sm:my-14" />
      <Text className="m-auto sm:text-center">
        I&apos;m a passionate frontend developer with {yearsExperience} years of
        professional experience. My current focus is on expanding my knowledge
        and skill set through practice with TypeScript, React Native, Next.js,
        and TailwindCSS. Check out what I&apos;ve been working on below!
      </Text>
      <div className="max-sm:my-20 sm:my-32" />

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
    </main>
  )
}

import Image from "next/image"
import React from "react"
import Text from "@/components/Text"
import Spacer from "@/components/Spacer"
import SkillTag from "@/components/SkillTag"
import { Skill } from "@/types"

export default function ProjectSection({
  title,
  pathToImage,
  imageAltText,
  description,
  codeLink,
  deployedLink,
  skills,
}: {
  title: string
  pathToImage: string
  imageAltText: string
  description: string | React.ReactNode
  codeLink?: string
  deployedLink?: string
  skills: Skill[]
}) {
  return (
    <section className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-2xl">
      <div className="md:col-span-4 overflow-hidden rounded-xl border border-white/10">
        <Image
          src={pathToImage}
          width={400}
          height={250}
          alt={imageAltText}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="md:col-span-8 flex flex-col justify-center">
        <Text size="md" weight="bold" as="h3" className="text-white group-hover:text-accent1 transition-colors">
          {title}
        </Text>
        <Spacer size={3} />
        <div className="text-white/70">
          {typeof description === "string" ? (
            <Text size="sm">{description}</Text>
          ) : (
            description
          )}
        </div>
        <Spacer size={6} />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
        <Spacer size={6} />
        <div className="flex gap-6 items-center">
          {codeLink && (
            <a 
              href={codeLink} 
              className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-accent1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              Code
            </a>
          )}
          {deployedLink && (
            <a 
              href={deployedLink} 
              className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-accent2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

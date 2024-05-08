import Image from "next/image"
import React from "react"
import Text from "./Text"
import Spacer from "./Spacer"
import SkillTag from "./SkillTag"
import { Skill } from "../_types/types"

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
  description: string | JSX.Element
  codeLink?: string
  deployedLink?: string
  skills: Skill[]
}) {
  return (
    <section className="my-7 break-words rounded-xl bg-gray drop-shadow-md sm:flex">
      <Image
        src={pathToImage}
        width={256}
        height={256}
        alt={imageAltText}
        className="object-cover max-sm:w-full max-sm:rounded-t-xl sm:rounded-l-xl"
      />
      <div className="p-5">
        <Text size="md">{title}</Text>
        <Spacer size={5} />
        <Text>{description}</Text>
        <Spacer size={5} />
        {codeLink && (
          <Text>
            Code:&nbsp;
            <a href={codeLink} className="text-accent1">
              {codeLink}
            </a>
          </Text>
        )}
        {deployedLink && (
          <Text>
            Deploy:&nbsp;
            <a href={deployedLink} className="text-accent1">
              {deployedLink}
            </a>
          </Text>
        )}
        <Spacer size={5} />
        <div className="flex flex-wrap gap-1">
          {skills.length > 0
            ? skills.map((skill) => <SkillTag key={skill} skill={skill} />)
            : null}
        </div>
      </div>
    </section>
  )
}

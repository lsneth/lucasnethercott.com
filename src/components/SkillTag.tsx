import React from "react"
import Text from "@/components/Text"
import { Skill } from "@/types"

export default function SkillTag({ skill }: { skill: Skill }) {
  return (
    <div className="rounded-full bg-accent2 px-3 py-1 drop-shadow-md">
      <Text size="xs" className="text-white">
        {skill}
      </Text>
    </div>
  )
}

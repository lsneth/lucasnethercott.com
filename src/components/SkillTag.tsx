import React from "react"
import Text from "@/components/Text"
import { Skill } from "@/types"

export default function SkillTag({ skill }: { skill: Skill }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 transition-colors hover:border-accent1/50 hover:bg-accent1/5">
      <Text size="xs" weight="medium" className="text-white/80">
        {skill}
      </Text>
    </div>
  )
}

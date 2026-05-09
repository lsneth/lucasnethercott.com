import React from "react"
import Text from "@/components/Text"
import Spacer from "@/components/Spacer"
import SkillTag from "@/components/SkillTag"
import { Role } from "@/types"

export default function RoleSection({ role }: { role: Role }) {
  return (
    <section className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <Text size="md" weight="bold" className="text-white group-hover:text-accent1 transition-colors">
          {role.company}
        </Text>
        <Text size="sm" weight="medium" className="text-white/60">
          {role.dateRange}
        </Text>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mt-1">
        <Text size="sm" weight="medium" className="text-accent2/80">
          {role.title}
        </Text>
        <Text size="xs" weight="normal" className="text-white/40 italic">
          {role.location}
        </Text>
      </div>

      <Spacer size={4} />
      
      <ul className="list-disc list-outside ml-4 space-y-2 text-white/70">
        {role.description.map((item, index) => (
          <li key={index}>
            <Text size="sm">{item}</Text>
          </li>
        ))}
      </ul>

      <Spacer size={6} />
      
      <div className="flex flex-wrap gap-2">
        {role.skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </section>
  )
}

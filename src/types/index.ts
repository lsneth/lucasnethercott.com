import React from "react"

export type Size =
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96

export type Skill =
  | "TypeScript"
  | "React"
  | "React Native"
  | "supabase"
  | "supabase Edge Functions"
  | "WebSockets"
  | "AWS Lambda Functions"
  | "Webhooks"
  | "Liquid"
  | "Shopify"
  | "Next.js"
  | "tailwindCSS"
  | "NativeWind"
  | "Cypress e2e"
  | "Expo"
  | "Docker"
  | "netlify"
  | "PowerApps"
  | "SharePoint"
  | "Linux"
  | "Shell Scripting"
  | "JavaScript"
  | "Agile"
  | "GitHub"
  | "Unit Testing"
  | "Web Design"
  | "Marketing"
  | "E-commerce"
  | "Python"
  | "FastAPI"
  | "OpenAI Codex"
  | "MCP"
  | "Agentic Workflows"
  | "GC MarketDirect StoreFront"
  | "GC Pace"
  | "playwright-cli"

export interface Project {
  title: string
  pathToImage: string
  imageAltText: string
  description: string | React.ReactNode
  codeLink?: string
  deployedLink?: string
  skills: Skill[]
}

export interface Role {
  company: string
  title: string
  location: string
  dateRange: string
  description: string[]
  skills: Skill[]
}

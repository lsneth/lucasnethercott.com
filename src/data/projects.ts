import { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "jellybean",
    pathToImage: "/jellybean.png",
    description:
      "A straightforward web application capable of performing CRUD operations on jelly bean flavors. To name a few of its strengths, it includes a secure database, user authentication, loading state, and responsive design.",
    imageAltText: "mafia: social deduction cover image",
    deployedLink: "https://jellybean.lucasnethercott.com",
    codeLink: "https://github.com/lsneth/jellybean",
    skills: ["TypeScript", "React", "tailwindCSS", "supabase", "netlify"],
  },
  {
    title: "Mafia: Social Deduction (In Progress)",
    pathToImage: "/mafia.png",
    description:
      "The social deduction genre at it's finest. No moderator. No cards. No trivial noises at night. Just you, your friends, and pure social deduction. This mobile app will be a building block for a series of social deduction apps to come.",
    imageAltText: "mafia: social deduction cover image",
    codeLink: "https://github.com/lsneth/mafia-social-deduction",
    skills: [
      "TypeScript",
      "Expo",
      "React Native",
      "NativeWind",
      "tailwindCSS",
      "Cypress e2e",
      "supabase",
      "supabase Edge Functions",
      "WebSockets",
      "Docker",
    ],
  },
  {
    title: "Stream Scout",
    pathToImage: "/stream-scout-logo.png",
    description:
      "A solution for quickly finding where a movie or TV show is currently available to stream, rent, or buy. Stream Scout leverages TMDB's API to provide a simple cinema search experience.",
    imageAltText: "stream scout logo",
    deployedLink: "https://streamscout.lucasnethercott.com",
    codeLink: "https://github.com/lsneth/stream-scout",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "tailwindCSS",
      "AWS Lambda Functions",
      "Cypress e2e",
    ],
  },
  {
    title: "lucasnethercott.com",
    pathToImage: "/logo.png",
    description:
      "You're looking at it! I built this site to be my design and development portfolio.",
    imageAltText: "mafia: social deduction cover image",
    codeLink: "https://github.com/lsneth/lucasnethercott.com",
    deployedLink: "https://www.lucasnethercott.com",
    skills: ["TypeScript", "React", "Next.js", "tailwindCSS"],
  },
  {
    title: "Sold Out (Abandoned)",
    pathToImage: "/sold-out.png",
    description:
      "A tshirt company that only sells each design one time. Once it's sold, it's sold out. This is made possible through many modern technologies including recent developments in AI art generation.",
    imageAltText: "mafia: social deduction cover image",
    skills: ["Shopify", "AWS Lambda Functions", "Webhooks", "Liquid"],
  },
]

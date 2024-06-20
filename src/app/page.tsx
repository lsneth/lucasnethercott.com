import React from "react"
import Text from "./_components/Text"
import ProjectSection from "./_components/ProjectSection"

export default function Home() {
  const yearsExperience = (
    (new Date().getTime() - new Date(1673276400000).getTime()) / // Jan 9, 2023 at 8am. When I started my internship with FamilySearch.
    // milliseconds in a year
    31556952000
  ).toFixed(1)

  const projects: React.ComponentProps<typeof ProjectSection>[] = [
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
        "TailwindCSS",
        "Cypress Testing",
        "Supabase",
        "Supabase Edge Functions",
        "WebSockets",
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
        "TailwindCSS",
        "AWS Lambda Functions",
        "Cypress Testing",
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
      skills: ["TypeScript", "React", "Next.js", "TailwindCSS"],
    },
    {
      title: "Sold Out (In Progress)",
      pathToImage: "/sold-out.png",
      description:
        "A tshirt company that only sells each design one time. Once it's sold, it's sold out. This is made possible through many modern technologies including recent developments in AI art generation.",
      imageAltText: "mafia: social deduction cover image",
      deployedLink: "https://soldout.limited/",
      skills: ["Shopify", "AWS Lambda Functions", "Webhooks", "Liquid"],
    },
  ]

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
          codeLink={project?.codeLink}
          deployedLink={project?.deployedLink}
          skills={project.skills}
        />
      ))}
    </main>
  )
}

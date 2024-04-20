import React from 'react'
import Text from './_components/Text'
import ProjectSection from './_components/ProjectSection'

export default function Home() {
  const yearsExperience = new Date().getFullYear() - new Date(1673276400000).getFullYear() // Jan 9, 2023 at 8am. When I started my internship with FamilySearch.
  return (
    <main>
      <div className="max-sm:hidden sm:my-20" />
      <Text className="sm:text-center m-auto">Hi, my name is</Text>
      <div className="max-sm:my-1 sm:my-2" />
      <Text size="xl" className="sm:text-center m-auto max-sm:-ml-0.5">
        Luke Nethercott
      </Text>
      <div className="max-sm:my-2 sm:my-5" />
      <Text className="text-accent1 sm:text-center m-auto">Junior Software Developer</Text>
      <div className="max-sm:my-10 sm:my-14 m-auto" />
      <Text className="sm:text-center m-auto">
        I&apos;m a passionate frontend developer with {yearsExperience}+ years of experience working in React. My
        current focus is on expanding my knowledge and skill set through practice with TypeScript, React Native,
        Next.js, and tailwindcss. Check out what I&apos;ve been working on below!
      </Text>
      <div className="max-sm:my-20 sm:my-32" />

      <ProjectSection
        title="Mafia: Social Deduction (In Progress)"
        pathToImage="/mafia.png"
        description="The social deduction genre at it's finest. No moderator. No cards. No trivial noises at night. Just you, your friends, and pure social deduction. This mobile app will be a building block for a series of social deduction apps to come."
        imageAltText="mafia: social deduction cover image"
        codeLink="https://github.com/lsneth/mafia-social-deduction"
      />
      <ProjectSection
        title="Sold Out (In Progress)"
        pathToImage="/sold-out.png"
        description="A tshirt company that only sells each design one time. Once it's sold, it's sold out. This is made possible through many modern technologies including recent developments in AI art generation."
        imageAltText="mafia: social deduction cover image"
        deployedLink="https://soldout.limited/"
      />
      <ProjectSection
        title="Stream Scout"
        pathToImage="/stream-scout-logo.png"
        description="A solution for quickly finding where a movie or TV show is currently available to stream, rent, or buy. Stream Scout leverages TMDB's API to provide a simple cinema search experience."
        imageAltText="stream scout logo"
        deployedLink="https://streamscout.lucasnethercott.com"
      />
    </main>
  )
}

import React from 'react'
import Text from './_components/Text'
import ProjectSection from './_components/ProjectSection'

export default function Home() {
  return (
    <main>
      <Text className="sm:text-center">Hi, I&apos;m</Text>
      <Text size="xl" className="sm:text-center">
        Luke Nethercott
      </Text>
      <Text className="text-accent1 sm:text-center">Learning. Thinking. Coding. Creating.</Text>

      <ProjectSection
        title="Mafia: Social Deduction (In Progress)"
        pathToImage="/mafia.png"
        description="The social deduction genre at it's finest. No moderator. No cards. No trivial noises at night. Just you, your friends, and pure social deduction. This mobile app will be a building block for a series of social deduction apps to come."
        imageAltText="mafia: social deduction cover image"
        codeLink="https://github.com/lsneth/mafia-social-deduction"
      />
      <ProjectSection
        title="Sold Out"
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

import React from 'react'
import Spacer from './_components/Spacer'
import Text from './_components/Text'
import Image from 'next/image'
import ProjectSection from './_components/ProjectSection'

export default function Home() {
  return (
    <main>
      <Spacer size={20} />
      <Text align="center">Hi, my name is</Text>
      <Spacer size={4} />
      <Text size="lg" align="center">
        Luke Nethercott
      </Text>
      <Spacer size={5} />
      <Text color="primary" align="center">
        Learning. Thinking. Coding. Creating.
      </Text>
      <Spacer size={20} />

      <ProjectSection
        title="Mafia: Social Deduction (In Progress)"
        pathToImage="./mafia.png"
        description="The social deduction genre at it's finest. No moderator. No cards. No noises at night. Just you, your friends, and pure social deduction. This mobile app will be a building block for a series of social deduction games to come."
        imageAltText="mafia: social deduction cover image"
        codeLink="https://github.com/lsneth/mafia-social-deduction"
      />
      <ProjectSection
        title="Sold Out"
        pathToImage="./sold-out.png"
        description="A tshirt company that only sells each tshirt once. Once it's sold, it's sold out. This is made possible through many modern technologies including recent developments in AI art generation."
        imageAltText="mafia: social deduction cover image"
        deployedLink="https://soldout.limited/"
      />
      <ProjectSection
        title="Stream Scout"
        pathToImage="./stream-scout-logo.png"
        description="A solution for quickly finding where a movie or TV show is currently available to stream, rent, or buy. Stream Scout leverages TMDB's API to provide a simple cinema search experience."
        imageAltText="stream scout logo"
        deployedLink="https://streamscout.lucasnethercott.com"
      />
    </main>
  )
}

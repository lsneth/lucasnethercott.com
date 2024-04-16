import React from 'react'
import Spacer from './_components/Spacer'
import Text from './_components/Text'

export default function Home() {
  return (
    <main className="mx-5 text-center">
      <Text>Hi, my name is</Text>
      <Spacer size={5} />
      <Text size="lg">Luke Nethercott</Text>
      <Spacer size={5} />
      <Text color="primary">Learning. Thinking. Coding.</Text>
      <Spacer size={15} />
    </main>
  )
}

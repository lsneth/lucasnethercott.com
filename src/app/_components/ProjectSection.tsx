import Image from 'next/image'
import React from 'react'
import Text from './Text'
import Spacer from './Spacer'

export default function ProjectSection({
  title,
  pathToImage,
  imageAltText,
  description,
  codeLink,
  deployedLink,
}: {
  title: string
  pathToImage: string
  imageAltText: string
  description: string | JSX.Element
  codeLink?: string
  deployedLink?: string
}) {
  return (
    <section className="flex items-center even:bg-gray p-5">
      <Image src={pathToImage} width={256} height={256} alt={imageAltText} className="max-h-256 max-w-256 mr-5" />
      <div>
        <Text size="md">{title}</Text>
        <Spacer size={5} />
        <Text>{description}</Text>
        <Spacer size={5} />
        {deployedLink && (
          <Text>
            Try it out:{' '}
            <a href={deployedLink} className="text-primary">
              {' '}
              {deployedLink}{' '}
            </a>
          </Text>
        )}
        {codeLink && (
          <Text>
            Code Link:{' '}
            <a href={codeLink} className="text-primary">
              {' '}
              {codeLink}{' '}
            </a>
          </Text>
        )}
      </div>
    </section>
  )
}

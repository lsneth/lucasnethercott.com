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
    <section className="sm:flex bg-gray rounded-xl my-7 break-words">
      <Image
        src={pathToImage}
        width={256}
        height={256}
        alt={imageAltText}
        className="max-sm:rounded-t-xl sm:rounded-l-xl max-sm:w-full object-cover"
      />
      <div className="p-5">
        <Text size="md">{title}</Text>
        <Spacer size={5} />
        <Text>{description}</Text>
        <Spacer size={5} />
        {deployedLink && (
          <Text>
            Deploy:{' '}
            <a href={deployedLink} className="text-accent1">
              {' '}
              {deployedLink}{' '}
            </a>
          </Text>
        )}
        {codeLink && (
          <Text>
            Code:{' '}
            <a href={codeLink} className="text-accent1">
              {' '}
              {codeLink}{' '}
            </a>
          </Text>
        )}
      </div>
    </section>
  )
}

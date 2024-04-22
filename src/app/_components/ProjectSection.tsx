import Image from "next/image";
import React from "react";
import Text from "./Text";
import Spacer from "./Spacer";

export default function ProjectSection({
  title,
  pathToImage,
  imageAltText,
  description,
  codeLink,
  deployedLink,
}: {
  title: string;
  pathToImage: string;
  imageAltText: string;
  description: string | JSX.Element;
  codeLink?: string;
  deployedLink?: string;
}) {
  return (
    <section className="my-7 break-words rounded-xl bg-gray sm:flex">
      <Image
        src={pathToImage}
        width={256}
        height={256}
        alt={imageAltText}
        className="object-cover max-sm:w-full max-sm:rounded-t-xl sm:rounded-l-xl"
      />
      <div className="p-5">
        <Text size="md">{title}</Text>
        <Spacer size={5} />
        <Text>{description}</Text>
        <Spacer size={5} />
        {deployedLink && (
          <Text>
            Deploy:{" "}
            <a href={deployedLink} className="text-accent1">
              {" "}
              {deployedLink}{" "}
            </a>
          </Text>
        )}
        {codeLink && (
          <Text>
            Code:{" "}
            <a href={codeLink} className="text-accent1">
              {" "}
              {codeLink}{" "}
            </a>
          </Text>
        )}
      </div>
    </section>
  );
}

import Image from "next/image";
import React from "react";
import Link from "next/link";

interface imagenOverlayProps {
  src: string;
  alt: string;
  textOverlay: string;
  description: string;
  linkUrl?: string;
  linkText?: string;
}

export default function ImagenOverlay({
  src,
  alt,
  textOverlay,
  description,
  linkUrl,
  linkText,
}: imagenOverlayProps) {
  return (
    <div className="relative w-full lg:w-1/3 lg:p-10">
      {/* Contenedor relativo */}
      <Image
        src={src}
        alt={alt}
        height={600}
        width={600}
        className="object-cover"
      />

      <p className="mt-5 font-bold text-3xl">{textOverlay}</p>
      {/* <p className="text-lg">{description}</p> */}
      <p className="text-lg">
        {linkUrl && linkText && (
          <Link className="text-sky-950" target="_blank" rel="noopener noreferrer" href={linkUrl}>
            {linkText}
          </Link>
        )}{" "}
        {description}
      </p>
    </div>
  );
}

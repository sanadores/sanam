import { ICircleImage } from "@/types/CircleImage";
import Image from "next/image";
import React from "react";

export default function CircleImage({ imageUrl, description }: ICircleImage) {
  return (
    <div className="flex flex-col md:my-6 lg:my-6 w-full">
      <div className="flex justify-center items-center py-4 md:py-2 lg:py-4">
        <Image
          width={220}
          height={210}
          src={imageUrl}
          alt="imagen semilla"
          className="object-contain rounded-full"
        />
      </div>
      <div className="h-10">
        <p className="mt-3 text-center font-bold">{description}</p>
      </div>
    </div>
  );
}

import React from "react";
import ImagenOverlay from "./Imagen-Overlay";
import { ICardContent } from "@/types/CardContent";
import { useTranslations } from "next-intl";

interface AporteMundoProps {
  cardContent: ICardContent[];
}

export default function AporteMundo({ cardContent }: AporteMundoProps) {
  const t = useTranslations();

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5 lg:px-16 font-bold">
        {t("our-contribution")}
      </h1>
      <div className="lg:w-full flex flex-col md:flex-row lg:flex-row gap-2">
        {cardContent.map((card, index) => (
          <ImagenOverlay
            key={index}
            src={card.imgUrl}
            alt={card.alt}
            textOverlay={card.textOverlay}
            linkUrl={card.linkUrl}
            linkText={card.linkText}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

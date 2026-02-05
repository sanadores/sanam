import React from "react";
import { useTranslations } from "next-intl";
import { ICircleImage } from "@/types/CircleImage";
import CircleImage from "../agricultura/seccion-one/CircleImage";

export default function ProductosBanner() {
  const t = useTranslations();

  const circlesImages: ICircleImage[] = [
    {
      imageUrl: "/img/nutricion-humana/icons/web_cafe-33.png",
      description: t("coffe-alternative") + " " + t("and") + " " + t("tea"),
    },
    {
      imageUrl: "/img/nutricion-humana/icons/web_bebidas.png",
      description: t("energy-drink"),
    },
    {
      imageUrl: "/img/nutricion-humana/icons/web_seitzers.png",
      description: t("nt-hard"),
    },
    {
      imageUrl: "/img/nutricion-humana/icons/web_gel.png",
      description: t("nt-gels"),
    },
    {
      imageUrl: "/img/nutricion-humana/icons/web_snaks.png",
      description: t("snacks"),
    },
    {
      imageUrl: "/img/nutricion-humana/icons/web_salsas.png",
      description: t("sauces") + " " + t("and") + " " + t("dressings"),
    },
  ];
  return (
    <div className="md:grid lg:flex md:grid-cols-2 lg:flex-row justify-center items-center w-full mb-6 px-20 lg:gap-5">
      {circlesImages.map((cir, index) => (
        <CircleImage
          key={index}
          imageUrl={cir.imageUrl}
          description={cir.description}
        />
      ))}
    </div>
  );
}

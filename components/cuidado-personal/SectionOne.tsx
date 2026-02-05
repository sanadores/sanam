import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ICircleImage } from "@/types/CircleImage";
import CircleImage from "../agricultura/seccion-one/CircleImage";

export default function SectionOne() {
  const t = useTranslations();

  const circlesImages: ICircleImage[] = [
    {
      imageUrl: "/img/cuidado-personal/icons/web_comercio.svg",
      description: t("fair-trade"),
    },
    {
      imageUrl: "/img/cuidado-personal/icons/web_gmo.svg",
      description: t("gmo-free"),
    },
    {
      imageUrl: "/img/cuidado-personal/icons/web_vegano-53.svg",
      description: t("vegan"),
    },
    {
      imageUrl: "/img/cuidado-personal/icons/web_crueltyfree.svg",
      description: t("cruelty-free"),
    },
    {
      imageUrl: "/img/cuidado-personal/icons/web_sostenible.svg",
      description: t("sustainably-produced"),
    },
  ];

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <Image
          className="w-full h-auto "
          width={1200}
          height={400}
          src={"/img/cuidado-personal/web_banner_cuidado.png"}
          alt="banner cuidado personal"
        />
        <div className="absolute inset-0 opacity-40 md:opacity-20 bg-[#6B6B6B]"></div>
        <div className="absolute inset-0 flex justify-start items-center md:m-12 lg:ml-[7rem] text-[#FFFFFF]">
          <div className="flex flex-col justify-center items-center gap-2 h-full md:w-[30rem] lg:w-[40rem] p-[1.5rem] ">
            <h1 className="w-full text-2xl md:text-4xl lg:text-6xl text-center md:text-left font-bold font-custom ">
              {t("naox-derma")}
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-justify">
              {t("cp-concentrate-patented")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full px-10 my-[3rem]">
        <h1 className="text-2xl text-center md:text-left lg:text-left font-bold lg:pl-14">
          {t("advantages")}
        </h1>
        <div className="md:grid lg:flex md:grid-cols-2 lg:flex-row justify-center items-center w-full px-10 lg:gap-6 ">
          {circlesImages.map((cir, index) => (
            <CircleImage
              key={index}
              imageUrl={cir.imageUrl}
              description={cir.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

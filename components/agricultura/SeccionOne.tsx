"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CircleImage from "./seccion-one/CircleImage";
import { ICircleImage } from "@/types/CircleImage";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SeccionOne() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1]; // Extrae el idioma de la ruta

  const circlesImages: ICircleImage[] = [
    {
      imageUrl: "/img/agricultura/icons/web_carbono.png",
      description: t("39") + t("carbon"),
    },
    {
      imageUrl: "/img/agricultura/icons/web_carbohidratos.png",
      description: t("41") + " " + t("carbohydrates"),
    },
    {
      imageUrl: "/img/agricultura/icons/web_aminoacidos.png",
      description: t("ag-amino"),
    },
    {
      imageUrl: "/img/agricultura/icons/web_antioxidantes.png",
      description: t("acid-antioxidant"),
    },
  ];

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <Image
          className="w-full h-auto"
          width={1200}
          height={400}
          src="/img/agricultura/web_banner agricultura.png"
          alt="banner cuidado personal"
        />
        <div className="absolute flex justify-start items-center inset-0 m-12 md:font-bold text-white">
          <div className="flex flex-col justify-center items-center w-[30rem]">
            <p className="text-md md:text-2xl lg:text-4xl lg:px-10 py-4">
              {t("ag-compound")}
            </p>

            <Link href={`/${locale}/contacto`}>
              <p className="cursor-pointer rounded-2xl text-center uppercase text-sm md:text-2xl px-2 lg:px-10 py-2 md:py-4 lg:w-[26rem] bg-[#04AF30] hover:bg-green-900">
                {t("more-info")}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:grid lg:flex md:grid-cols-2 justify-center items-center w-full px-20">
        {circlesImages.map((cir, index) => (
          <CircleImage
            key={index}
            imageUrl={cir.imageUrl}
            description={cir.description}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center text-left w-full lg:h-[30rem]">
        <div className="flex flex-col justify-center items-center md:px-6 h-[10rem] md:h-[30rem] w-full">
          <div className="m-3 md:w-[35rem]">
            <h1 className="text-xl md:text-5xl font-bold">{t("together")} {t("energy-fields")}</h1>
            <p className="md:text-2xl mt-4">{t("ag-nutritional")}</p>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center w-full h-[35rem] md:h-[30rem] px-20 gap-8 text-white bg-[#6C7F7D]">
          <div className=" md:w-[24rem]">
            <p className="text-xl md:text-4xl font-bold">
              {t("98")} {t("ag-increase")}
            </p>
          </div>
          <div>
            <Image
              width={300}
              height={200}
              src="/img/agricultura/Terax.svg"
              alt="imagen producto"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

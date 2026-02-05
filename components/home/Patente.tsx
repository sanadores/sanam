import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Patente() {
  const t = useTranslations();
  return (
    <div className="flex flex-col justify-center items-center md:flex-row w-full mt-[1rem] md:mt-0">
      <div className="flex justify-center items-center w-full md:w-3/5">
        <Image
          src="/img/inicio/patente-inicio.jpg"
          alt="planta de cafe"
          className="md:w-full md:h-[35rem] object-cover"
          width={3805}
          height={2537}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-2/5 md:h-[35rem] p-5 text-[#FFFFFF] bg-[#6C7F7D]">
        <h1 className="w-full text-4xl px-10 font-bold">{t("patent")}</h1>
        <p className="text-3xl font-bold px-10">{t("home-patent")}</p>
      </div>
    </div>
  );
}

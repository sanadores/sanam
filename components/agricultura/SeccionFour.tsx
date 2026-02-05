import React from "react";
import Image from "next/image";
import QuieresDistribuir from "./QuieresDistribuir";
import { useTranslations } from "next-intl";

export default function SeccionFour() {
  const t = useTranslations();
  return (
    <div className="lg:flex lg:flex-row  w-full my-8">
      <div className="flex flex-col justify-center w-full h-[22rem] gap-4 bg-[#6C7F7D]/10">
        <h1 className="text-xl text-left mx-14 md:mx-[12rem] font-bold">
          {t("we-promote")}
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center pr-5 mx-16 ">
          <Image
            width={120}
            height={120}
            src="/img/agricultura/icons/web_agricultura.png"
            alt="agricultura sostenible"
            className="lg:ml-32"
          />
          <p className="lg:ml-3 text-lg text-center w-full"> {t("ag-sustainable")}</p>
        </div>
        <div className=" flex flex-col lg:flex-row justify-center items-center mx-16">
          <Image
            width={120}
            height={120}
            src="/img/agricultura/icons/web_recuperacion.png"
            alt="agricultura sostenible"
            className="lg:ml-32"
          />
          <p className="lg:ml-3 text-lg text-center w-full"> {t("recoring-soils")}</p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[22rem] shadow-md bg-[#6C7F7D]/40">
        <QuieresDistribuir disposicion="columna" />
      </div>
    </div>
  );
}

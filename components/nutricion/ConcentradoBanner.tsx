import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function ConcentradoBanner() {
  const t = useTranslations();
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <Image
          className="w-full h-auto"
          width={1200}
          height={400}
          src="/img/nutricion-humana/web_banner nutricion.png"
          alt="banner nutricion y salud humana"
        />

        <div className="absolute inset-0 flex justify-start items-center md:m-12 text-[#FFFFFF]">
          <div className="flex flex-col justify-center items-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
            <h1 className="text-md md:text-2xl lg:text-5xl md:px-10 md:py-4 font-custom font-bold">
              {t("nt-coffe-concentrate")}
            </h1>

            <p className="text-sm md:text-2xl lg:text-xl md:px-10 md:py-4">
              {t("nt-benefits")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

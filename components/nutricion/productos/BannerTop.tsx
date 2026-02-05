import Image from "next/image";
import React from "react";
import NavigationSanam from "@/components/shared/NavigationSanam";
import { useTranslations } from "next-intl";

export default function BannerTop() {
  const t = useTranslations();
  return (
    <div className="relative w-full mb-2 overflow-hidden">
      <Image
        className="w-full lg:h-[40rem]"
        width={4000}
        height={2013}
        src="/img/nuestros-productos/web_Banner Suproducto.png"
        alt="banner nutricion y salud humana"
      />
      <div className="absolute inset-0 flex md:m-8 lg:m-20 p-10 text-[#FFFFFF]">
        <div className="flex flex-col justify-center md:w-[30rem] lg:w-[40rem] gap-5">
          <div className="mt-2">
            <p className="md:text-2xl lg:text-3xl font-custom font-bold">
              {t("np-food-naox")}{" "}
            </p>
          </div>
          <div>
            <NavigationSanam
              openNew={true}
              route="https://naoxcolombia.com/"
              styleDiv="flex justify-center md:p-5 lg:p-4 rounded-3xl bg-[#04AF30]"
              styleSpan="md:text-2xl lg:text-4xl font-bold uppercase text-[#FFFFFF]"
              title={t("naox-store")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function NuestrosPilares() {
  const t = useTranslations();
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-10">
      <div className="relative">
        <Image
          src="/img/inicio/web_experiencia.png"
          alt="experiencia"
          width={400}
          height={700}
          className="2xl:w-[500px] 2xl:h-[600px]"
        />
        <div className="absolute flex flex-col justify-end mx-8 mb-16 inset-0 text-white">
          <h1 className="text-xl font-bold">{t("experience")}</h1>
          <p className="text-lg">
            {t("home-experience")} {t("coffe-fruit")}
          </p>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/img/inicio/web_tecnologia.png"
          alt="tecnologia"
          width={400}
          height={700}
          className="2xl:w-[500px] 2xl:h-[600px]"
        />
        <div className="absolute flex flex-col justify-end mx-8 mb-16 inset-0 text-white">
          <h1 className="text-xl font-bold"> {t("technology")}</h1>
          <p className="text-lg">{t("home-technology")}</p>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/img/inicio/web_innovacion.png"
          alt="innovacion"
          width={400}
          height={700}
          className="2xl:w-[500px] 2xl:h-[600px]"
        />
        <div className="absolute flex flex-col justify-end mx-10 mb-16 inset-0 text-white">
          <h1 className="text-xl font-bold">{t("innovation")}</h1>
          <p className="text-lg">{t("home-innovation")}</p>
        </div>
      </div>
    </div>
  );
}

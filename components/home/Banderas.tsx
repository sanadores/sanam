import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Banderas() {
  const t = useTranslations();

  return (
    <>
      <div className="w-full md:pt-5">
        <h1 className="text-4xl font-bold py-2">
          {t("our")} {t("presence")}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 md:space-x-[6rem] 2xl:space-x-32">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            src="/img/web_colombia.png"
            alt={"country"}
            width={250}
            height={250}
            className="object-cover rounded-lg mb-4 w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
          />
          <div className="m-5 w-[12rem]">
            <h1 className="text-2xl font-bold">{t("colombia")}</h1>
            <p>{t("home-presence")}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            src="/img/web_crica.png"
            alt={"country"}
            width={250}
            height={250}
            className="object-cover rounded-lg mb-4 w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
          />
          <div className="m-5 w-[12rem]">
            <h1 className="text-2xl font-bold">{t("costa-rica")}</h1>
            <p>{t("home-presence")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

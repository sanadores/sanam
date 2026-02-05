import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SaludHumana() {
  const t = useTranslations();
  const p_nt_urinary_stones = t("nt-urinary-stones").split("||");
  const p_nt_nutraceutical = t("nt-nutraceutical").split("||");

  return (
    <>
      <div className="justify-start pl-10 w-full">
        <h1 className="font-bold text-2xl lg:text-2xl 2xl:text-4xl">
          {t("human-health")}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full md:p-2 lg:px-30 xl:px-30 gap-1 ">
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:h-[24rem] gap-4 p-5 ">
          <div className="flex justify-center md:justify-end w-full h-full">
            <Image
              alt="Stone"
              src="/img/nutricion-humana/icons/web_stone.png"
              width={175}
              height={328}
            />
          </div>
          <div className="w-full h-full">
            <p className="text-lg font-bold text-center md:text-left">
              {t("stones")}
            </p>
            <p className="lg:text-xl md:mt-2 lg:mt-2 text-center md:text-left">
              {p_nt_urinary_stones.map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < p_nt_urinary_stones.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full md:h-[24rem] gap-4 p-5 lg:pr-[8rem] 2xl:pr-[12rem]">
          <div className="flex justify-center md:justify-end w-full h-full">
            <Image
              alt="Nutraceutico"
              src="/img/nutricion-humana/icons/web_life.png"
              width={175}
              height={328}
            />
          </div>
          <div className="w-full h-full">
            <p className="text-lg font-bold text-center md:text-left">
              {t("nutraceutical")}
            </p>

            <p className="lg:text-xl md:mt-2 lg:mt-2 text-center md:text-left">
              {p_nt_nutraceutical.map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < p_nt_nutraceutical.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

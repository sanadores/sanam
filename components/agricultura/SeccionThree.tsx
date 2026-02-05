import React from "react";
import { FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function SeccionThree() {
  const t = useTranslations();

  const items = [
    t("ag-natural"),
    t("ag-reduce"),
    t("ag-prevent"),
    t("ag-mitigate"),
    t("ag-advantages"),
    t("ag-soils"),
    t("ag-cost-benefit"),
  ];

  return (
    <>
      <div className="lg:flex p-5 lg:p-4 lg:mx-20 space-y-10 lg:space-y-0">
        <div className="lg:flex lg:flex-col justify-center items-center lg:w-1/2">
          <div className="space-y-4">
            <p className="text-xl lg:text-2xl px-4 font-bold">
              {t("our-biostimulant")}
            </p>
            {/* Alineación vertical con espacio entre elementos */}
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                {/* Alinear horizontalmente */}
                <FaPlus className="mx-3 text-2xl sanam-green" /> {/* Ícono */}
                <p className="text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex flex-col justify-center px-8 lg:w-1/2 font-custom">
          <h1 className="text-3xl lg:text-5xl font-bold ">
            {t("ag-ton")}
            <span className="text-3xl lg:text-5xl font-bold text-[#04AF30]">
              {" "}
              {t("biostimulant")}
            </span>
          </h1>

          <p className="lg:text-4xl font-bold">{t("ag-equivalent")}</p>
          <h1 className="text-6xl lg:text-4xl font-bold text-[#04AF30]">
            {t("45-000")} {""} {t("people")}
          </h1>
        </div>
      </div>
    </>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SectionFive() {
  const t = useTranslations();
  const p_cp_remove_makeup = t("cp-remove-makeup").split("||");
  return (
    <>
      <div className="flex flex-col justify-center items-center py-4 w-full h-full">
        <div className="flex md:pl-[8rem] px-8 gap-4 w-full">
          <span className="text-xl font-bold flex-shrink sm:text-lg md:text-3xl lg:text-xl uppercase ">
            {t("our-formulas")}
          </span>
        </div>

        <div className="flex flex-col justify-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-5 gap-5 py-5 px-12">
          <div className="max-w-sm">
            <div className="overflow-hidden">
              <Image
                src="/img/cuidado-personal/nuestras-formulas/web_Serum.svg"
                alt="Serum Antioxidante"
                width={300}
                height={200}
              />
            </div>
            <div className="mt-4">
              <h5 className="mb-2 text-xl font-bold">
                {t("serum-antioxidant")}
              </h5>
              <p className="mb-3">{t("cp-firming-hydrating")}</p>
              <h1 className="font-bold text-xl">
                {t("concentration")}: {t("4")}
              </h1>
            </div>
          </div>

          <div className="max-w-sm">
            <div className="overflow-hidden">
              <Image
                src="/img/cuidado-personal/nuestras-formulas/web_Gel.png"
                alt="Gel limpiador"
                width={300}
                height={200}
              />
            </div>
            <div className="mt-4">
              <h5 className="mb-2 text-xl font-bold">{t("cleansing-gel")}</h5>
              <p className="mb-3">{t("cp-exfoliates")}</p>
              <h1 className="font-bold text-xl">
                {t("concentration")}: {t("2")}
              </h1>
            </div>
          </div>

          <div className="max-w-sm">
            <div className="overflow-hidden">
              <Image
                src="/img/cuidado-personal/nuestras-formulas/web_mascarilla.svg"
                alt="Mascarilla"
                width={300}
                height={200}
              />
            </div>
            <div className="mt-4">
              <h5 className="mb-2 text-xl font-bold">{t("mask")}</h5>
              <p className="mb-3">{t("cp-designed-tone")}</p>
              <h1 className="font-bold text-xl">
                {t("concentration")}: {t("8-10")}
              </h1>
            </div>
          </div>

          <div className="max-w-sm">
            <div className="overflow-hidden">
              <Image
                src="/img/cuidado-personal/nuestras-formulas/web_jabon.png"
                alt="Jabon"
                width={300}
                height={100}
              />
            </div>
            <div className="mt-4">
              <h5 className="mb-2 text-xl font-bold">
                {t("exfoliating-soap")}
              </h5>
              <p className="mb-3">{t("cp-cleansing")}</p>
              <h1 className="font-bold text-xl">
                {t("concentration")}: {t("3-5")}
              </h1>
            </div>
          </div>

          <div className="max-w-sm">
            <div className="overflow-hidden">
              <Image
                src="/img/cuidado-personal/nuestras-formulas/web_removedor.png"
                alt="Removedor"
                width={300}
                height={200}
              />
            </div>
            <div className="mt-4">
              <h5 className="mb-2 text-xl font-bold">{t("makeup-remover")}</h5>
              <p className="mb-3">
                {p_cp_remove_makeup.map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < p_cp_remove_makeup.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <h1 className="font-bold text-xl">
                {t("concentration")}: {t("1")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";
import BeneficiosCMC from "./BeneficiosCMC";

export default function BeneficioFruta() {
  const t = useTranslations();
  const items_beneficios = [
    t("nt-flavor"),
    t("nt-drink"),
    t("no-perishable"),
    t("nt-versatile"),
    t("brix"),
  ];

  return (
    <>
      <div className="flex justify-center items-center bg-[#6C7F7D]/20">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full m-5 p-4 gap-2 md:gap-8 lg:gap-2">
          {/* Izquierdo */}
          <div className="flex flex-col w-full md:pl-12  2xl:pl-[15rem] space-y-6">
            <h2 className="text-xl font-bold ml-4">
              {t("benefits-concentrate")}
            </h2>
            {items_beneficios.map((item, index) => (
              <div key={index} className="flex items-center">
                <FaPlus className="mx-3 text-2xl sanam-green" />
                <p className="text-xl">{item}</p>
              </div>
            ))}
          </div>
          {/* Derecho */}
          <div className="w-full p-2 space-y-[2rem] md:space-y-[7rem] text-center">
            <div className="flex flex-col md:flex-row gap-3">
              <BeneficiosCMC
                iconName={"vegano"}
                title={t("natural") + " " + " - " + " " + t("vegan")}
                subtitle={""}
              />
              <BeneficiosCMC
                iconName={"antioxidantes"}
                title={t("nt-relevant-antioxidants")}
                subtitle={
                  <>
                    <p className="mt-1 text-sm">
                      {t("acid-caffeic-catechins")}
                    </p>
                  </>
                }
              />
              <BeneficiosCMC
                iconName={"calorías"}
                title={t("low-calories")}
                subtitle={""}
              />
              <BeneficiosCMC
                iconName={"energia"}
                title={t("natural-energy")}
                subtitle={""}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <BeneficiosCMC
                iconName={"vegetal"}
                title={t("vegetable-protein")}
                subtitle={""}
              />

              <BeneficiosCMC
                iconName={"carbohidratos"}
                title={t("nt-carbohydrates")}
                subtitle={""}
              />
              <BeneficiosCMC
                iconName={"cafeína"}
                title={t("natural-caffeine")}
                subtitle={""}
              />
              <BeneficiosCMC
                iconName={"azúcares"}
                title={t("simple-sugars")}
                subtitle={
                  <>
                    <p className="mt-2 text-xs">{t("glucose-fructose")}</p>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

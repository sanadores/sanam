import React from "react";
import CardAplicacionesExitosas from "./CardAplicacionesExitosas";
import { useTranslations } from "next-intl";

export default function SeccionTwo() {
  const t = useTranslations();
  return (
    <div className="w-full bg-[#6C7F7D]/20 my-6 py-8 space-y-5 p-6">
      <p className="text-xl lg:text-2xl md:mx-36 font-bold">
        {t("success-stories")}
      </p>
      <div className="lg:flex justify-center space-y-5 md:space-y-0 lg:gap-5 px-5">
        {/* lg:flex justify-center items-center w-full lg:p-5 gap-[5rem] space-y-5 */}
        <CardAplicacionesExitosas
          iconType="aguacate"
          name={t("avocado")}
          subtitle={
            <>
              {/* <p className="text-sm">
                + {t("quaje")} {t("flower")}
              </p>
              <p className="text-sm">+ {t("leaf-area")}</p>
              <p className="text-xs">{t("refining-study")}</p> */}
              {/* <p className="text-sm">Aumento de la floración y cuajado de los frutos. </p>
              <p className="text-sm">Promueve mayor contenido de aceite en los frutos. </p> */}
              <p className="text-sm">{t("ag-success-aguacate-1")}</p>
              <p className="text-sm">{t("ag-success-aguacate-2")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="arroz"
          name={t("rice")}
          subtitle={
            <>
              <p className="text-sm">{t("ag-success-arroz-1")}</p>
              <p className="text-sm">{t("ag-success-arroz-2")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="caña"
          name={t("sugar-cane")}
          subtitle={
            <>
              <p className="text-sm">{t("ag-success-caña-1")}</p>
              <p className="text-sm">{t("ag-success-caña-2")}</p>
            </>
          }
        />
      </div>

      <div className="lg:flex justify-center space-y-5 md:space-y-0 lg:gap-5 px-5">
        {/*  lg:flex justify-center items-center w-full lg:p-5 gap-[5rem] space-y-5*/}
        <CardAplicacionesExitosas
          iconType="café"
          name={t("coffe")}
          subtitle={
            <>
              {/*  <p className="text-sm">+20% {t("productivity")}</p>
              <p className="text-sm">+1.5% {t("cup-profile")}</p> */}
              <p className="text-sm">{t("ag-success-cafe-1")}</p>
              <p className="text-sm">{t("ag-success-cafe-2")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="cacao"
          name={t("cocoa")}
          subtitle={
            <>
              {/* <p className="text-sm">+18% {t("productivity")}</p> */}
              <p className="text-sm">{t("ag-success-cacao-1")}</p>
              <p className="text-sm">{t("ag-success-cacao-2")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="frijol"
          name={t("bean")}
          subtitle={
            <>
              <p className="text-sm">{t("ag-success-frijol-1")}</p>
              <p className="text-sm">{t("ag-success-frijol-2")}</p>
            </>
          }
        />
      </div>

      <div className="lg:flex justify-center space-y-5 md:space-y-0 lg:gap-5 px-5">
        {/* lg:flex justify-center items-center w-full lg:p-5 mt-6 md:mt-0 gap-[5rem] space-y-5 */}
        <CardAplicacionesExitosas
          iconType="Lechuga"
          name={t("lettuce")}
          subtitle={
            <>
              {/* <p className="text-sm"> {t("pending")}</p> */}
              <p className="text-sm">{t("ag-success-hortaliza-1")}</p>
              <p className="text-sm">{t("ag-success-hortaliza-2")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="limón"
          name={t("lemon")}
          subtitle={
            <>
              <p className="text-sm">{t("ag-success-limon-1")}</p>
              <p className="text-sm">{t("ag-success-limon-2")}</p>
              {/*               <p className="text-sm">
                + {t("viability")} {t("flower")}
              </p>
              <p className="text-sm">+ {t("productivity")}</p>
              <p className="text-xs">{t("refining-study")}</p> */}
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="maíz"
          name={t("corn")}
          subtitle={
            <>
              <p className="text-sm">{t("ag-success-maiz-1")}</p>
              <p className="text-sm">{t("ag-success-maiz-2")}</p>
              {/* <p className="text-sm">+15% {t("height")}</p>
              <p className="text-sm">+11% {t("sheets")}</p>
              <p className="text-sm">
                +9% {t("weight")} {t("in")} {t("corn")}{" "}
              </p> */}
            </>
          }
        />
      </div>
      <div className="lg:flex justify-center space-y-5 md:space-y-0 lg:gap-5 px-5">
        {/* lg:flex justify-center items-center w-full lg:p-5 mt-6 md:mt-0 gap-[5rem] space-y-5 */}
        <CardAplicacionesExitosas
          iconType="Plátano/Banano"
          name={t("banana")}
          subtitle={
            <>
              <p className="text-sm">{t("ag-success-platano-1")}</p>
              <p className="text-sm">{t("ag-success-platano-2")}</p>
              {/*       {t("pending")}
              <p className="text-xs">{t("pending")}</p> */}
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="Tomate"
          name={t("tomato")}
          subtitle={<>
            <p className="text-sm">{t("ag-success-tomate-1")}</p>
            <p className="text-sm"> {t("ag-success-tomate-2")}</p>
            {/* {t("pending")}
            <p className="text-xs">{t("pending")}</p> */}
          </>}
        />
        <CardAplicacionesExitosas
          iconType="Uva"
          name={t("grape")}
          subtitle={<>
            <p className="text-sm">{t("ag-success-uva-1")}</p>
            <p className="text-sm">{t("ag-success-uva-2")}</p>
            {/*  {t("pending")}
            <p className="text-xs">{t("pending")}</p> */}
          </>}
        />
      </div>
    </div>
  );
}

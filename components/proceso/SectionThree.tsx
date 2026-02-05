import Image from "next/image";
import { useTranslations } from "next-intl";

export default function End() {
  const t = useTranslations();
  return (
    <>
      {/* QUE NOS PERMITE GENERAR */}

      <div className="flex mt-6 mx-24 ">
        <h1 className="uppercase text-4xl text-center font-semibold">
          {t("allows-generate")}
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center text-center px-[6rem] mt-2 mb-16 gap-14">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <Image
            className="p-3"
            width={230}
            height={230}
            src={"/img/proceso/icons/nos-permite-generar/web_contaminacion.svg"}
            alt="Contaminacion"
          />
          <p className="w-[10rem] h-10 ">{t("reduce-pollution")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <Image
            className="p-3"
            width={230}
            height={230}
            src={"/img/proceso/icons/nos-permite-generar/web_fertilidad.svg"}
            alt="Fertilidad"
          />
          <p className="w-[10rem] h-10 ">{t("favor-fertility")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            className="p-3"
            width={230}
            height={230}
            src={"/img/proceso/icons/nos-permite-generar/web_gases.svg"}
            alt="Gases"
          />
          <p className="w-[10rem] h-10 ">{t("reduce-emission")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            className="p-3"
            width={230}
            height={230}
            src={
              "/img/proceso/icons/nos-permite-generar/web_economia_circular.svg"
            }
            alt="Ambientales"
          />
          <p className="w-[10rem] h-10">{t("promote-circular-economy")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            className="p-3"
            width={230}
            height={230}
            src={"/img/proceso/icons/nos-permite-generar/web_empleo.svg"}
            alt="Empleo"
          />
          <p className="w-[10rem] h-10">{t("generaion-jobs")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            className="p-3"
            width={230}
            height={230}
            src={"/img/proceso/icons/nos-permite-generar/web_productores.svg"}
            alt="Dinero"
          />
          <p className="w-[10rem] h-10">{t("economically-producers")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            className="p-3"
            width={230}
            height={230}
            src={"/img/proceso/icons/nos-permite-generar/web_desarrollo.svg"}
            alt="Ecnonomia"
          />
          <p className="w-[10rem] h-10">{t("promote-rural-areas")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            className="p-3"
            width={230}
            height={230}
            src={"/img/proceso/icons/nos-permite-generar/web_agricultures.svg"}
            alt="Vida"
          />
          <p className="w-[10rem] h-10">{t("increase-life")}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-[12rem] lg:h-[6rem]">
        <div className="flex justify-center items-center px-5 w-full h-full bg-[#6C7F7D]/20">
          <p className="lg:w-[32rem] text-xl">{t("p-redue-pollution")}</p>
        </div>
        <div className="flex justify-center items-center px-5 w-full h-full bg-[#6C7F7D]/30">
          <p className="text-xl">{t("p-benefit-farmers")}</p>
        </div>
      </div>

      {/* AL FINAL */}

      <div className="flex flex-col my-5 lg:mt-20 mx-5 lg:mx-20 ">
        <h1 className="text-xl lg:text-4xl font-semibold uppercase">
          {t("the-end")}
        </h1>
        <h1 className="text-xl lg:text-4xl font-semibold">
          {t("our-contribution")}
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-6 mb-10 lg:mb-40 px-5 lg:px-20 gap-6 lg:gap-10 text-center">
        <div className="flex flex-col justify-center items-center ">
          <Image
            width={180}
            height={180}
            src={"/img/proceso/icons/al-final/web_planeta.svg"}
            alt="Planeta"
          />
          <p className="text-lg h-10">{t("cleaner-planet")}</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image
            width={180}
            height={180}
            src={"/img/proceso/icons/al-final/web_consumidor.svg"}
            alt="Personas"
          />
          <p className="text-lg h-10">{t("quality-consumers")}</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image
            width={180}
            height={180}
            src={"/img/proceso/icons/al-final/web_alimentos.svg"}
            alt="Bol"
          />
          <p className="text-lg h-10">{t("develop-sustainable")}</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image
            width={180}
            height={180}
            src={"/img/proceso/icons/al-final/web_dllo social.svg"}
            alt="Arbol"
          />
          <p className="text-lg h-10">{t("social-economic-development")}</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image
            width={180}
            height={180}
            src={"/img/proceso/icons/al-final/web_agricultura-82.svg"}
            alt="Planta"
          />
          <p className="text-lg h-10">{t("promote-sustainable")}</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image
            width={180}
            height={180}
            src={"/img/proceso/icons/al-final/web_suelos.svg"}
            alt="Caja"
          />
          <p className="text-lg h-10">{t("recover-clean")}</p>
        </div>
      </div>
    </>
  );
}

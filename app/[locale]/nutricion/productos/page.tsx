import React from "react";
import AporteMundo from "@/components/nuestros-productos/Aporte-Mundo";
import BannerTop from "@/components/nutricion/productos/BannerTop";
import SlideProductos from "@/components/nutricion/productos/SlideProductos";
import QuieresDistribuir from "@/components/agricultura/QuieresDistribuir";
import { ICardContent } from "@/types/CardContent";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Productos() {
  const t = useTranslations();
  const cardContentProps: ICardContent[] = [
    {
      imgUrl: "/img/nuestros-productos/web_Alimento.png",
      alt: "SUPERALIMENTO",
      textOverlay: t("superfood"),
      linkText: "WebMD.com",
      description:  t("np-webmd-labels"),
      linkUrl: "https://www.webmd.com/diet/what-to-know-about-coffee-fruit",
    },
    {
      imgUrl: "/img/nuestros-productos/web_Agricultores.png",
      alt: "APOYAMOS LOS CAFICULTORES",
      textOverlay: t("support-growers"),
      description: t("np-opportunity-coffe"),
    },
    {
      imgUrl: "/img/nuestros-productos/web_Medioambiente.png",
      alt: "BENEFICIAMOS EL MEDIO AMBIENTE",
      textOverlay: t("bennefit-environment"),
      description: t("np-transform-waste"),
    },
  ];

  return (
    <>
      <div>
        <BannerTop />
      </div>

      <div>
        <SlideProductos />
      </div>

      <AporteMundo cardContent={cardContentProps} />

      <div className="flex justify-center items-center w-full h-full lg:h-[8rem] shadow-md">
        <QuieresDistribuir disposicion="fila" />
      </div>
    </>
  );
}

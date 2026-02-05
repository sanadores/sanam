"use client";

import React from "react";
import Image from "next/image";
import "@/styles/proceso.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function OurImpact() {
  const t = useTranslations();

  /* Obtengo el texto y lo divido en dos partes usando los || */
  const p_impact_parts = t("p-impact-coffe").split("||");

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full bg-[#6C7F7D]/20" data-aos="fade-right">
        <div className="flex flex-col justify-center lg:w-1/2 p-20">
          <h1 className="text-xl font-bold uppercase"> {t("our-impact")}</h1>
          <p className="text-lg">
            {p_impact_parts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < p_impact_parts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="lg:w-1/2">
          <Image
            width={2000}
            height={1298}
            src={"/img/proceso/nuestro_impacto.png"}
            alt="banner proceso"
          />
        </div>
      </div>
    </>
  );
}


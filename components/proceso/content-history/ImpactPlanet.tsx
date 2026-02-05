"use client";

import React from "react";
import Image from "next/image";
import "@/styles/proceso.css";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

export default function ImpactPlanet() {
  const t = useTranslations();

  const p_impact_planet_parts = t("p-impact-planet").split("||");

  return (
    <>
      <div
        className="flex flex-col lg:flex-row w-full bg-[#6C7F7D]/20"
        data-aos="fade-right"
      >
        <div className="flex flex-col justify-center lg:w-1/2 py-3 px-20">
          <h1 className="text-xl font-bold uppercase"> {t("impact-planet")}</h1>
          <p className="text-lg">
            {p_impact_planet_parts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < p_impact_planet_parts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="lg:w-1/2">
          <Image
            width={1920}
            height={623}
            src={"/img/proceso/impacto.jpg"}
            alt="banner proceso"
          />
        </div>
      </div>
    </>
  );
}

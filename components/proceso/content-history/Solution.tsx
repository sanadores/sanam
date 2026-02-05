"use client";

import React from "react";
import Image from "next/image";
import AOS from "aos";
import "@/styles/proceso.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Solution() {
  const t = useTranslations();

  const patent_certificate_parts = t("patent-certificate-registration").split(
    "||"
  );

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden" data-aos="fade-down">
        <Image
          className="w-full h-60 lg:h-full"
          width={1920}
          height={923}
          src={"/img/proceso/la_solucion.png"}
          alt="banner proceso"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-3 lg:mx-24 gap-5 lg:gap-10 text-[#FFFFFF]">
          <div className="flex flex-col">
            <h1 className="lg:text-4xl font-bold uppercase">
              {" "}
              {t("the-solution")}
            </h1>
            <h2 className="lg:text-2xl font-semibold">
              {" "}
              {t("patented-technology")}
            </h2>
            <p className="lg:text-xl lg:w-[20rem]">
              {" "}
              {t("p-technology-solution")}
            </p>
          </div>
          <div>
            <p className="lg:text-lg">
              {patent_certificate_parts.map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < patent_certificate_parts.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

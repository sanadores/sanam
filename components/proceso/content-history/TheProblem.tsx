"use client";

import React from "react";
import Image from "next/image";
import AOS from "aos";
import "@/styles/proceso.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function TheProblem() {
  const t = useTranslations();

  const p_problem_parts = t("p-problem-love-coffe").split("||");

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <>
      <div
        className="flex flex-col lg:flex-row bg-[#6C7F7D]"
        data-aos="fade-left"
      >
        <div className="lg:w-1/2">
          <Image
            width={960}
            height={623}
            src={"/img/proceso/el_problema.png"}
            alt="problema"
          />
        </div>
        <div className="lg:w-1/2 my-14 px-20 text-[#FFFFFF]">
          <h1 className="text-2xl font-bold uppercase">{t("the-problem")}</h1>
          <h1 className="text-xl font-bold">{t("love-coffe")}</h1>

          <p className="text-lg">
            {p_problem_parts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < p_problem_parts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

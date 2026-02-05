"use client";
import "../../styles/home.css";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Bienestar() {
  const t = useTranslations();
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);

  const handleFlip1 = () => setFlipped1(!flipped1);
  const handleFlip2 = () => setFlipped2(!flipped2);
  const handleFlip3 = () => setFlipped3(!flipped3);

  return (
    <section className="flex flex-wrap justify-center items-center text-center py-[3rem] gap-x-8">
      <div className="w-full p-2">
        <p className="text-2xl font-bold">
          {t("home-impact")} {t("coffe-fruit-minuscula")}
        </p>
      </div>
      {/* CARD 1 */}
      <div className={`flip-card ${flipped1 ? "flipped" : ""} w-full flex flex-col justify-center items-center lg:w-1/3 p-5`}>
        <div className="flip-card-inner">
          {/* Card frontal */}
          <div className="flip-card-front flex flex-col justify-center items-center">
            <Image
              width={300}
              height={500}
              src="/img/inicio/icons/web_icono bienestar.png"
              alt="bienestar"
            />
            <h1 className="text-2xl pt-3 font-bold uppercase">
              {t("welfare")}
            </h1>
            <p className="pt-2">{t("home-welfare")}</p>
          </div>
          {/* Card trasera */}
          <div className="flip-card-back flex flex-col justify-center items-center">
            <p className="p-10 text-2xl">{t("home-certifications")}</p>
          </div>
        </div>
        <button
          className="p-2 rounded-2xl w-full mt-10 text-md md:text-xl font-bold text-white bg-[#04AF30] hover:bg-green-900"
          type="button"
          onClick={handleFlip1}
        >
          {t("lear-more")}
        </button>
      </div>
      {/* CARD 2 */}
      <div className={`flip-card ${flipped2 ? "flipped" : ""} w-full flex flex-col justify-center items-center lg:w-1/3 p-5`}>
        <div className="flip-card-inner">
          {/* Card frontal */}
          <div className="flip-card-front flex flex-col justify-center items-center">
            <Image
              className="mt-7"
              width={300}
              height={500}
              src="/img/inicio/icons/web_icono inclusion.png"
              alt="bienestar"
            />
            <h1 className="text-2xl pt-3 font-bold uppercase">
              {t("inclusion")}
            </h1>
            <p className="pt-2">{t("home-inclusion")}</p>
          </div>
          {/* Card trasera */}
          <div className="flip-card-back flex flex-col justify-center items-center">
            <p className="p-10 text-2xl">{t("home-financially")}</p>
          </div>
        </div>
        <button
          className="p-2 rounded-2xl w-full mt-10 text-md md:text-xl font-bold text-white bg-[#04AF30] hover:bg-green-900"
          type="button"
          onClick={handleFlip2}
        >
          {t("lear-more")}
        </button>
      </div>
      {/* CARD 3 */}
      <div className={`flip-card ${flipped3 ? "flipped" : ""} w-full flex flex-col justify-center items-center lg:w-1/3 p-5`}>
        <div className="flip-card-inner">
          <div className="flip-card-front flex flex-col justify-center items-center">
            <Image
              width={300}
              height={500}
              src="/img/inicio/icons/web_icono sostenibilidad.png"
              alt="bienestar"
            />
            <h1 className="text-2xl pt-3 font-bold uppercase">
              {t("sustainability")}
            </h1>
            <p className="pt-2">{t("home-sustainability")}</p>
          </div>
          <div className="flip-card-back flex flex-col justify-center items-center">
            <p className="p-10 text-2xl">{t("home-promote")}</p>
          </div>
        </div>
        <button
          className="p-2 rounded-2xl w-full mt-10 text-md md:text-xl font-bold text-white bg-[#04AF30] hover:bg-green-900"
          type="button"
          onClick={handleFlip3}
        >
          {t("lear-more")}
        </button>
      </div>
    </section>
  );
}

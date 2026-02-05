"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const flagImages = [
  {
    country: "Estados Unidos",
    url: "/img/inicio/banderas/banderas web sanam_eua.png",
  },
  {
    country: "China",
    url: "/img/inicio/banderas/banderas web sanam_chi.png",
  },
  {
    country: "Japón",
    url: "/img/inicio/banderas/banderas web sanam_jap.png",
  },
  {
    country: "Brasil",
    url: "/img/inicio/banderas/banderas web sanam_bra.png",
  },
  {
    country: "México",
    url: "/img/inicio/banderas/banderas web sanam_mex.png",
  },
  {
    country: "Australia",
    url: "/img/inicio/banderas/banderas web sanam_aus.png",
  },
  {
    country: "Ecuador",
    url: "/img/inicio/banderas/banderas web sanam_ecu.png",
  },
  {
    country: "España",
    url: "/img/inicio/banderas/banderas web sanam_esp.png",
  },
  {
    country: "Holanda",
    url: "/img/inicio/banderas/banderas web sanam_hol.png",
  },
  {
    country: "Panamá",
    url: "/img/inicio/banderas/banderas web sanam_pan.png",
  },
  {
    country: "Reino Unido",
    url: "/img/inicio/banderas/banderas web sanam_RU.png",
  },
];

export default function PresenciaBanderas() {
  const t = useTranslations();
  const refCarrusel = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1);

  useEffect(() => {
    const carrusel = refCarrusel.current;
    const interval = 2000;

    const scroll = () => {
      const scrollAmount = carrusel.clientWidth;
      if (carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth) {
        setScrollDirection(-1);
      } else if (carrusel.scrollLeft <= 0) {
        setScrollDirection(1);
      }

      carrusel.scrollLeft += scrollAmount * scrollDirection;
    };

    const intervalId = setInterval(scroll, interval);

    return () => clearInterval(intervalId);
  }, [scrollDirection]);

  return (
    <>
      <div className="mt-8 px-2 lg:px-40 xl:px-40 w-full">
        <h1 className="text-4xl font-bold my-6">{t("our-products")}</h1>
      </div>
      <div className="flex justify-center items-center w-full py-3">
        <div
          className="w-full flex overflow-x-hidden scroll-smooth"
          ref={refCarrusel}
          style={{ scrollBehavior: "smooth" }}
        >
          {flagImages.map((flag, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-shrink-0 mx-4"
            >
              <Image
                src={flag.url}
                alt={`Bandera de ${flag.country}`}
                width={250}
                height={150}
                className="object-contain rounded-2xl shadow-xl mb-4"
              />
              <p className="text-center mt-2 font-bold text-2xl">
                {flag.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

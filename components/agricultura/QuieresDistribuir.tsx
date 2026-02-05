"use client";
import { IDistributorsLinksProps } from "@/types/DistributorsLinks";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function QuieresDistribuir({
  disposicion,
}: IDistributorsLinksProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  // Función para construir la nueva URL con el idioma cambiado
  const buildNewUrl = (newLocale: string) => {
    const pathParts = pathname.split("/");
    pathParts[1] = newLocale; // Reemplaza el idioma en la ruta
    return pathParts.join("/");
  };
  if (disposicion === "columna") {
    return (
      <div className="flex flex-col w-full px-5 lg:px-20 py-12 gap-10">
        <Link
          className="group flex flex-col items-center text-center p-6 rounded-3xl shadow-lg ease-in-out bg-[#04AF30] hover:bg-[#6C7F7D]/10 transition duration-300"
          href={`/${locale}/contacto`}
        >
          <span className="text-3xl font-bold text-[#FFFFFF] group-hover:text-[#6B6B6B] transition duration-300">
            {t("contact-us")}
          </span>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col md:flex-row justify-center w-full p-5 lg:px-20 gap-10">
        <Link
          className="group flex flex-col items-center text-center w-1/2 p-6 rounded-3xl shadow-lg ease-in-out bg-[#04AF30] hover:bg-[#6C7F7D]/10 transition duration-300"
          href={`/${locale}/contacto`}
        >
          <span className="text-3xl font-bold text-[#FFFFFF] group-hover:text-[#6B6B6B] transition duration-300">
            {t("contact-us")}
          </span>
        </Link>
      </div>
    );
  }
}

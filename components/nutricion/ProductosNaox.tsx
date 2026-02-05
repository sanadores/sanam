"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function ProductosNaox() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        className="w-full h-auto"
        width={1920}
        height={590}
        src={"/img/nutricion-humana/web_contendor2.png"}
        alt="productos naox"
      />

      <div className="absolute inset-0 flex justify-end items-center md:m-12 pr-[1.5rem] md:pr-[1rem] lg:pr-[4rem] 2xl:pr-[8rem] text-[#FFFFFF]">
        <Link
          href={`/${locale}/nutricion/productos`}
          className="md:w-[20rem] lg:w-[32rem] 2xl:w-[40rem] p-2 md:p-3 lg:p-6 2xl:p-10 md:text-2xl lg:text-3xl 2xl:text-4xl text-center font-bold rounded-lg md:rounded-xl lg:rounded-3xl 2xl:rounded-3xl cursor-pointer bg-[#6C7F7D] hover:bg-[#04AF30]"
        >
          {t("discover-more")}
        </Link>
      </div>
    </div>
  );
}

"use client";
import "../../styles/about-section.css";
import NavigationSanam from "../shared/NavigationSanam";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Industrias() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1]; // Extrae el idioma de la ruta
  return (
    <section className="py-10">
      <div className="md:grid md:grid-cols-3 md:gap-10 justify-center space-x-2 items-center text-center">
        <NavigationSanam
          route={`/${locale}/agricultura`}
          styleDiv="flex flex-col justify-center items-center rounded-xl p-4 h-[8rem] shadow-xl bg-[#6C7F7D]"
          styleSpan="text-xl font-bold text-[#FFFFFF]"
          title={t("agriculture")}
        />
        <NavigationSanam
          route={`/${locale}/nutricion`}
          styleDiv="flex flex-col justify-center items-center rounded-xl p-4 h-[8rem] shadow-xl bg-[#6C7F7D]"
          styleSpan="text-xl font-bold text-[#FFFFFF]"
          title={t("nutrition") + " " + t("and") + " " + t("human-health")}
        />
        <NavigationSanam
          route={`/${locale}/cuidado-personal`}
          styleDiv="flex flex-col justify-center items-center rounded-xl p-4 h-[8rem] shadow-xl bg-[#6C7F7D]"
          styleSpan="text-xl font-bold text-[#FFFFFF]"
          title={t("care")}
        />
      </div>
    </section>
  );
}

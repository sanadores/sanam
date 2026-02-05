"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface navbarCustomProps {
  activeLink: string;
  /* handleClick: (ev: React.MouseEvent<HTMLButtonElement>) => void; */
  handleClick: (ev: React.MouseEvent<HTMLElement>) => void;
}

export default function NavbarCustom({
  activeLink,
  handleClick,
}: navbarCustomProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const buildNewUrl = (newLocale: string) => {
    const pathParts = pathname.split("/");
    pathParts[1] = newLocale;
    return pathParts.join("/");
  };

  return (
    <>
      {/* Opciones de navegación del menú principal */}
      <div className="p-[1rem]">
        <Link
          href={`/${locale}/agricultura`}
          onClick={handleClick}
          className={` hover:text-green-400  ${
            activeLink === "agricultura" ? "text-green-400" : ""
          }`}
        >
          {t("agriculture")}
        </Link>
      </div>

      <span className="border-l h-[3rem] border-gray-300"></span>

      <div className="p-[1rem]">
        <Link
          href={`/${locale}/nutricion`}
          onClick={handleClick}
          className={` hover:text-green-400  ${
            activeLink === "nutricion" ? "text-green-400" : ""
          }`}
        >
          {t("nutrition")} {t("and")} {t("human-health")}
        </Link>
      </div>

      <span className="border-l h-[3rem] border-gray-300"></span>

      <div className=" p-[1rem]">
        <Link
          href={`/${locale}/cuidado-personal`}
          onClick={handleClick}
          className={` hover:text-green-400  ${
            activeLink === "cuidado-personal" ? "text-green-400" : ""
          }`}
        >
          {t("care")}
        </Link>
      </div>

      <span className="border-l h-[3rem] border-gray-300"></span>

      <div className="p-[1rem]">
        <Link
          href={`/${locale}/proceso`}
          onClick={handleClick}
          className={` hover:text-green-400  w-1/2 ${
            activeLink === "por definirse" ? "text-green-400" : ""
          }`}
        >
          {t("our-two")} {t("contribution")}
        </Link>
      </div>

      <span className="border-l h-[3rem] border-gray-300"></span>

      {/* Botones para cambio de idioma */}
      <div className="flex justify-center items-center ml-10 font-bold text-[#6C7F7D]">
        <Link href={buildNewUrl("en")}>
          {/* <button className="p-3">EN</button> */}
          <button className="p-3" onClick={handleClick}>EN</button>
        </Link>

        <span className="border-x h-[1rem] mr-2 border-gray-300"></span>

        <Link href={buildNewUrl("es")}>
        {/*   <button>ES</button> */}
        <button onClick={handleClick}>ES</button>
        </Link>
      </div>
    </>
  );
}

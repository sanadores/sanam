"use client";
import { FaHeart } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <footer className="px-5 lg:px-40 pt-8 pb-1 text-[#6B6B6B] bg-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row justify-between mx-auto">
        <div className="my-5">
          <div className="flex flex-col">
            <Link className="navbar-brand mr-5" href="/">
              <Image
                width={200}
                height={80}
                src="/img/logo-sanam.JPG"
                alt="Logo Sanam"
              />
            </Link>
          </div>
          <p className="font-bold my-2 text-lg">
            {t("the")} <span className="">{t("r-evolution")}</span> {t("for")}{" "}
            {t("coffe")}
          </p>
          <div className="flex items-center mt-1 gap-2">
            <Link
              href="https://www.facebook.com/sanadores-ambientales"
              passHref
              target="_blank"
            >
              <Image
                width={26}
                height={26}
                src={"/img/inicio/icons/web_facebook.png"}
                alt="facebook"
              />
            </Link>
            <Link
              href="https://www.instagram.com/sanadores-ambientales"
              passHref
              target="_blank"
            >
              <Image
                width={26}
                height={26}
                src={"/img/inicio/icons/web_instagram.png"}
                alt="instagram"
              />
            </Link>
            <Link
              href="https://es.linkedin.com/company/sanadores-ambientales"
              passHref
              target="_blank"
            >
              <Image
                width={26}
                height={26}
                src={"/img/inicio/icons/web_linkedin.png"}
                alt="linkedin"
              />
            </Link>
          </div>
        </div>

        <div className="my-5">
          <h2 className="font-bold text-2xl">{t("company")}</h2>
          <ul className="justify-center">
            <li className="">
              <Link href={`/${locale}/proceso`}>{t('our-two')} {t("contribution")}</Link>
            </li>
          </ul>
        </div>

        <div className="my-5">
          <h2 className="font-bold text-2xl">{t("industries")}</h2>
          <ul className="justify-center">
            <li className="">
              <Link href={`/${locale}/agricultura`}>{t("agriculture")}</Link>
            </li>
            <li className="">
              <Link href={`/${locale}/nutricion`}>
                {" "}
                {t("nutrition")} {t("and")} {t("human-health")}{" "}
              </Link>
            </li>
            <li className="">
              <Link href={`/${locale}/cuidado-personal`}>{t("care")}</Link>
            </li>
          </ul>
        </div>

        <div className="my-5">
          <h2 className="font-bold text-2xl">{t("blog")}</h2>
          <ul className="justify-center">
            <li className="">
              <Link href={`/${locale}/contacto`}>{t("contact")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full text-center flex items-center justify-center mb-3">
        <p className="inline-block">
          {t("made")} {t("with")}{" "}
          <FaHeart className="text-blue-700 inline-block" /> {t("by")}{" "}
          <Link
            href="https://google.com/search?q=novahold.com"
            target="_blank"
            className="inline-block font-bold"
          >
            {t("novahold")}
          </Link>
        </p>
      </div>
    </footer>
  );
}

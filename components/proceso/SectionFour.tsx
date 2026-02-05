import Image from "next/image";
import { useTranslations } from "next-intl";
export default function SectionFour() {
  const t = useTranslations();
  return (
    <>
      <div className="flex items-center px-20 lg:mt-16">{/* xl:mt-16 */}
        <h1 className="text-4xl text-center font-semibold">
          {t("our-awards")}
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 px-10 lg:px-40 gap-6 justify-center">
        <Image
          width={218}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-uno.png"}
          alt="Reconocimiento uno"
        />

        <Image
          width={199}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-dos.png"}
          alt="Reconocimiento dos"
        />

        <Image
          width={198}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-tres.png"}
          alt="Reconocimiento tres"
        />
        <Image
          width={198}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-cuatro.png"}
          alt="Reconocimiento cuatro"
        />
        <Image
          width={198}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-cinco.png"}
          alt="Reconocimiento cinco"
        />
        <Image
          width={198}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-ocho.png"}
          alt="Reconocimiento seis"
        />

        <Image
          width={198}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-siete.png"}
          alt="Reconocimiento siete"
        />
        <Image
          width={198}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-nueve.png"}
          alt="Reconocimiento ocho"
        />
        <Image
          width={198}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-diez.png"}
          alt="Reconocimiento nueve"
        />
        <Image
          width={198}
          height={198}
          src={"/img/proceso/reconocimientos/reconocimiento-seis.png"}
          alt="Reconocimiento diez"
        />
      </div>
    </>
  );
}

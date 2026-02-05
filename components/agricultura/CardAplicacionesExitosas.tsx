import React from "react";
import Image from "next/image";

interface CardAplicacionesExitosasProps {
  iconType: string;
  name: string;
  subtitle: React.ReactNode;
}

export default function CardAplicacionesExitosas({
  iconType,
  name,
  subtitle,
}: CardAplicacionesExitosasProps) {
  // Determinar el icono basado en el tipo de semilla
  const renderIcon = () => {
    switch (iconType) {
      case "frijol":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_frijol.png"
            alt="Frijol"
          />
        );
      case "arroz":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_arroz.png"
            alt="arroz"
          />
        );
      case "maíz":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_maiz.png"
            alt="maiz"
          />
        );
      case "aguacate":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_aguacate.png"
            alt="aguacate"
          />
        );
      case "café":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_cafe.png"
            alt="cafe"
          />
        );
      case "cacao":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_cacao.png"
            alt="cacao"
          />
        );
      case "caña":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_caña.png"
            alt="caña"
          />
        );
      case "limón":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_limon.png"
            alt="limon"
          />
        );
      case "Lechuga":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_lechuga.png"
            alt="lechuga"
          />
        );
      case "Tomate":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_tomate.png"
            alt="tomate"
          />
        );
      case "Uva":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_uva.png"
            alt="uva"
          />
        );
      case "Plátano/Banano":
        return (
          <Image
            width={175}
            height={175}
            src="/img/agricultura/section-two/web_platano.png"
            alt="platano"
          />
        );
      default:
        return null; // Puedes poner un icono por defecto si quieres
    }
  };

  return (
    /*  */
    <div className="w-full  lg:flex lg:items-center">{/* lg:w-1/4 */}
      <div className="lg:w-1/4 flex justify-center">{renderIcon()}</div>
      <div className="lg:w-2/3 h-full lg:flex lg:flex-col lg:justify-start lg:items-start text-center gap-y-5 lg:pl-5 sanam-gray ">
        <h3 className="font-bold text-xl w-full text-center lg:text-left">{name}</h3>
        <div className="lg:text-start">{subtitle}</div>
      </div>
    </div>
  );
}

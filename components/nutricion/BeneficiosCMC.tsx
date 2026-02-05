import React from "react";
import Image from "next/image";

interface BeneficiosCafeProps {
  iconName: string;
  title: string;
  subtitle: React.ReactNode;
}

export default function BeneficiosCMC({
  iconName,
  title,
  subtitle,
}: BeneficiosCafeProps) {
  const renderIcon = () => {
    switch (iconName) {
      case "vegano":
        return (
          <Image
            width={90}
            height={100}
            src="/img/nutricion-humana/icons/web_vegano.png"
            alt="vegano"
          />
        );
      case "antioxidantes":
        return (
          <Image
            width={90}
            height={100}
            src="/img/nutricion-humana/icons/web_antioxidantes-40.png"
            alt="antioxidantes"
          />
        );
      case "calorías":
        return (
          <Image
            width={90}
            height={100}
            src="/img/nutricion-humana/icons/web_calorias.png"
            alt="calorías"
          />
        );
        case "energia":
        return (
          <Image
            width={90}
            height={100}
            src="/img/nutricion-humana/icons/energy.png"
            alt="calorías"
          />
        );
      case "azúcares":
        return (
          <Image
            width={90}
            height={100}
            src="/img/nutricion-humana/icons/web_azucar.png"
            alt="azúcares"
          />
        );
      case "vegetal":
        return (
          <Image
            width={90}
            height={100}
            src="/img/nutricion-humana/icons/web_proteina.png"
            alt="vegetal"
          />
        );
      case "carbohidratos":
        return (
          <Image
            width={90}
            height={100}
            src="/img/nutricion-humana/icons/web_carbohidratos-44.png"
            alt="carbohidratos"
          />
        );
      case "cafeína":
        return (
          <Image
            width={90}
            height={100}
            src="/img/nutricion-humana/icons/web_cafeina.png"
            alt="cafeína"
          />
        );

      default:
        return null; // Puedes poner un icono por defecto si quieres
    }
  };

  return (
    <div className="flex flex-col justify-center items-center md:w-[10rem]">
      <div className="flex justify-center items-center">{renderIcon()}</div>
      <div className="md:h-10">
        <h3 className="mt-2 text-sm md:text-base">
          {title} {subtitle}
        </h3>
      </div>
    </div>
  );
}

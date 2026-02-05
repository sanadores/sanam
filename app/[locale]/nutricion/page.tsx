import BeneficioFruta from "@/components/nutricion/BeneficioFruta";
import SlideImagenes from "@/components/nutricion/SlideImagenes";
import ConcentradoBanner from "@/components/nutricion/ConcentradoBanner";
import ProductosBanner from "@/components/nutricion/ProductosBanner";
import ProductosNaox from "@/components/nutricion/ProductosNaox";
import SaludHumana from "@/components/nutricion/SaludHumana";
import QuieresDistribuir from "@/components/agricultura/QuieresDistribuir";

export default function Nutricion() {
  return (
    <>
      <div>
        <ConcentradoBanner />
      </div>

      <div>
        <ProductosBanner />
      </div>

      <div>
        <BeneficioFruta />
      </div>

      <div>
        <SlideImagenes />
      </div>

      <div className="my-5 md:my-5 lg:m-5 2xl:m-5">
        <SaludHumana />
      </div>

      <div>
        <ProductosNaox />
      </div>
      
      <div className="flex justify-center items-center w-full h-full lg:h-[10rem] shadow-md">
        <QuieresDistribuir disposicion="fila" />
      </div>
    </>
  );
}

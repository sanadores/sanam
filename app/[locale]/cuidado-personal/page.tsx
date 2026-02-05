import SectionOne from "@/components/cuidado-personal/SectionOne";
import SectionTwo from "@/components/cuidado-personal/SectionTwo";
import SectionThree from "@/components/cuidado-personal/SectionThree";
import SectionFour from "@/components/cuidado-personal/SectionFour";
import SectionFive from "@/components/cuidado-personal/SectionFive";
import SectionSix from "@/components/cuidado-personal/SectionSix";
import QuieresDistribuir from "@/components/agricultura/QuieresDistribuir";

function CuidadoPersonal() {
  return (
    <>
      <div>
        <SectionOne />
      </div>
      <div>
        <SectionTwo />
      </div>
      <div>
        <SectionThree />
      </div>
      <div>
        <SectionFour />
      </div>
      <div>
        <SectionFive />
      </div>
      <div>
        <SectionSix />
      </div>
      <div className="flex justify-center items-center w-full h-full lg:h-[10rem] shadow-md">
        <QuieresDistribuir disposicion="fila" />
      </div>
    </>
  );
}

export default CuidadoPersonal;

import SectionOne from "@/components/proceso/SectionOne";
import SectionTwo from "@/components/proceso/SectionTwo";
import SectionThree from "@/components/proceso/SectionThree";
import SectionFour from "@/components/proceso/SectionFour";
import SectionFive from "@/components/proceso/SectionFive";

function Proceso() {
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
      <div className="py-8 bg-[#6C7F7D]/20">
        <SectionFive />
      </div>
    </>
  );
}

export default Proceso;

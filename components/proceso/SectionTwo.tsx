import ImpactPlanet from "@/components/proceso/content-history/ImpactPlanet";
import OurImpact from "@/components/proceso/content-history/OurImpact";
import Solution from "@/components/proceso/content-history/Solution";
import TheProblem from "@/components/proceso/content-history/TheProblem";

export default function SectionTwo() {
  return (
    <>
      <div>
        <OurImpact />
      </div>
      <div>
        <TheProblem />
      </div>
      <div>
        <ImpactPlanet />
      </div>
      <div>
        <Solution />
      </div>
    </>
  );
}

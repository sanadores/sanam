import SeccionFour from "@/components/agricultura/SeccionFour";
import SeccionOne from "@/components/agricultura/SeccionOne";
import SeccionThree from "@/components/agricultura/SeccionThree";
import SeccionTwo from "@/components/agricultura/SeccionTwo";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <SeccionOne />
      </div>
      <div>
        <SeccionTwo />
      </div>
      <div>
        <SeccionThree />
      </div>
      <div>
        <SeccionFour />
      </div>
      {/* <EnlacesDistribuir/> */}
      {/* Comentado por no utilidad hasta el momento */}
    </>
  );
}

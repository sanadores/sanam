import "@/styles/cuidado-personal.css";
import { useTranslations } from "next-intl";

export default function SectionSix() {
  const t = useTranslations();
  return (
    <div className="flex flex-col mt-10">
      <div className="flex pl-[4rem] w-full">
        <span className="text-3xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-left ">
          {t("advantages")}
        </span>
      </div>

      <div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 justify-center items-center px-14">

        <div className="flex justify-center items-center m-5 h-[10rem] rounded-2xl bg-[#6C7F7D]/20">
          <h1 className="text-center text-xl sm:text-xl md:text-xl font-bold p-5">
            {t("coffe-sustainable")}
          </h1>
        </div>

        <div className="flex justify-center items-center m-5 h-[10rem] rounded-2xl bg-[#6C7F7D]/20">
          <h1 className="text-center text-xl sm:text-xl md:text-xl font-bold p-5">
            {t("100-integrity")}
          </h1>
        </div>
        <div className="flex justify-center items-center m-5 h-[10rem] rounded-2xl bg-[#6C7F7D]/20">
          <h1 className="text-center text-xl sm:text-xl md:text-xl font-bold p-5">
            {t("animal-testing")}
          </h1>
        </div>
        <div className="flex justify-center items-center m-5 h-[10rem] rounded-2xl bg-[#6C7F7D]/20">
          <h1 className="text-center text-xl sm:text-xl md:text-xl font-bold p-5">
            {t("inci")}
          </h1>
        </div>
        <div className="flex justify-center items-center m-5 h-[10rem] rounded-2xl bg-[#6C7F7D]/20">
          <h1 className="text-center text-xl sm:text-xl md:text-xl font-bold p-5">
            {t("patented-tecnology-dual")}
          </h1>
        </div>
        <div className="flex justify-center items-center m-5 h-[10rem] rounded-2xl bg-[#6C7F7D]/20">
          <h1 className="text-center text-xl sm:text-xl md:text-xl font-bold p-5">
            {t("easy-adaptability")}
          </h1>
        </div>
        <div className="flex justify-center items-center m-5 h-[10rem] rounded-2xl shadow-lg bg-[#6C7F7D]/20">
          <h1 className="text-center text-xl sm:text-xl md:text-xl font-bold p-5">
            {t("global-compliance")}
          </h1>
        </div>
        <div className="flex justify-center items-center m-5 h-[10rem] rounded-2xl bg-[#6C7F7D]/20">
          <h1 className="text-center text-xl sm:text-xl md:text-xl font-bold p-5">
            {t("market-antioxidant")}
          </h1>
        </div>
      </div>
    </div>
  );
}

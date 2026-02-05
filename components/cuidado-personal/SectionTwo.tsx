import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SectionTwo() {
  const t = useTranslations();
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row mb-[4rem] w-full h-full">
        <div className="w-full h-full">
          <Image
            src="/img/cuidado-personal/concentrado-cafe.jpg"
            width={800}
            height={300}
            alt="concetrado de cafe"
          />
        </div>
        <div className="flex justify-center items-center lg:w-full 2xl:w-[168rem] bg-[#6C7F7D]/20">
          <p className="text-base md:text-md lg:text-3xl 2xl:text-4xl font-bold p-10 lg:w-[40rem] 2xl:w-[60rem]">
            {t("cp-process-naox")}
          </p>
        </div>
      </div>
    </>
  );
}

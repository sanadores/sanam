import { useTranslations } from "next-intl";

export default function SectionOne() {
  const t = useTranslations();
  return (
    <div className="relative overflow-hidden">
      <video
        className="w-full h-auto"
        width="1270"
        height="720"
        src="/img/proceso/banner-proceso-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center gap-5 m-20">
        <h1 className="text-2xl md:text-6xl lg:text-6xl font-bold uppercase text-[#FFFFFF]">
          + {t("rethink")}
        </h1>
        <h1 className="text-2xl md:text-6xl lg:text-6xl font-bold uppercase text-[#FFFFFF]">
          + {t("recycle")}
        </h1>
        <h1 className="text-2xl md:text-6xl lg:text-6xl font-bold uppercase text-[#FFFFFF]">
          + {t("empower")}
        </h1>
      </div>
    </div>
  );
}

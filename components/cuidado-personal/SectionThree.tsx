"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/cuidado-personal.css";

export default function SectionThree() {
  const t = useTranslations();
  return (
    <>
      <Swiper
        className="text-center body-carrusel"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
          <h1 className="font-bold text-2xl mb-2 uppercase">
            {t("antioxidant")} {t("potential")}
          </h1>
          <h1 className="font-bold text-2xl mb-2">{t("80-90")}</h1>
          <p className="text-2xl font-semibold w-[20rem] md:w-full lg:w-full">
            {t("cp-antioxidant-capacity")}
          </p>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
          <div className="font-bold text-2xl mb-2">{t("five-more")}</div>
          <div className="font-bold text-2xl mb-2">
            {t("polyphenols")} {t("100-gr")}
          </div>
          <p className="text-2xl font-semibold w-[20rem] md:w-full lg:w-full">
            {t("cp-compared-te-grapes")}
          </p>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
          <h1 className="font-bold text-2xl mb-2">
            {t("antioxidant")} {t("potential")}
          </h1>
          <div className="font-bold text-2xl mb-2">{t("orac")}</div>
          <p className="text-2xl font-semibold">{t("100-gr")}</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

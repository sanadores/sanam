"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "/styles/carrusel.css";

export default function SlideImagenes() {
  const t = useTranslations();

  return (
    <div className="relative w-full overflow-hidden z-10">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        centeredSlides={true}
        slidesPerView={"auto"}
        className="flex justify-center items-center h-screen md:h-[36rem] 2xl:h-screen"
      >
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
            <Image
              alt="Deporte"
              src="/img/nutricion-humana/imagenes-carrusel/carrusel sanam_sport.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 text-[#FFFFFF] z-20">
              <div className="flex flex-col justify-center items-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-5xl md:px-10 md:py-4 font-custom font-bold">
                  {t("nt-sport")}
                </h1>
                <p className="text-sm md:text-2xl lg:text-2xl md:px-10 md:py-4">
                  {t("nt-sport-subtitle")}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
            <Image
              alt="Oficina"
              src="/img/nutricion-humana/carrusel sanam_office.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 text-[#FFFFFF] z-20">
              <div className="flex flex-col justify-center items-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-5xl md:px-10 md:py-4 font-custom font-bold">
                  {t("nt-work")}
                </h1>
                <p className="text-sm md:text-2xl lg:text-2xl md:px-10 md:py-4">
                  {t("nt-work-subtitle")}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 opacity-30 z-20 bg-black"></div>
            <Image
              alt="Hogar"
              src="/img/nutricion-humana/imagenes-carrusel/carrusel sanam_home.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 z-20 text-[#FFFFFF]">
              <div className="flex flex-col justify-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-5xl md:px-10 md:py-4 font-custom font-bold">
                  {t("nt-home")}
                </h1>
                <p className="text-sm md:text-2xl lg:text-2xl md:px-10 md:py-4">
                  {t("nt-home-subtitle")}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
            <Image
              alt="Niños"
              src="/img/nutricion-humana/imagenes-carrusel/carrusel sanam_students.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 z-20 text-[#FFFFFF]">
              <div className="flex flex-col justify-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-5xl md:px-10 md:py-4 font-custom font-bold">
                  {t("nt-school")}
                </h1>
                <p className="text-sm md:text-2xl lg:text-2xl md:px-10 md:py-4">
                  {t("nt-school-subtitle")}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
            <Image
              alt="Restaurante"
              src="/img/nutricion-humana/imagenes-carrusel/carrusel sanam_restaurant.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 z-20 text-[#FFFFFF]">
              <div className="flex flex-col justify-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-5xl md:px-10 md:py-4 font-custom font-bold">
                  {t("nt-horeca")}
                </h1>
                <p className="text-sm md:text-2xl lg:text-2xl md:px-10 md:py-4">
                  {t("nt-horeca-subtitle")}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
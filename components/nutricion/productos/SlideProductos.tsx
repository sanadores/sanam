"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "/styles/carrusel.css";


export default function SlideProductos() {
  const t = useTranslations();
  return (<>
    <div className="relative w-full overflow-hidden z-10">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        centeredSlides={true}
        slidesPerView={"auto"}
        className="flex justify-center items-center h-screen md:h-[40rem] 2xl:h-screen"
      >
        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
            <Image
              alt="naox"
              src="/img/nuestros-productos/naox.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 text-[#FFFFFF] z-20">
              <div className="flex flex-col justify-center items-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-5xl md:px-10 md:py-4 font-custom font-bold">
                  {t("coffe-fruit") + " " + t("np-perfect-anywhere")}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
            <Image
              alt="naox-vital"
              src="/img/nuestros-productos/naox-vital.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 text-[#FFFFFF] z-20">
              <div className="flex flex-col justify-center items-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-3xl md:px-10 md:py-4 font-custom font-bold">
                  {t("coffe-fruit") + " " + t("in") + " " + t("np-four-ingredients")}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 opacity-30 z-20 bg-black"></div>s
            <Image
              alt="naox-stone"
              src="/img/nuestros-productos/naox-stone.png"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 z-20 text-[#FFFFFF]">
              <div className="flex flex-col justify-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-3xl md:px-10 md:py-4 font-custom font-bold">
                  {t("np-drink-designed-prevent")}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
            <Image
              alt="naox-life"
              src="/img/nuestros-productos/maxlife.jpg"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex justify-start items-center md:m-12 z-20 text-[#FFFFFF]">
              <div className="flex flex-col justify-center m-5 p-2 md:m-0 md:p-0 md:w-[40rem]">
                <h1 className="text-md md:text-2xl lg:text-3xl md:px-10 md:py-4 font-custom font-bold">
                  {t("np-product-developed-cardiovascular")}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  </>)


}

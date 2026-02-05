"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import { handleForm } from "@/src/formulario/action";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "@/types/ValidationForm";


export default function Contacto() {

  const t = useTranslations();
  const [modal, setModal] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // Convierte los datos a FormData
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("motivo", data.motivo);
    formData.append("contact", data.contact);
    formData.append("content", data.content);
    console.log("Result:", formData);

    // Llama a handleForm con el FormData creado
    const result = await handleForm(formData);
    if (result.success) {
      setFormSuccess(true);
    } else {
      setFormSuccess(false);
    }
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    window.location.reload(); // Recargar la página
  };

  useEffect(() => {
    AOS.init({
      duration: 500, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center w-full py-5 2xl:py-20 md:px-[2rem] lg:px-[7rem] md:gap-2 lg:gap-8 2xl:gap-16 shadow-xl bg-[#6C7F7D]/20">
        <div className="md:w-1/2 lg:w-1/2 2xl:w-1/3">
          <form onSubmit={handleSubmit(onSubmit)} method="POST" className="md:shadow-2xl rounded p-8 lg:w-full bg-white/80">
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name" >{t("name")}: </label>
              <input  {...register("name", {
                required: "El nombre es requerido", pattern: {
                  value: /^[A-Za-z\s]+$/, // Solo letras y espacios
                  message: "Sólo se permiten letras y espacios.",
                },
              })} name="name" type="text" placeholder={t("enter-name")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            {/* email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                {t("email")}:
              </label>
              <input {...register("email", { required: "El correo electronico es requerido" })} name="email" type="email" placeholder={t("enter-email")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            {/* motivo */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                {t("reason-contact")}:
              </label>
              <select  {...register("motivo", { required: "El motivo es requerido" })} name="motivo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="">{t("select-option")}</option>
                <option value="1">{t("agriculture")}</option>
                <option value="2">{t("nutrition")} {t("and")} {t("human-health")}</option>
                <option value="3">{t("care")}</option>
                <option value="4">{t("other")}</option>
              </select>
              {errors.motivo && <span className="text-red-500">{errors.motivo.message}</span>}
            </div>
            {/* contact */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="telefono">
                {t("contact-number")}:
              </label>
              <input
                {...register("contact", {
                  required: "El número de contacto es requerido", pattern: {
                    value: /^\d+$/,
                    message: "Solo ingresar números."
                  }
                })}
                name="contact"
                type="tel"
                placeholder={t("enter-contact")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.contact && <span className="text-red-500">{errors.contact.message}</span>}
            </div>
            {/* content */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                {t("message")}:
              </label>
              <textarea
                {...register("content", { required: "El mensaje es requerido" })}
                name="content"
                placeholder={t("enter-message")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.content && <span className="text-red-500">{errors.content.message}</span>}
            </div>
            {/* Send */}
            <div className="flex items-center justify-between">
              <button type="submit" className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white bg-[#04AF30] hover:bg-[#6B6B6B]">
                {t("send")}
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center text-center md:px-2 lg:px-8 md:1/2 lg:w-1/2 2xl:w-1/3 font-custom">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
            {t("ctc-say-hello")}
            <span className="md:text-3xl lg:text-5xl font-bold text-[#04AF30]">
              {" "}
              {t("coffe-f")}
            </span>
          </h1>

          <p className="text-2xl lg:text-4xl font-bold">
            {t("ctc-contact")}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#04AF30]">
            {t("ctc-future-coffe")}
          </h1>
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-[#6B6B6B]/50 z-50"
          data-aos="zoom-in"
        >
          <div className="flex flex-col justify-center items-center w-[30rem] h-[15rem] text-center rounded-xl gap-6 bg-[#FFFFFF]/90">
            {formSuccess ? (
              <div className="flex flex-col justify-center items-center text-3xl font-semibold gap-4">
                <Image
                  src={"/img/contacto/cheque.png"}
                  alt="cerrar"
                  width={50}
                  height={100}
                />
                <h2>{t("ctc-sent")}</h2>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center text-3xl font-semibold gap-4">
                <Image
                  src={"/img/contacto/cerrar.png"}
                  alt="cerrar"
                  width={50}
                  height={100}
                />
                <h1>{t("ctc-error")}</h1>
              </div>
            )}
            <button
              className="text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white bg-[#04AF30] hover:bg-[#6B6B6B]"
              onClick={handleCloseModal}
            >
              {t("close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";
import { BiLogoWhatsapp } from "react-icons/bi";
import "../../src/utils/animate-scroll";
// Importa tus estilos globales aquí
import "../globals.css";
//i18n
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Sanam",
  description: "Realizado por Novahold",
  keywords: "Café, Mucilago de café",
  applicationName: "Sanam.co",
  robots: { index: true, follow: true },
  creator: "Novahold Team",
  category: "Alimentación",
  //icons: { icon: "public/img/logo-sanam.JPG?=4", apple: "public/img/logo-sanam.JPG?=4" , shortcut: "public/img/logo-sanam.JPG?=4"},
  // authors: [{ name: "Novahold", url: "novahold.com" },],
  // alternates: {
  //   canonical: "/",
  //   languages: {
  //     'en-US': '/en-US',
  //     'es-ES': '/es-co',
  //   },
  // }
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  console.log("Messages:", messages);
  console.log("Locale:", locale);
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body className="font-sans text-[#6B6B6B] bg-[#FFFFFF]">
          <div>
            {/* base navbar  */}
            <div className="flex justify-center items-center w-full h-20 lg:h-[6rem] bg-[#FFFFFF]">
              <Header />
            </div>
            {children}
          </div>

          <Footer />

          {/* Iconos laterales derechos */}
          <div className="fixed bottom-8 right-10 flex flex-col items-end space-y-4 z-20">
            <div className="tooltip-container">
              <Link
                href="https://wa.me/573142562821"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white hover:bg-green-600 transform hover:scale-110 transition duration-150 ease-in-out"
              >
                <BiLogoWhatsapp size="26" />
                <span className="tooltip-text">Contáctanos</span>
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-500 text-white hover:bg-gray-600 transform hover:scale-110 transition duration-150 ease-in-out"
              >
                <FaChevronUp size="26" />
              </Link>
            </div>
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import NavbarCustom from "./Navbar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    setActiveLink(target.textContent || ""); // Identifica el enlace activo
    setIsMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="flex justify-center h-[6rem] fixed w-screen z-20 bg-transparent text-[#6B6B6B] bg-white">
      {/* Logo */}
      <div className="sm:ml-4">
        <Link href="/" className="px-10" onClick={handleClick}>
          <Image
            width={200}
            height={80}
            src="/img/logo-sanam.JPG"
            alt="Logo Sanam"
          />
        </Link>
      </div>
      {/* Div con menú principal y movil */}
      <div className="flex justify-around items-center px-10 text-blac">
        {/* Menú principal */}
        <div className="hidden md:flex md:justify-center md:items-center space-x-4">
          <NavbarCustom activeLink={activeLink} handleClick={handleClick} />
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* <FaBars size={40} /> */}
            {isMenuOpen ? <FaX size={40} /> : <FaBars size={40} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="absolute flex flex-col w-full p-6 md:hidden bg-white">
          <div className="flex justify-around">
            <Link
              href="/"
              className="text-2xl font-bold px-10"
              onClick={handleClick}
            >
              <Image
                width={200}
                height={80}
                src="/img/logo-sanam.JPG"
                alt="Logo Sanam"
              />
            </Link>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <FaX size={40} />
              </button>
            </div>
          </div>

          <NavbarCustom handleClick={handleClick} activeLink={activeLink} />
        </div>
      )}
    </nav>
  );
}

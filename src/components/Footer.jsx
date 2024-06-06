import React from "react";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiThreadsLine,
  RiXboxFill,
  RiTwitterXLine,
} from "react-icons/ri";
import Logo from "../assets/logo-blanco.png";

const Footer = () => {
  return (
    <footer className="bg-primary p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white pb-8">
        {/* Logo */}
        <div className="w-20 xl:w-24">
          <img src={Logo} alt="Logo" />
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/_bohio"
            className="block text-primary p-2 bg-white rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramLine />
          </a>
          <a
            href="https://www.threads.net/@_bohio"
            className="block text-primary p-2 bg-white rounded-full hover:"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiThreadsLine />
          </a>
          <a
            href="https://web.facebook.com/people/Boh%C3%ADo/61559549168524/"
            className="block text-primary p-2 bg-white rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookLine />
          </a>
          <a
            href="https://x.com/bohio24"
            className="block text-primary p-2 bg-white rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine />
          </a>
        </nav>
      </div>
      <div id="contactanos" className="mt-8">
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-white mt-4 font-bold  transition-colors">
            bohiio2024@gmail.com
          </h1>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Bohio
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Nosotros
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-white text-primary rounded-xl"
          >
            Contáctanos
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-white text-center">
          © Bohío 2024 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

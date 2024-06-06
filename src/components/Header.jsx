import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  return (
    <header
      id="header"
      className="flex items-center justify-between w-full p-4 h-[10vh]"
    >
      <div className="flex items-center p-3 sm:p-8">
        <img src={Logo} className="w-16 md:w-24 cursor-pointer" />
      </div>
      <nav className="hidden md:flex flex-1 justify-center items-center gap-4 md:gap-10">
        <Link
          to="header"
          smooth={true}
          duration={500}
          className="text-sm md:text-base cursor-pointer"
        >
          Inicio
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="text-sm md:text-base cursor-pointer"
        >
          Servicios
        </Link>
        <Link
          to="bohio"
          smooth={true}
          duration={500}
          className="text-sm md:text-base cursor-pointer"
        >
          Bohio
        </Link>
        <Link
          to="nosotros"
          smooth={true}
          duration={500}
          className="text-sm md:text-base cursor-pointer"
        >
          Nosotros
        </Link>
        <Link
          to="contactanos"
          smooth={true}
          duration={500}
          className="text-sm md:text-base cursor-pointer"
        >
          Contáctanos
        </Link>
      </nav>
      <div className="md:hidden flex items-center">
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-[10vh] right-0 left-0 bg-white shadow-md flex flex-col items-center md:hidden"
        >
          <Link
            to="header"
            smooth={true}
            duration={500}
            className="py-2 text-sm cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="py-2 text-sm cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            to="bohio"
            smooth={true}
            duration={500}
            className="py-2 text-sm cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Bohio
          </Link>
          <Link
            to="nosotros"
            smooth={true}
            duration={500}
            className="py-2 text-sm cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="contactanos"
            smooth={true}
            duration={500}
            className="py-2 text-sm cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Contáctanos
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

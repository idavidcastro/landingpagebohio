import React from "react";
import Logo from "../assets/logo.png";
import Dpto from "../assets/dpto.svg";
import "../styles/hero.css";

function Hero() {
  const handleButtonClick = () => {
    window.open("https://mibohio.co/");
  };

  return (
    <section id="section" className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Información */}
      <div className="md:col-span-5 flex items-center justify-center p-6 sm:p-12">
        <div className="flex flex-col gap-4 sm:gap-8">
          <h1 className="text-6xl sm:text-7xl font-bold leading-tight sm:leading-[5.5rem]">
            Tu mejor plataforma para alojarte en el{" "}
            <span
              className="inline-block bg-gradient-to-r from-primary via-black to-primary bg-clip-text text-transparent"
              style={{
                animation: "gradient 3s linear infinite",
                backgroundSize: "200% auto",
                display: "inline-block",
              }}
            >
              Cesar
            </span>
          </h1>
          <p className="text-gray-500 text-base sm:text-xl leading-relaxed sm:leading-[2rem]">
            Planifica un viaje al departamento con la ayuda de anfitriones
            locales. Lograrás crear las mejores experiencias en el mejor lugar
            del país.
          </p>
          <div>
            <button
              onClick={handleButtonClick}
              className="bg-primary border-2 border-primary text-white py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg hover:bg-white hover:text-primary transition-transform duration-500"
            >
              Ir a Bohío
            </button>
          </div>
        </div>
      </div>
      {/* Imagen */}
      <div className="md:col-span-3 hidden sm:flex justify-center items-center relative">
        <div>
          <img
            src={Logo}
            className="w-36 sm:w-72 hover:scale-110 transition-transform duration-500"
          />
          <img src={Dpto} className="w-40 sm:w-[28rem] absolute top-0 -z-10" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

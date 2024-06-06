import React, { useRef } from "react";
import Localizacion from "../assets/localizacion.jpg";
import Agendamiento from "../assets/agendamiento.jpg";
import Guia from "../assets/guia.jpg";
import Publicar from "../assets/publicar.jpg";

function ServicesMenu() {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="services" className="mt-[10%]">
      <h1 className="text-4xl xl:text-7xl font-bold leading-tight sm:leading-[5.5rem] text-center mb-[10%]">
        Ofrecemos Los Mejores Servicios
      </h1>

      <div className="justify-center grid grid-cols-2 xl:grid-cols-4 ">
        <div
          id="publica-tu-alojamiento"
          onClick={() => scrollToSection("publicar")}
          className="flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-500 p-5"
        >
          <img
            src={Publicar}
            className="w-[60%]"
            alt="Publica tu alojamiento"
          />
          <h1 className="text-lg font-semibold text-center">Publicación</h1>
        </div>
        <div
          id="busquedas-flexibles"
          onClick={() => scrollToSection("busqueda")}
          className="flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-500 p-5"
        >
          <img
            src={Localizacion}
            className="w-[70%]"
            alt="Búsquedas Flexibles"
          />
          <h1 className="text-lg font-semibold text-center">Búsquedas</h1>
        </div>
        <div
          id="agenda-tu-espacio"
          onClick={() => scrollToSection("agendar")}
          className="flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-500 p-5"
        >
          <img src={Agendamiento} className="w-[70%]" alt="Agenda tu Espacio" />
          <h1 className="text-lg font-semibold text-center">Agendamiento</h1>
        </div>
        <div
          id="guia-turistico"
          onClick={() => scrollToSection("guia")}
          className="flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-500 p-5"
        >
          <img
            src={Guia}
            className="w-[70%]"
            alt="Servicio de Guía Turístico"
          />
          <h1 className="text-lg font-semibold text-center">Guía Turístico</h1>
        </div>
      </div>
    </div>
  );
}

export default ServicesMenu;

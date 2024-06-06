import React, { useState, useEffect } from "react";
import Card from "../assets/card.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";
import Busqueda from "../assets/principal-bohio.png";
import Agendamineto from "../assets/agendamiento.png";
import Guia from "../assets/guia.png";

function HowItWorks() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      const sectionElement = document.getElementById("header");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
        setIsInitialLoad(false);
      }
    }
  }, [isInitialLoad]);
  return (
    <div className="mt-[10%] ">
      {/*para publicar */}
      <div id="publicar" className=" grid grid-cols-1 md:grid-cols-8 mb-[5%]">
        {/* información */}
        <div className="md:col-span-4 flex items-center justify-center xl:ml-[10%] p-6 sm:p-12 ">
          <div className="flex flex-col gap-2 ">
            <p className="text-gray-500 text-sm ">Para publicar</p>
            <h1 className="text-4xl sm:text-7xl font-bold leading-tight sm:leading-[5.5rem]">
              Pon a disposición tu alojamiento
            </h1>
            <p className="text-gray-500 text-base sm:text-xl leading-relaxed sm:leading-[2rem]">
              ¿Necesitas algo de dinero? Bohio te ofrece la posibilidad de
              publicar tu propio alojamiento, donde podrás compartir la belleza
              y la hospitalidad de esta región colombiana con viajeros de todo
              el mundo.
            </p>
          </div>
        </div>
        {/* imagen */}
        <div className="gap-4 flex flex-cols col-span-4 ml-[16%] justify-center items-center mb-10">
          <img
            src={Card}
            className="w-[50%] shadow-xl rounded-lg hover:scale-110 transition-transform duration-500"
          />
          <div className="grid-cols-2">
            <img
              src={Card2}
              className="w-[50%] mb-5 shadow-xl rounded-lg hover:scale-110 transition-transform duration-500"
            />
            <img
              src={Card3}
              className="w-[50%]  shadow-xl rounded-lg hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/*para busqueda */}
      <div
        id="busqueda"
        className="grid grid-cols-1 md:grid-cols-8 mb-[10%] mt-[10%]"
      >
        {/*imagen para pantallas grandes */}
        <div className="hidden md:flex gap-4 col-span-4 justify-center items-center">
          <img
            src={Busqueda}
            className="w-[70%] md:w-[70%] rounded-lg hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/*información */}
        <div className="md:col-span-4 flex flex-col items-center justify-center xl:mr-[10%] p-6 sm:p-12 order-1 md:order-2">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm text-end md:text-end">
              Para buscar
            </p>
            <h1 className="text-4xl sm:text-7xl font-bold leading-tight sm:leading-[5.5rem] text-end md:text-end">
              Realiza búsquedas de manera fácil
            </h1>
            <p className="text-gray-500 text-base sm:text-xl leading-relaxed sm:leading-[2rem] text-end md:text-end">
              Nuestra plataforma te permite filtrar por tus preferencias, ya sea
              que estés buscando un hotel boutique con encanto, una villa junto
              al mar o una cabaña acogedora en las montañas. Además, ofrecemos
              información detallada y reseñas de los huéspedes para que puedas
              tomar una decisión informada y encontrar el lugar ideal para tu
              estancia.
            </p>
          </div>
        </div>
        {/*imagen para pantallas pequeñas */}
        <div className="flex md:hidden gap-4 flex-cols col-span-4 justify-center items-center order-2">
          <img
            src={Busqueda}
            className="w-[70%] md:w-[70%] rounded-lg hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      {/*para agendar */}
      <div
        id="agendar"
        className=" grid grid-cols-1 md:grid-cols-8 mb-[5%] mt-[10%]"
      >
        {/*información */}
        <div className="md:col-span-4 flex items-center justify-center xl:ml-[10%] p-6 sm:p-12 ">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm ">Para agendar</p>
            <h1 className="text-4xl sm:text-7xl font-bold leading-tight sm:leading-[5.5rem]">
              Elige las fechas que se ajusten a tu itinerario y agenda
            </h1>
            <p className="text-gray-500 text-base sm:text-xl leading-relaxed sm:leading-[2rem]">
              Agenda tu alojamiento de preferencia en las fechas establecidas
              con total seguridad. En Bohío, te garantizamos una experiencia sin
              preocupaciones al hacerlo, ofreciéndote un proceso de reserva
              seguro y confiable. ¡Comienza a planificar tu viaje con nosotros
              hoy mismo!
            </p>
          </div>
        </div>
        {/*imagen */}
        <div className="gap-4 flex flex-cols col-span-4  justify-center items-center ">
          <img
            src={Agendamineto}
            className="w-[70%] md:w-[70%] rounded-lg hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/*guia turistico*/}
      <div
        id="guia"
        className="grid grid-cols-1 md:grid-cols-8 mt-[10%] mb-[10%]"
      >
        {/*imagen para pantallas grandes*/}
        <div className="hidden md:flex gap-4 col-span-4 justify-center items-center">
          <img
            src={Guia}
            className="w-[70%] md:w-[70%] rounded-lg hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/*información*/}
        <div className="md:col-span-4 flex flex-col items-center justify-center xl:mr-[10%] p-6 sm:p-12 order-1 md:order-2">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm text-end md:text-end">
              Para guía
            </p>
            <h1 className="text-4xl sm:text-7xl font-bold leading-tight sm:leading-[5.5rem] text-end md:text-end">
              ¿Primera vez por aquí? <br />
              Nuestros guías pueden acompañarte
            </h1>
            <p className="text-gray-500 text-base sm:text-xl leading-relaxed sm:leading-[2rem] text-end md:text-end">
              Bohío te brinda servicios de guías completamente certificados que
              te acompañarán en tu recorrido. Con nosotros, puedes confiar en la
              experiencia y conocimiento de nuestros guías para hacer de tu
              viaje una experiencia inolvidable. ¡Descubre el Cesar con nuestros
              expertos locales!
            </p>
          </div>
        </div>
        {/*imagen para pantallas pequeñas*/}
        <div className="flex md:hidden gap-4 flex-cols col-span-4 justify-center items-center order-2">
          <img
            src={Guia}
            className="w-[70%] md:w-[70%] rounded-lg hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

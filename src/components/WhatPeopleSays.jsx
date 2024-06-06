import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ivan from "../assets/ivan.jpg";
import Daniela from "../assets/daniela.jpg";

function Testimonial({ image, name, occupation, text }) {
  return (
    <div className="relative overflow-hidden bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure>
          <blockquote className="text-center text-base sm:text-lg font-semibold leading-6 text-gray-900 sm:text-xl sm:leading-8">
            <p>{text}</p>
          </blockquote>
          <figcaption className="mt-6">
            <img
              className="mx-auto h-8 w-8 rounded-full"
              src={image}
              alt={name}
            />
            <div className="mt-2 flex items-center justify-center space-x-2 text-xs sm:text-sm">
              <div className="font-semibold text-gray-900">{name}</div>
              <svg
                viewBox="0 0 2 2"
                width="2"
                height="2"
                aria-hidden="true"
                className="fill-current text-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">{occupation}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

function WhatPeopleSays() {
  const testimonies = [
    {
      image: Ivan,
      name: "Iván Castro",
      occupation: "Ingeniero de Sistemas",
      text: "Bohio es mi compañero confiable para encontrar los mejores alojamientos en mis viajes. Su interfaz intuitiva y amplia selección de opciones hacen que la planificación de mis vacaciones sea una experiencia increíble.",
    },
    {
      image: Daniela,
      name: "Daniela Caballero",
      occupation: "Turista",
      text: "Esta plataforma ha transformado completamente la forma en que organizo mis viajes. Desde la búsqueda de alojamientos hasta la planificación de actividades, la plataforma me ofrece una experiencia sin problemas.",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="mt-[25%] xl:mt-[10%]">
      <h1 className="text-4xl sm:text-7xl font-bold leading-tight sm:leading-[5.5rem] text-center">
        Testimonios
      </h1>
      <div className="mx-8 relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonies.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </Slider>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default WhatPeopleSays;

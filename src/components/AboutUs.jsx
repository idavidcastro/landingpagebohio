import React from "react";
import Ivan from "../assets/ivan.jpg";
import Santi from "../assets/santi.jpg";
import Pipe from "../assets/pipe.jpg";
import User from "../assets/user.png";
import Juan from "../assets/juan.jpg";
import Daniel from "../assets/daniel.jpg";

function AboutUs() {
  return (
    <div className="bg-white py-15 sm:py-32 justify-center items-center">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div id="nosotros" className="max-w-2xl">
          <h2 className="text-4xl sm:text-7xl font-bold leading-tight sm:leading-[5.5rem] text-center xl:text-left">
            Nosotros
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-500 text-center xl:text-left">
            Somos un grupo de estudiantes de Ingeniería de sistemas de la
            Universidad Popular del Cesar
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={Ivan} />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight ">
                  Iván Castro
                </h3>
                <p className="text-sm font-semibold leading-6 text-primary">
                  Front-End
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={Pipe} />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight ">
                  Andrés Calderón
                </h3>
                <p className="text-sm font-semibold leading-6 text-primary">
                  Back-End
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={Daniel} />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Daniel Moreno
                </h3>
                <p className="text-sm font-semibold leading-6 text-primary">
                  Back-End
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={Juan} />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight">
                  Juan Araujo
                </h3>
                <p className="text-sm font-semibold leading-6 text-primary">
                  Product Owner
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={Santi} />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight">
                  Santiago Nuñez
                </h3>
                <p className="text-sm font-semibold leading-6 text-primary">
                  Scrum Master
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;

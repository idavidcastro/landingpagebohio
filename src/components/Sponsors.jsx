import React from "react";
import UPC from "../assets/upc.png";
import AIRBNB from "../assets/airbnb.png";

function sponsors() {
  const handleButtonClick = () => {
    window.open("https://www.unicesar.edu.co/", "_blank");
  };
  return (
    <div className="p-12 flex flex-col">
      <div className="flex items-center justify-center">
        <img
          onClick={handleButtonClick}
          src={UPC}
          className="xl:w-40 m-5 w-[40%] cursor-pointer "
        />
        {/* <img src={AIRBNB} className="xl:w-40 m-5 w-[40%]" /> */}
      </div>
    </div>
  );
}

export default sponsors;

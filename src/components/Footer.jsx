import React from "react";
import Footerelem from "./Footerelem";

function Footer() {
  return (
    <div className="footer flex pt-24 w-full h-[55vh] border">
      <div className="footer1 w-[22%] flex flex-col items-center h-full ml-16 ">
        <img
          className="w-[200px]"
          src="https://monosage.com/images/logo.png"
          alt=""
        />
        <p className="text-sm mt-6 text-sky-600 leading-6">
          Monosage is a single stop solution for all your business needs. Our
          group of intellectual and experienced professionals delivers the
          solution on time with highly optimal quality and unimaginably low
          pricing.
        </p>
      </div>
      <div className="footer2 w-[70%] flex flex-col items-center h-full ml-8 ">
        <Footerelem />
      </div>
    </div>
  );
}

export default Footer;

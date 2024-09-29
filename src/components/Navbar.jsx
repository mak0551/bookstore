import React, { useState } from "react";
import Button from "./Button";
import { IoReorderThreeSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [a,seta]= useState( false);
  return (
    <div className="navbar flex justify-between items-center fixed top-0 opacity-100 py-4 bg-[#FFFFFF] z-50000">
      <img
        className="z-10 h-[55px] w-[185px] mx-[4.5em]"
        src="https://monosage.com/images/logo.png"
        alt=""
      />
      <div className={`nav ${a===false ?"hidden" :  "block"} transition-all tracking-tighter text-zinc-800 flex items-center gap-8 mr-24`}>
        {[
          "Home",
          "About Us",
          "IT Consulting",
          "Services",
          "Projects",
          "Contacts",
        ].map((item, index) => (
          <div className="text-zinc-400 hover:text-[#468DB6] font-medium">
            {item}
          </div>
        ))}
        <Button login="LOGIN" />
      </div>
        <div onClick={()=>{seta(!a)}}  className="icon  "><IoReorderThreeSharp /></div>

    </div>
  );
};

export default Navbar;

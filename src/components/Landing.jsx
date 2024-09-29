import React from "react";
import Myimage from "./landing.jpg";
import Button from "./Button";
function Landing() {
  return (
    <div className="landingcontainer flex flex-row justify-items-end bg-[#FFFFFF] h-[70vh] mt-12">
      <div className="landingl flex flex-col w-[50%] p-20 pr-22 ">
        <h1 className="text-[2.8em] leading-[1.2em] mt-[4rem] font-['Times New Roman'] font-snug text-[#12304C]">
          Are you planning to start Business?
        </h1>
        <h5 className="h5 text-xs mt-6 leading-[1.7em] font-medium text-sm text-[#468DB6]">
          Single stop solution for all your business needs. Our group of
          intellectual and experienced professionals delivers the solution on
          time with highly optimal quality and unimaginably low pricing. “We see
          the world with empathy and Never Compromise on Quality...” is our
          motto.
        </h5>
        <div className="btncover w-[38%] mt-10 ml-4">
          <Button login="GET STARTED" />
        </div>
      </div>
      <div className="imgcontain flex justify-center items-center w-[50%] p-20 pr-22 ">
        <img
          className="landing2 landing22 right-px right-px z-500"
          src={Myimage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Landing;

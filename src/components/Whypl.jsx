import React from "react";

function Whypl({ h1, p }) {
  return (
    <div className="whypplcontain">
      <div className="whyppl flex flex-col items-center justify-center">
        <h1 className="whypplh1 my-10 w-[22em] text-center text-4xl font-semibold font-mono tracking-tighter text-[#12304C]">
          {h1}
        </h1>
        <p className="p w-[60vh] text-center text-sm leading-7 text-[#468DB6] mx-auto">
          {p}
        </p>
      </div>
    </div>
  );
}

export default Whypl;

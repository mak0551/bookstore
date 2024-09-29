import React from "react";

function Expectbtn({h1,p}) {
  return (
    <div className="expectbtn h-[6em] w-[8em] flex flex-col justify-center items-center bg-[#FFFFFF] rounded">
      <h1 className="text-3xl text-sky-800">{h1}</h1>
      <h6 className="text-sm text-sky-700 mt-1">{p}</h6>
    </div>
  );
}

export default Expectbtn;

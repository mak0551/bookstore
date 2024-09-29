import React from "react";

function Card({ item }) {
  return (
    <div className="card hover:translate-y-[-2em] hover:bg-green-200 mt-10 p-4 h-[16em] w-[15em] rounded-xl bg-zinc-100">
      <div className=" my-4 h-12 w-12 bg-violet-200 rounded-full flex items-center justify-center">
        <div>{item.icon}</div>
      </div>
      <h1 className="font-semibold mb-4">{item.h1}</h1>
      <p className="p font-normal text-sm text-[#468DB6]">{item.p}</p>
    </div>
  );
}

export default Card;

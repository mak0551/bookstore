import React from "react";

const Button = ({ login }) => {
  return (
    <div>
      <div className="button hover:translate-y-1 hover:bg-sky-600 hover:transition-shadow transition-all tracking-tighter bg-[#2378A9] py-[14px] px-10 font-bold rounded text-zinc-100 ">
        {login}
      </div>
    </div>
  );
};

export default Button;

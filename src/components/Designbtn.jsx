import React from "react";
import Button2 from "./Button2";
function Designbtn({data}) {
  return (
    <div className=" flex gap-2 justify-center flex-wrap overflow-y-auto  overflow-hidden py-2 mt-10 h-full bg-zinc-100">
      {data.map((elem, index) => (
        <div className="w-full">
          <Button2 elem={elem} />
        </div>
      ))}
    </div>
  );
}

export default Designbtn;

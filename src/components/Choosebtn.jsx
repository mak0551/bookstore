import React from "react";
function Choosebtn({ data }) {
  return (
    <div className="flex m-20 flex-wrap justify-center ">
      {data.map((item, index) => (
        <div className="choosebtn flex w-[45%] items-center rounded bg-[#FFFFFF] gap-8 p-4 m-4">
          <div className={`h-[60px] ${index===0 ||index===1 ? 'bg-green-200':'bg-violet-200'} iconn flex basis-20 text-xl justify-center items-center rounded-full`}>
            {item.icon}
          </div>
          <div className="choosebtnh1p flex flex-col">
            <h1 className="font-medium text-xl">{item.h1}</h1>
            <p className="text-sm mt-4 text-[#468DB6]">{item.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Choosebtn;

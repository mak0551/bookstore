import React from "react";
import Designbtn from "./Designbtn";
function Landing2({ imgurl, h1, p, design }) {
//   const data=[
//     {
//         icon: <MdWeb />,
//         h6:"Responsive design"
//     },
//     {
//         icon: <TbBracketsAngle />,
//         h6:"React web development"
//     },
//     {
//         icon: <BsPhone />,
//         h6:"Android apps development"
//     },
//     {
//         icon: <TbBracketsAngle />,
//         h6:"Laravel web development"
//     },
//     {
//         icon: <BsPhone />,
//         h6:"IOS apps development"
//     },
//     {
//         icon: <AiOutlinePercentage />,
//         h6:"UX/Ui design"
//     },
//     {
//         icon: <FaShoppingCart />,
//         h6:"E-commerce development"
//     },
//     {
//         icon: <BiCheckCircle />,
//         h6:"Print ready design"
//     }
// ]

// const data2=[
//   {
//       icon: <MdWeb />,
//       h6:"laoda design"
//   },
//   {
//       icon: <TbBracketsAngle />,
//       h6:"React web development"
//   },
//   {
//       icon: <BsPhone />,
//       h6:"Android apps development"
//   },
//   {
//       icon: <TbBracketsAngle />,
//       h6:"Laravel web development"
//   },
//   {
//       icon: <BsPhone />,
//       h6:"IOS apps development"
//   },
//   {
//       icon: <AiOutlinePercentage />,
//       h6:"UX/Ui design"
//   },
//   {
//       icon: <FaShoppingCart />,
//       h6:"E-commerce development"
//   },
//   {
//       icon: <BiCheckCircle />,
//       h6:"Print ready design"
//   }
// ]

  return (
    <div className="landing2 relative flex justify-items-end bg-[#FFFFFF] h-[70vh] mt-12 mr-4">
      <div className="landing2upper flex justify-center items-center w-[50%] ">
        <img className="landing22 h-[20em] p-4 width-20em" src={imgurl} alt="" />
      </div>
      <div className="landing2nicche flex flex-col w-[50%] p-20 pr-22 ">
        <h1 className="designh1 text-[2.8em] leading-[1.2em] font-['Times New Roman'] font-snug text-[#12304C]">
          {h1}
        </h1>
        <p className="p text-xs mt-6 leading-[1.7em] font-medium text-sm text-[#468DB6]">
          {p}
        </p>
        <Designbtn data={design} />
      </div>
    </div>
  );
}

export default Landing2;

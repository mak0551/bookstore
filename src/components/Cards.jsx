import React from "react";
import Card from "./Card";
import { MdMiscellaneousServices } from "react-icons/md";
import { TbBracketsAngle } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import { LuAccessibility } from "react-icons/lu";

function Cards() {
  var data = [
    {
      icon: <MdMiscellaneousServices />,
      h1: "Dedicated Servers",
      p: "Monosage use cloud servers for web application hosting, data transfers, storage, email and other features securely.",
    },
    {
      icon: <TbBracketsAngle />,
      h1: "Code Security",
      p: "Tools & Expertise teams evaluate the code first before migration and provides security for all kind of technologies.",
    },
    {
      icon: <IoPeopleSharp />,
      h1: "Team Management",
      p: "Monosage management highly encourages in Responsible, Accountable, Consulted and Informed.",
    },
    {
      icon: <LuAccessibility />,
      h1: "Access Controlled",
      p: "Authenticated users access to specific resources based on company policies and permissions assigned to the user or group.",
    },
  ];
  return (
    <div className="cards w-full flex justify-center gap-2 ">
      {data.map((item, index) => (
        <div>{<Card item={item} />}</div>
      ))}
    </div>
  );
}

export default Cards;

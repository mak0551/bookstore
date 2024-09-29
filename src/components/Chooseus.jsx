import React from "react";
import Choosebtn from "./Choosebtn";
import { RxComponentInstance } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { RiApps2Line } from "react-icons/ri";
import { PiMedalBold } from "react-icons/pi";
import Whypl from "./Whypl";

function Chooseus() {
  const data=[
  {
    icon:<RxComponentInstance />,
    h1:"99.9% Server Uptime",
    p:"Monosage offers a wide range of cloud hosting services, plans include Pay as you go."
  },
  {
    icon:<FaBell />,
    h1:"Live 24/7 Support",
    p:"We work 24/7 and will always support the clients through different channels."
  },
  {
    icon:<RiApps2Line />,
    h1:"Affordable Pricing With High End Features",
    p:"Company will offer clients with world best affordable pricing with high end features."
  },
  {
    icon:<RxComponentInstance />,
    h1:"Money-Back Guarantee",
    p:"We offer a 100% money back guarantee in case of you are not happy with the product."
  },
  {
    icon:<PiMedalBold />,
    h1:"Programmatic Advertising",
    p:"Monosage utilizing the programmatic ads to meet core brand objectives with an expectation of boosting this budget by 50%."
  },
  {
    icon:<MdMailOutline />,
    h1:"Email/Chat Interactions",
    p:"Monosage interact with clients through different channels to better understand the client needs"
  }
];
const h1="Why People Choose US";
const p="Our mission is to provide the highest quality hosting services, web and app development tech support to customers worldwide through a variety of services & businesses.";
  return (
    <div className="choose h-[90vh] bg-zinc-50">
      <Whypl h1={h1} p={p}/>
      <Choosebtn data={data}/>
    </div>
  );
}

export default Chooseus;

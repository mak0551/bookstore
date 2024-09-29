import React from 'react'
import Landing2 from './Landing2'
import { MdWeb } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { TbBracketsAngle } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

function BothLandings() {
  const data=[
    {
        icon: <MdWeb />,
        h6:"Responsive design"
    },
    {
        icon: <TbBracketsAngle />,
        h6:"React web development"
    },
    {
        icon: <BsPhone />,
        h6:"Android apps development"
    },
    {
        icon: <TbBracketsAngle />,
        h6:"Laravel web development"
    },
    {
        icon: <BsPhone />,
        h6:"IOS apps development"
    },
    {
        icon: <AiOutlinePercentage />,
        h6:"UX/Ui design"
    },
    {
        icon: <FaShoppingCart />,
        h6:"E-commerce development"
    },
    {
        icon: <BiCheckCircle />,
        h6:"Print ready design"
    }
]
const data2=[
  {
      icon: <FaArrowTrendUp />,
      h6:"Search Engine Optimization"
  },
  {
      icon: <IoGlobeOutline />,
      h6:"Search Engine Marketing"
  },
  {
      icon: <BsPhone />,
      h6:"Social Media optimization"
  },
  {
      icon: <TbBracketsAngle />,
      h6:"Social Media optimization"
  },
  {
      icon: <MdMailOutline />,
      h6:"Email/Mobile Marketing"
  },
  {
      icon: <AiOutlinePercentage />,
      h6:"Organic Lead Generation"
  },
  {
      icon: <BiCheckCircle />,
      h6:"Whatsapp Marketing"
  },
  {
      icon: <FaShoppingCart />,
      h6:"Amazon / E-commerce Sales"
  }
]
  const img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPECpjb5kNJSbWDV4PV0KoeNuRviFD_FBaYeDFB-VwnkLrc79XW9iOM-OmMsB1qHuHTco&usqp=CAU";
  const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbPmMDs40ePJdrbActQv2G15p9uI8Bu1vHg&usqp=CAU";
  const h1="Design & Development";
  const h2="Digital Marketing & Lead Generation";
  const p1="Monosage specializes in designing user-friendly websites and landing pages that are not only trending but also rank well in search results. Our Website designs are mobile responsive & cross-browser compatible to engage the website visitors, helps in increased traffic, leads generation, and sales.";
  const p2="Monosage Provides 360 Degrees Strategic Digital Marketing Solutions & Customized Digital Solutions For Organizations and Brands.";
  return (
    <div>
        <Landing2 imgurl={img1} h1={h1} p={p1} design={data}/>
        <Landing2 imgurl={img2} h1={h2} p={p2} design={data2}/>
    </div>
  )
}

export default BothLandings

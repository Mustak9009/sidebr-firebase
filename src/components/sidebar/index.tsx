'use client'
import React, { useState } from 'react'
import {motion,Variants} from 'framer-motion';
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import SubMenu from './subMenu';
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import Link from 'next/link';
const siebar_animation:Variants = {
  open:{
    width:'20rem',
    transition:{
      damping:40
    }
  },
  close:{
    width:'4rem',
    transition:{
      damping:40
    }
  }
}
const subMenusList = [
  {
    name: "build",
    icon: RiBuilding3Line,
    menus: ["auth", "app settings", "stroage", "hosting"],
  },
  {
    name: "analytics",
    icon: TbReportAnalytics,
    menus: ["dashboard", "realtime", "events"],
  },
];
export default function Sidebar() {
  const [toggle,setToggle] = useState<boolean>(true);
  return (
    <motion.div variants={siebar_animation} animate={toggle ? 'open' : 'close'} className='bg-white text-gray-800 shadow-xl z-[999] w-[20rem] max-w-[20rem] h-screen overflow-hidden  md:relative fixed '>
      {/* Logo */}
      <div className='flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3'>
        <img src="https://img.icons8.com/color/512/firebase.png" alt="Firbase"  width={40}/>
        <span className='text-xl whitespace-pre'>Firebase</span>
      </div>
      {/* Menu */}
      <div className='flex flex-col h-full'>
        <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col flex-1 gap-1 font-semibold overflow-x-hidden'>
          <li>
            <Link href="/" className='link '>
              <AiOutlineAppstore size={25} className="min-w-max"/>
              All apps
            </Link>
          </li>
          <li>
            <Link href="/authentication" className='link'>
              <BsPerson size={25} className="min-w-max"/>
              Authentication  
            </Link>
          </li>
          <li>
            <Link href="/storage" className='link [&.active]:bg-red-500' >
              <HiOutlineDatabase size={25} className="min-w-max"/>
              Storage
            </Link>
          </li>
          {/* Sub menu */}
          <div className='border-y py-3 border-slate-300'>
            <small className='text-slate-500 pl-3 inline-block text-xs'>Product categories</small>
            {subMenusList.map((menu)=>(
              <div className="flex flex-col gap-1" key={menu.name}>
                <SubMenu data={menu}/>
              </div>
            ))}
          </div>
          <li>
            <Link href="/settings" className='link'>
              <SlSettings size={25} className="min-w-max"/>
              Settings  
            </Link>
          </li>
        </ul>
      </div>
      {/* Control button */}
      <motion.button onClick={()=>setToggle(!toggle)} animate={toggle? {x:0,y:0,rotate:0} : {x:-10,y:-200,rotate:180}} transition={{duration:0}} aria-label='Arrow back' className='absolute w-fit h-fit right-2 bottom-5 cursor-pointer md:block hidden'> {/** w-fit => The fit-content behaves as fit-content(stretch). In practice this means that the box will use the available space, but never more than  */}
        <IoIosArrowBack size={28}/>
      </motion.button>  
    </motion.div>
  )
}

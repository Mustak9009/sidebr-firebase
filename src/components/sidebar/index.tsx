"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import SubMenu from "./subMenu";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import Link from "next/link";
import { CheckActiveness as checkActive  } from "@/utils";
import { useMediaQuery } from "react-responsive";
import {MdMenu} from 'react-icons/md';
import { usePathname } from "next/navigation";
const subMenusList = [
  {
    name: "build",
    icon: RiBuilding3Line,
    menus: ["auth", "app-settings", "stroage", "hosting"],
  },
  {
    name: "analytics",
    icon: TbReportAnalytics,
    menus: ["dashboard", "realtime", "events"],
  },
];
export default function Sidebar() {
  const isTab = useMediaQuery({ query: "(max-width:768px)" });
  const [toggle, setToggle] = useState<boolean>(!isTab);
  const pathName = usePathname();
  const siebar_animation: Variants = isTab
    ?{
      //mobile view
      open: {
        x: 0,
        width: "15rem",
        transition: {
          damping: 40,
        },
      },
      close: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
         
        },
      },
    }: {
        //Desktop view
        open: {
          width: "20rem",
          transition: {
            damping: 40,
          },
        },
        close: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };
  useEffect(() => {
    if (isTab) {
      setToggle(false);
    } else{
      setToggle(true);
    }

  }, [isTab]);
  useEffect(()=>{
    isTab && setToggle(false);
  },[pathName]);
  return (
    <div>
      <div onClick={()=>setToggle(false)} className={`fixed inset-0 md:hidden max-h-screen z-[998] bg-black/50 ${toggle ? 'block' : 'hidden'}`}/>
      <motion.div
        variants={siebar_animation}
        initial={{x:isTab ? -500 : 0}}
        animate={toggle ? "open" : "close"}
        className="bg-white text-gray-800 shadow-xl z-[999] w-[20rem] max-w-[20rem] h-screen overflow-hidden  md:relative fixed "
      >
        {/* Logo */}
        <div onClick={(()=>window.location.replace('/'))} className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3 cursor-pointer">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            alt="Firbase"
            width={40}
          />
          <span className="text-xl whitespace-pre">Firebase</span>
        </div>
        {/* Menu */}
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col flex-1 gap-1 font-semibold overflow-x-hidden">
            <li>
              <Link href="/" className={`link ${checkActive("/")}`}>
                <AiOutlineAppstore size={25} className="min-w-max" />
                All apps
              </Link>
            </li>
            <li>
              <Link
                href="/authentication"
                className={`link ${checkActive("/authentication")}`}
              >
                <BsPerson size={25} className="min-w-max" />
                Authentication
              </Link>
            </li>
            <li>
              <Link
                href="/storage"
                className={`link ${checkActive("/storage")}`}
              >
                <HiOutlineDatabase size={25} className="min-w-max" />
                Storage
              </Link>
            </li>
            {/* Sub menu - 1*/}
            {toggle && (
              <div className="border-y py-3 border-slate-300">
                <small className="text-slate-500 pl-3 inline-block text-xs">
                  Product categories
                </small>
                {subMenusList.map((menu) => (
                  <div className="flex flex-col gap-1" key={menu.name}>
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <Link
                href="/settings"
                className={`link ${checkActive("/settings")}`}
              >
                <SlSettings size={25} className="min-w-max" />
                Settings
              </Link>
            </li>
            {/* sub menu - 2 */}
            {toggle && (
              <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
                <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                  <div>
                    <p>Spark</p>
                    <small>No-cost $0/month</small>
                  </div>
                  <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                    Upgrade
                  </p>
                </div>
              </div>
            )}
          </ul>
        </div>
        {/* Control button */}
        <motion.button
          onClick={() => setToggle(!toggle)}
          animate={
            toggle
              ? { x: 0, y: 0, rotate: 0 }
              : { x: -10, y: -200, rotate: 180 }
          }
          transition={{ duration: 0 }}
          aria-label="Arrow back"
          className="absolute w-fit h-fit right-2 bottom-5 cursor-pointer md:block hidden"
        >
          {" "}
          {/** w-fit => The fit-content behaves as fit-content(stretch). In practice this means that the box will use the available space, but never more than  */}
          <IoIosArrowBack size={28} />
        </motion.button>
      </motion.div>
      <div className="m-4 md:hidden cursor-pointer" onClick={()=>setToggle(!toggle)}>
          <MdMenu size={25}/>
      </div>
    </div>
  );
}

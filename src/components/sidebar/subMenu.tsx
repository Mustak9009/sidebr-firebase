'use client'
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import {usePathname} from 'next/navigation';
import {motion} from 'framer-motion';
export default function SubMenu({data}: {data: { name: string; icon: IconType; menus: string[] };}) {
  const pathName = usePathname();
  const [subMenuToggle,setSubMenuToggle] = React.useState<boolean>(false);
  return (
    <>
      <li className={`link ${pathName.includes(data.name) && 'text-blue-500'}`} onClick={()=>setSubMenuToggle(!subMenuToggle)}>
        <data.icon size={25} />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown className={`${subMenuToggle && 'rotate-180'} duration-200`}/>
      </li>
      <motion.ul animate={subMenuToggle ? {height:'fit-content'} : {height:0}} className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0">
        {data.menus.map((item) => (
          <li key={item}>
            <Link className={`link !bg-transparent capitalize ${pathName.includes(item) && 'text-blue-500'}`} href={`/${data.name}/${item}`}>
              {item}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
}

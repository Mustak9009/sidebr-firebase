import React from 'react'
import { IconType } from 'react-icons';
import {IoIosArrowDown} from 'react-icons/io';
export default function subMenu({data}:{data:{name:string,icon:IconType}}) {
  return (
    <li className='link'>
        <data.icon size={25}/>
        <p className='capitalize flex-1'>{data.name}</p>
        <IoIosArrowDown/>
    </li>
  )
}

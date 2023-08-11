import React from 'react'
import logo1 from '../assests/logo1.svg'
import {sidebarMenu} from '../ultis/menu'
import { NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import path from '../ultis/path'

const notActiveStyle = 'py-2 px-[25px] text-[#b1afb3] text-[13px] font-bold flex gap-[12px] items-center'
const activeStyle = 'py-2 px-[25px] text-[#f0f4f8] text-[13px] font-bold flex gap-[12px] items-center'

const SidebarLeft = () => {
  const navigate = useNavigate()
  return (
    <div className='flex h-full flex-col bg-main-200'>
      <div onClick={() => navigate(path.HOME)} className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center cursor-pointer'>
        <img className='mt-16' src={logo1} alt="Lala-logo" />
        {/* className='w-[128px] h-10' */}
      </div>
      <div className='flex flex-col mt-10 ml-4'>
        {sidebarMenu.map(item => (
          <NavLink
          to={item.path}
          key={item.path}
          end={item.end}
          className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
          {item.icons}
          <span>{item.text}</span>
        </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarLeft
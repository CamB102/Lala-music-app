import React from 'react'
import {Outlet} from 'react-router-dom'
import { Player, SidebarLeft, SidebarRight, Header } from '../../components'
import { Scrollbars } from 'react-custom-scrollbars'


const Public = () => {
    return(
        <div className='w-full relative h-screen flex flex-col bg-main-400'>
            <div className='w-full h-full flex flex-auto '>
                <div className='w-[240px] h-full flex-none '>
                    <SidebarLeft />
                </div>
                <div className='flex-auto '>
                    <div className='h-[70px] px-[59px] flex items-center'>
                        {/* <Header /> */}
                    </div>
                    <Outlet/>
                    {/* <div className='w-full h-[500px]'></div> */}
                </div>
                <div className='w-[329px] hidden 1600:flex flex-none animate-slide-left  bg-main-400'>
                    <SidebarRight />
                </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0 h-[90px] border-t-[0.5px] border-gray-700 text-white'>
                <Player />
            </div>
        </div>
    )
}
export default Public
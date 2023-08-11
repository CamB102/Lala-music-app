import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import { Player, SidebarLeft, SidebarRight, Header } from '../../components'
import { Scrollbars } from 'react-custom-scrollbars'



const Public = () => {
    const [isShowRighSidebar, setIsShowRightSidebar] = useState(true)
    return(
        <div className='w-full relative h-screen flex flex-col bg-main-400'>
            <div className='w-full h-full flex flex-auto '>
                <div className='w-[240px] h-full flex-none '>
                    <SidebarLeft />
                </div>
                <div className='flex-auto flex flex-col'>
                    <div className='h-[70px] px-[59px] flex flex-none items-center'>
                        {/* <Header /> */}
                    </div>
                    <div className='flex-auto w-full '>
                        <Scrollbars style={{width: '100%', height: '100%'}}>
                            <Outlet/>
                        </Scrollbars>
                    </div>
                </div>
                {isShowRighSidebar && <div className='w-[329px] 1600:flex flex-none animate-slide-left  bg-main-400'>
                    <SidebarRight/>
                </div>}
            </div>
            <div className='fixed bottom-0 left-0 right-0 h-[90px] border-t-[0.5px] border-gray-700 text-white'>
                <Player setIsShowRightSidebar={setIsShowRightSidebar}/>
            </div>
        </div>
    )
}
export default Public
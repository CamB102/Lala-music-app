import React, { memo } from 'react'
import {useNavigate} from 'react-router-dom'

const Section = ({dataSection}) => {

    const navigate = useNavigate()

  return (
    <div className='mt-4 px-[59px] text-gray-200 flex flex-col gap-5'>
        {/* <div className='flex items-center justify-between'>
            <span className='text-xs '>ALL</span>
        </div> */}
        <div className='flex items-center justify-center gap-[28px] cursor-pointer'>
        {dataSection.items && dataSection.items.length > 0 && dataSection.items.map(item => (
            <div
            key={item.encodeId}
            className='flex flex-col gap-2 flex-1'
            onClick={() => {
                navigate(item?.link?.split('.')[0])
            }}>
                <img src={item.thumbnailM} alt="song photo" className='w-full h-auto rounded-lg' />
                <span className='text-gray-500 text-[12px]'>{`${item.sortDescription?.slice(0,28)}...`}</span>
            </div>
        ))}
        
        </div>
    </div>
  )
}

export default memo(Section)
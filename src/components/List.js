import React, { memo } from 'react'
import icons from '../ultis/icons'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

const {BsMusicNoteBeamed} = icons

const List = ({songData}) => {
    console.log(songData)

    const dispatch = useDispatch()
  return (

    <div 
    className='flex justify-between items-center p-[10px] border-t border-gray-800 hover:bg-[#2f2739] cursor-pointer'
    onClick={() => {
        dispatch(actions.setCurSongId(songData?.encodeId))
        dispatch(actions.play(true))
        dispatch(actions.playAlbum(true))
    }}
    >
        <div className='flex items-center gap-3 flex-1'>
            <span><BsMusicNoteBeamed/></span>
            <img src={songData?.thumbnail} alt="thumbnail" className="w-10 h-10 object-cover rounded-md " />
            <span className='flex flex-col w-full'>
                <span className='text-sm whitespace-nowrap overflow-hidden'>{songData?.title?.length > 30 ? `${songData?.title?.slice(0, 30)}...` : songData?.title}</span>
                <span>{songData?.artistsNames}</span>
            </span>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            {songData?.album?.title?.length > 30 ? `${songData?.album?.title?.slice(0, 30)}...` : songData?.album?.title}
        </div>
        <div className='flex-1 flex justify-end'>
            {moment.utc(songData?.duration*1000).format('mm:ss')}
        </div>
        
    </div>
  )
}

export default memo(List)
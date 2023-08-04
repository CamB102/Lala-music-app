import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import * as apis from '../apis'
import icons from '../ultis/icons'
import * as actions from '../store/actions'

const {AiFillHeart, AiOutlineHeart, BsThreeDots, CiRepeat, MdSkipPrevious,
    MdSkipNext, CiShuffle, BsFillPlayFill, BsPauseFill} = icons

const Player = () => {
  const audioEl = new Audio()
  const{curSongId, isPlaying} = useSelector(state => state.music) // key of musicReducer is music
  // when current songId changed, songId will be sent to Redux -> curSongId will be updated, the triger the function in useEffect
  const [songInfo, setSongInfo] = useState(null)
  const [source, setSource] =  useState(null)
  // const [isPlaying, setIsPlaying] = useState(false)
  // console.log(audioEl)
  console.log(isPlaying)
  
    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.getDetailSong(curSongId),
                apis.getSong(curSongId)
            ])
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }
            if (res2.data.err === 0) {
                setSource(res2.data.data['128'])
        }
        fetchDetailSong()
    }
    }, [curSongId])

    useEffect(() => {
      audioEl.play()
    },[curSongId])


  const handleTogglePlayMusic = () => {

    }


  return (
    <div className='bg-main-400 px-5 h-full flex '>
        <div className='w-[30%] flex-auto gap-3 flex items-center'>
            <img src={songInfo?.thumbnail} alt="thumbnail" className='w-16 h-16 object-cover rounded-md'/>
            <div className='flex flex-col'>
              <span className='font-semibold text-gray-200 text-sm'>{songInfo?.title}</span>
              <span className='text-xs text-gray-400'>{songInfo?.artistsNames}</span>
            </div>
            <div className='flex gap-4 pl-2'>
              <span>
                <AiOutlineHeart size={16}/>
              </span>
              <span>
                <BsThreeDots size={16}/>
              </span>
            </div>
        </div>
        <div className='w-[40%] flex-auto border flex flex-col gap-2 items-center justify-center border-red-200 py-2'>
          <div className='flex gap-8 justify-center items-center'>
            <span title='Shuffle' className='cursor-pointer'><CiShuffle size={24}/></span>
            <span className='cursor-pointer'><MdSkipPrevious size={24}/></span>
            <span 
            className='p-1 border border-gray-200 cursor-pointer hover:text-main-300 rounded-full'
            onClick={handleTogglePlayMusic}
            >
            {isPlaying ? <BsPauseFill size={30}/> : <BsFillPlayFill size={30} />}
            </span>
            <span className='cursor-pointer'><MdSkipNext size={24}/></span>
            <span title="Repeat" className='cursor-pointer'><CiRepeat size={24}/></span>
          </div>
          <div>
            progress bar
          </div>
        </div>
        <div className='w-[30%] flex-auto border border-red-200'>
            Volume
        </div>
    </div>
  )
}

export default Player
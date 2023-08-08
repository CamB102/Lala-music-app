import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as apis from '../apis'
import icons from '../ultis/icons'
import * as actions from '../store/actions'
import moment from 'moment'
import {toast} from 'react-toastify'

const {AiFillHeart, AiOutlineHeart, BsThreeDots, CiRepeat, MdSkipPrevious,
    MdSkipNext, CiShuffle, BsFillPlayFill, BsPauseFill} = icons

var intervalId  
const Player = () => {
  const{curSongId, isPlaying} = useSelector(state => state.music) // key of musicReducer is music
  // when current songId changed, songId will be sent to Redux -> curSongId will be updated, the triger the function in useEffect
  const [songInfo, setSongInfo] = useState(null)
  const [audio, setAudio] = useState(new Audio())
  const [curSeconds, setCurSeconds] = useState(0)
  const dispatch = useDispatch()
  const thumbRef = useRef()
  const trackRef = useRef()

  useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId)
            ])
            console.log(res1.data.err)
            
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }
            if (res2.data.err === 0) {
                audio.pause()
                setAudio(new Audio(res2.data.data['128']))
            } else {
                setAudio(new Audio())
                dispatch(actions.play(false))
                toast.warn(res2.data.msg)
                //toast.warn('To play this song, please sign up!')
                setCurSeconds(0)
                thumbRef.current.style.cssText = `right: 100%`
            }
        }
        fetchDetailSong()
            
    }, [curSongId])
  // console.log(curSongId)
  // console.log(songInfo)

  useEffect(() => { 
    intervalId && clearInterval(intervalId)
    audio.pause()
    audio.load()
    audio.currentTime = 0
    if (isPlaying){
      audio.play()
      intervalId = setInterval(() => {
        let percent = Math.round(audio.currentTime*10000 / songInfo.duration) / 100
        thumbRef.current.style.cssText = `right: ${100 - percent}%`
        setCurSeconds(Math.round(audio.currentTime))
      }, 100)
    } 
  }, [audio])

  const handleTogglePlayMusic = () => {
      if (isPlaying){
        audio.pause()
        dispatch(actions.play(false))
      } else {
        audio.play()
        dispatch(actions.play(true))
      }
    }
    const handleProgressBar = (e) => {
      console.log(e)
      const trackRect = trackRef.current.getBoundingClientRect()
      console.log(trackRect)
      const percent = Math.round((e.clientX - trackRect.left)*10000 / trackRect.width)/100
      console.log(trackRect.width)
      console.log(percent)
      thumbRef.current.style.cssText = `right: ${100 - percent}%`
      audio.currentTime = percent * songInfo.duration / 100
      setCurSeconds(Math.round(percent * songInfo.duration / 100))
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
            className='p-1 border border-gray-200 cursor-pointer hover:text-main-500 rounded-full'
            onClick={handleTogglePlayMusic}
            ref={trackRef}
            >
            {isPlaying ? <BsPauseFill size={30}/> : <BsFillPlayFill size={30} />}
            </span>
            <span className='cursor-pointer'><MdSkipNext size={24}/></span>
            <span title="Repeat" className='cursor-pointer'><CiRepeat size={24}/></span>
          </div>
          <div className='w-full flex justify-center items-center gap-3 text-xs'>
            <span>{moment.utc(curSeconds*1000).format('mm:ss')}</span>
            <div 
            className='w-3/5 hover:h-[5px] cursor-pointer h-[3px] rounded-l-full rounded-r-full relative bg-gray-500'
            onClick={handleProgressBar}>
              <div ref={thumbRef} className='absolute top-0 left-0 bottom-0 cursor-pointer h-[3px] bg-main-500 rounded-l-full rounded-r-full'></div>
            </div>
            <span>{moment.utc(songInfo?.duration*1000).format('mm:ss')}</span>
          </div>
        </div>
        <div className='w-[30%] flex-auto border border-red-200'>
            Volume
        </div>
    </div>
  )
}

// const Player = () => {
//   const {curSongId} = useState()
//   const [songInfo, setSongInfo] = useState(null)
  
//   console.log(curSongId)

//   useEffect(() => {
//     const fetchDetailSong = async () => {
//       const response = await apis.apiGetDetailSong(curSongId)
//       console.log(response)
//     }
//     fetchDetailSong()
//   }, [curSongId])

// return (
//   <div>
//   player
//   </div>
// )

// }

export default Player
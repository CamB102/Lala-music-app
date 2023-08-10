import { data } from 'autoprefixer'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../../apis'
import moment from 'moment'
import {Lists} from '../../components'
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const Album = () => {

  const {pid} = useParams()
  const [playlistData, setPlaylistData] = useState({})
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const fetchDetailPlaylist = async () => {
      const response = await apis.apiGetDetailPlaylist(pid)
      console.log(response)
      if (response?.data.err === 0){
        //get playlist from redux
        setPlaylistData(response.data?.data)
        dispatch(actions.setPlaylist(response.data?.data?.song?.items))
      }
    }
    fetchDetailPlaylist()
  },[pid])

  return (
    <div className='flex gap-8 w-full h-full text-gray-300 px-[59px]' >
      <div className='flex-none w-1/4 flex flex-col items-center gap-3'>
        <img src={playlistData?.thumbnailM} alt="thumbnail" className='w-full rounded-md hover:scale-105 transition duration-500 cursor-pointer object-contain mt-2'/>
        <div className='flex flex-col items-center'>
          <h3 className='text-[20px] font-bold '>{playlistData?.title}</h3>
          <span className='flex flex-column items-center gap-2  text-gray-400 text-xs'>
            <span>Last Update:</span>
            <span>{moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YY")}</span>
          </span>
          <span className='flex flex-column items-center gap-2  text-gray-400 text-xs py-2'>{playlistData?.artistsNames}</span>
          <span className='flex flex-column items-center gap-2  text-gray-400 text-xs py-2'>{`${Math.round(playlistData?.like / 1000)}K followers`}</span>
        </div>
      </div>
      <Scrollbars style={{ width: '100%', height: '80%' }}>
      <div className='flex-auto mb-40'>
        <span className='text-sm'>
          <span className="text-gray-400">Tagline: </span>
          <span>{playlistData?.sortDescription}</span>
        </span>
        
        <Lists
        totalDuration={playlistData?.song?.totalDuration}  
        />
      </div>
      </Scrollbars>
    </div>
  )
}


export default Album
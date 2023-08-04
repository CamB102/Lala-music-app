import React, {useEffect} from 'react'
import { Header, Slider } from '../../components'

import * as apis from '../../apis'


const Home = () => {
    useEffect(() => {
        const fetchDataHome = async() => {
            // used Promise() so await until it finished
            const response = await apis.getHome()
            // console.log(response)
        }
        fetchDataHome()
    }, [])

    return(
        <div className='overflow-y-auto w-full'>
            <div className='h-[70px] bg-red-400 px-[59px] flex items-center'>
                <Header />
            </div>
                <Slider />
        </div>
    )
}
export default Home
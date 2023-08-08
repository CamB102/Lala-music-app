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
            
                <Slider />
        </div>
    )
}
export default Home
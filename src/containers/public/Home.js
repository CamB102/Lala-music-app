import React, {useEffect} from 'react'
import { Slider, Section } from '../../components'
import { useSelector, UseSelector } from 'react-redux'
import * as apis from '../../apis'


const Home = () => {

    const {chill, happyHit} = useSelector(state => state.app)
    console.log(happyHit)
    useEffect(() => {
        const fetchDataHome = async() => {
            // used Promise() so await until it finished
            const response = await apis.getHome()
            //console.log(response)
        }
        fetchDataHome()
    }, [])

    return(
        <div className='overflow-y-auto flex flex-col gap-5'>
                <Slider />
                <div className='text-gray-200 mt-4'>
                    <h3 className='text-[20px] font-bold px-[59px]'>Happy Hit</h3>
                    <Section dataSection={happyHit}/>
                </div>
                <div className='text-gray-200 mt-4'>
                    <h3 className='text-[20px] font-bold px-[59px]'>Chill</h3>
                    <Section dataSection={chill}/>
                </div>
                
                <div className='w-full h-[200px]'></div>
                
                
        </div>
    )
}
export default Home
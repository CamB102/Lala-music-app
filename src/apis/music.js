import axios from '../axios'

//call API
export const getSong = (sid) => new Promise(async(resolve, reject) => {
    try{
        const response = await axios({
            //REACT_APP_SERVER_URL = https://api-zingmp3-vercel.vercel.app/api
            url: '/song',
            method: 'get',
            params: {id: sid} //key
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
}
)

export const getDetailSong = (sid) => new Promise(async(resolve, reject) => {
    try{
        const response = await axios({
            //REACT_APP_SERVER_URL = https://api-zingmp3-vercel.vercel.app/api
            url: '/infosong',
            method: 'get',
            params: {id: sid} //key
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
}
)
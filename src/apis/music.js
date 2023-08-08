import axios from '../axios'

//call API
export const apiGetSong = (sid) => new Promise(async(resolve, reject) => {
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

export const apiGetDetailSong = (sid) => new Promise(async(resolve, reject) => {
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
})

export const apiGetDetailPlaylist = (pid) => new Promise(async(resolve, reject) => {
    try{
        const response = await axios({
            //REACT_APP_SERVER_URL = https://api-zingmp3-vercel.vercel.app/api
            url: '/detailplaylist',
            method: 'get',
            params: {id: pid} //key
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
}
)
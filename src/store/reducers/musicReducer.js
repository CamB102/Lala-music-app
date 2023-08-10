import { findAllByAltText } from "@testing-library/react";
import actionTypes from "../actions/actionTypes";

const initState = {
    curSongId: null,
    isPlaying: false,
    inAlbum: false,
    playlist: null
}
//action is the request from view
const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID :
            return {
                ...state,
                curSongId: action.sid || null
            }
        case actionTypes.PLAY :
            return {
                ...state,
                isPlaying: action.flag
            }
        case actionTypes.SET_ALBUM :
            return {
                ...state,
                inAlbum: action.flag
            }
        case actionTypes.PLAYLIST :
            return {
                ...state,
                songs: action.songs || null
            }

        default:
            return state
    }
}

export default musicReducer
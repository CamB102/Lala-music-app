import { findAllByAltText } from "@testing-library/react";
import actionTypes from "../actions/actionTypes";

const initState = {
    banner: [],
    chill: {},
    happyHit: {},
}
//action is the request from view
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME :
            return {
                ...state,
                banner: action.homeData?.find( item => item.sectionId === 'hSlider')?.items || null,
                chill: action.homeData?.find( item => item.sectionId === 'hEditorTheme') || {},
                happyHit: action.homeData?.find( item => item.sectionId === 'hEditorTheme2') || {}
            }
        default:
            return state
    }
}

export default appReducer
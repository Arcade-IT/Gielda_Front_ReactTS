import * as actionTypes from '../actions/actions'
import {updateObject} from "../../shared/utility";
import {userState} from "../types/types";

const initialState: userState = {
    userInfo: {
        uid: ''
    }
}

// Actions:

const setUserInfo = (state: userState, action: any) => {
    return updateObject(state, {
        userInfo: action.userInfo
    })
}

// Reducer:
// TODO: Correct typing

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_USER_INFO:
            return setUserInfo(state, action);
        default:
            return state;
    }
}

export default reducer;
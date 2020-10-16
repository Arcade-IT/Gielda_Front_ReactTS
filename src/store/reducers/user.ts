import { updateObject } from '../../shared/utility';
import {
    SET_USER_INFO,
    TEMP_LOGIN,
    UserActionTypes,
    UserState,
    SetUserInfoAction
} from '../types/types';

const initialState: UserState = {
    userInfo: {
        uid: ''
    },
    loggedIn: false
};

// Actions:

const setUserInfo = (state: UserState, action: SetUserInfoAction) => {
    return updateObject(state, {
        userInfo: action.userInfo
    });
};

const tempLogin = (state: UserState, action: UserActionTypes) => {
    return updateObject(state, {
        loggedIn: !state.loggedIn
    });
};

// Reducer:
// TODO: Correct typing

const reducer = (state = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case SET_USER_INFO:
            return setUserInfo(state, action);
        case TEMP_LOGIN:
            return tempLogin(state, action);
        default:
            return state;
    }
};

export default reducer;

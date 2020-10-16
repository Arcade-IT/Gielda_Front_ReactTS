import {
    SET_USER_INFO,
    TEMP_LOGIN,
    UserActionTypes,
    UserInfo
} from '../types/types';

export function tempLogin(): UserActionTypes {
    return {
        type: TEMP_LOGIN
    };
}

export function setUserInfo(newInfo: UserInfo): UserActionTypes {
    return {
        type: SET_USER_INFO,
        userInfo: newInfo
    };
}

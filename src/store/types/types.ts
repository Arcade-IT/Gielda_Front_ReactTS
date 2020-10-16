// State types
export interface UserInfo {
    uid: string;
}

export interface UserState {
    userInfo: UserInfo;
    loggedIn: boolean;
}

// Action types

export const SET_USER_INFO = 'SET_USER_INFO';
export const TEMP_LOGIN = 'TEMP_LOGIN';

export interface SetUserInfoAction {
    type: typeof SET_USER_INFO;
    userInfo: UserInfo;
}

export interface TempLoginAction {
    type: typeof TEMP_LOGIN;
}

export type UserActionTypes = SetUserInfoAction | TempLoginAction;

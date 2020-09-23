import React from 'react';
import LoginButton from '../../components/UI/Login/LoginButton/LoginButton';
import LoginInput from '../../components/UI/Login/LoginInput/LoginInput';

const Login: React.FC = (props) => {
    return (
        <>
            <LoginInput />
            <LoginButton>Login</LoginButton>
            <LoginButton>Cancel</LoginButton>
        </>
    );
};

export default Login;

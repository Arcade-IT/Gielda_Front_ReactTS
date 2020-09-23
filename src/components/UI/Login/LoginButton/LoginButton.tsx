import React from 'react';
import { Button } from './LoginButton.styled';

const LoginButton: React.FC = (props) => {
    return <Button>{props.children}</Button>;
};

export default LoginButton;

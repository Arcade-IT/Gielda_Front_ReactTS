import React from 'react';
import { Background } from './HeaderButton.styled';

type ButtonProps = {
    icon: JSX.Element;
    clicked: () => void;
};

const HeaderButton: React.FC<ButtonProps> = (props) => {
    const { icon } = props;
    return <Background>{icon}</Background>;
};

export default HeaderButton;

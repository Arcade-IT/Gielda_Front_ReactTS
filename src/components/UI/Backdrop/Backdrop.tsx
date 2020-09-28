import React from 'react';
import { View } from './Backdrop.styled';

type BackdropProps = {
    show: boolean;
};

const Backdrop: React.FC<BackdropProps> = (props) => {
    const { show } = props;

    return <View show={show}>{props.children}</View>;
};

export default Backdrop;

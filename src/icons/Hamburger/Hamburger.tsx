import React from 'react';

import { StyledBurger } from './Hamburger.styled';

type BurgerProps = {
    setOpen(): void;
    open: boolean;
    size: number;
};

const Burger: React.FC<BurgerProps> = (props) => {
    const { setOpen, open, size } = props;
    console.log(size);

    return (
        <StyledBurger onClick={setOpen} open={open} size={size}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;

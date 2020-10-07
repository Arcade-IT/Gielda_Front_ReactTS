import React, { useState } from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIconPlaceholder,
    MenuPlaceholder,
    NavItem,
    NavLink,
    NavItemLogin,
} from './Navbar.styled';

import Burger from '../../../../../icons/Hamburger/Hamburger';

const Navbar: React.FC = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon>icon</NavIcon>
                    LOGO
                </NavLogo>

                <MenuIconPlaceholder>
                    <Burger
                        setOpen={() => setOpen(!open)}
                        open={open}
                        size={1.5}
                    />
                </MenuIconPlaceholder>
                <MenuPlaceholder onClick={() => setOpen(!open)} open={open}>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/landingPage/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/landingPage/services">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/landingPage/app">App</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/landingPage/contact">Contact</NavLink>
                    </NavItem>
                    <NavItemLogin>
                        <NavLink to="/landingPage/Login">Login/SignUp</NavLink>
                    </NavItemLogin>
                </MenuPlaceholder>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;

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
} from './Navbar.styled';

import Burger from '../../../icons/Hamburger/Hamburger';

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
                        <NavLink to="/landingPage">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/landingPage">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/landingPage">App</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/landingPage">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/landingPage">More Info</NavLink>
                    </NavItem>
                </MenuPlaceholder>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;

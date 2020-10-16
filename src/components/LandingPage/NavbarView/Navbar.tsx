import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavLogoImage,
    MenuIconPlaceholder,
    MenuPlaceholder,
    NavItem,
    NavLink,
    NavItemLogin
} from './Navbar.styled';
import { LogoHeader } from '../../../assets';

import { Burger } from '../../../icons';

const Navbar: React.FC<PropsFromRedux> = (props) => {
    const [open, setOpen] = useState(false);
    const { tempLogin } = props;

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavLogoImage src={LogoHeader} />
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
                    <NavItemLogin>Login</NavItemLogin>
                    <NavItemLogin>Signup</NavItemLogin>
                </MenuPlaceholder>
            </NavbarContainer>
        </Nav>
    );
};

const mapDispatchToProps = {
    tempLogin: () => ({ type: 'TEMP_LOGIN' })
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Navbar);

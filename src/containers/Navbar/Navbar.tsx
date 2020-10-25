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
import { LogoHeader } from '../../assets';
import { Burger } from '../../icons';
import { routes } from '../../routes';

interface NavbarProps {
    toggleLogin: (isLogin: boolean) => void;
}

type Props = NavbarProps & PropsFromRedux;

const Navbar: React.FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const { toggleLogin } = props;
    // const { tempLogin, toggleLogin } = props;

    const {
        app,
        landingPage,
        landingPageAbout,
        landingPageContact,
        landingPageServices
    } = routes;

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
                        <NavLink to={landingPage}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={landingPageAbout} replace>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={landingPageServices}>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={app}>App</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={landingPageContact}>Contact</NavLink>
                    </NavItem>
                    <NavItemLogin onClick={() => toggleLogin(true)}>
                        Login
                    </NavItemLogin>
                    <NavItemLogin onClick={() => toggleLogin(false)}>
                        Signup
                    </NavItemLogin>
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

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../../containers/Navbar/NavbarContainer.styled';

export const Nav = styled.nav`
    background-color: ${(props) => props.theme.primaryDark};
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 100%;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: ${(props) => props.theme.primaryLightest};
    justify-self: flex-start;
    text-decoration: none;
    font-size: 3.5rem;
    display: flex;
    align-items: center;
`;

export const NavLogoImage = styled.img`
    margin:1rem;
    width: auto;
    height: 5rem;
    align-items: center;
    justify-content: center;
`;

export const MenuIconPlaceholder = styled.div`
    display: none;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
        display: flex;
    } ;
`;

interface MenuProps {
    readonly open: boolean;
}

export const MenuPlaceholder = styled.ul<MenuProps>`
    background-color: ${(props) => props.theme.primaryDark};

    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: rem;
        left: ${(props) => (props.open ? 0 : '-100%')};
        border-top: 1px solid ${(props) => props.theme.primaryLight};
        background-image: linear-gradient(
            180deg,
            ${(props) => props.theme.primaryDark},
            ${(props) => props.theme.primaryLight}
        );

        opacity: 1;
        transition: all 0.6s ease;
    } ;
`;

export const NavItem = styled.li`
    height: 3rem;
    border: none;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    background-color: transparent;
    margin-right: 1rem;

    &:hover {
        border-bottom: 2px solid ${(props) => props.theme.secondaryDark};
        transform: scale(1.1);
    }

    @media screen and (max-width: 900px) {
        width: 100%;

        &:hover {
            border: none;
            color: ${(props) => props.theme.secondaryDark};
        }
    }
`;

export const NavItemLogin = styled.li`
    height: 2rem;
    padding: 2rem 0.5rem;
    border: 1px solid ${(props) => props.theme.secondaryDark};
    text-decoration: none;
    background-color: transparent;

    &:hover {
        border-bottom: 2px solid ${(props) => props.theme.secondaryDark};
        transform: scale(1.1);
    }

    @media screen and (max-width: 900px) {
        width: 100%;

        &:hover {
            border: none;
            color: ${(props) => props.theme.secondaryDark};
        }
    }
`;

export const NavLink = styled(Link)`
    height: 110%;
    color: ${(props) => props.theme.primaryLightest};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    justify-content: center;

    &:hover {
        border: none;
        color: ${(props) => props.theme.secondaryDark};
    }
`;

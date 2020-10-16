import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${(props) => props.theme.primaryDark};
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;

    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    z-index: 1;
    width: 100%;
    max-width: 130em;
    margin-right: auto;
    margin-left: auto;
    padding: 0 4em;

    @media screen and (max-width: 991px) {
        padding: 0 2em;
    }
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
    margin: 1rem;
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
        top: 0;
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
    transition: ${(props) => props.theme.mediumSpeed};

    &:hover {
        border-bottom: 2px solid ${(props) => props.theme.secondaryDark};
        transform: translateY(-0.3rem);
    }

    @media screen and (max-width: 900px) {
        width: 100%;

        &:hover {
            border: none;
            color: ${(props) => props.theme.secondaryDark};
        }
    }
`;

export const NavItemLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2rem;
    padding: 1.5rem 0.5rem;
    border: 1px solid ${(props) => props.theme.secondaryDark};
    text-decoration: none;
    background-color: transparent;
    transition: ${(props) => props.theme.mediumSpeed};
    border-radius: 0.3rem;
    color: white;
    cursor: pointer;

    &:hover {
        transform: translateY(-0.3rem);
        color: ${(props) => props.theme.secondaryDark};
    }

    &:last-child {
        margin-left: 2rem;
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
    transition: ${(props) => props.theme.mediumSpeed};

    &:hover {
        border: none;
        color: ${(props) => props.theme.secondaryDark};
    }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../../../../containers/Navbar/NavbarContainer.styled';

export const Nav = styled.nav`
    background-color: ${(props) => props.theme.primaryDark};
    height: 4em;
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
    font-size: 2em;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled.div`
    margin-right: 0.5em;
    width: 1.8em;
    height: 1.8em;
    background-color: white;
    color: #000;
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
        height: 85vh;
        position: absolute;
        top: 4em;
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
    height: 2em;
    border: none;
    border-bottom: 2px solid transparent;
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

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    color: #fff;
    padding: 2em;
`;

export const BoxContainer = styled.div`
    box-shadow: ${(props) => props.theme.boxDark};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${(props) => props.theme.primaryDark};
    @media screen and (min-width: 900px) {
        flex-direction: row;
        margin: 2em 10em;
    }
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex: 3;
    align-items: center;
    justify-content: center;
    padding: 4em;

    @media screen and (max-width: 900px) {
        padding: 1em;
        background-color: red;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex: 7;
    flex-direction: column;
    @media screen and (min-width: 900px) {
        padding-bottom: 4em;
        padding-top: 4em;
        padding-left: 4em;
        padding-right: 4em;
    }

    @media screen and (max-width: 900px) {
        padding: 5em;
        width: 100%;
    }
`;

export const Heading = styled.h1`
    padding-bottom: 0.1em;
    font-size: 3em;
    line-height: 1.1;
    margin-bottom: 0.2em;
    font-weight: 900;
    text-transform: capitalize;
    color: ${(props) => props.theme.primaryLightest};
`;

export const Subtitle = styled.p`
    padding-bottom: 0.1em;
    margin-bottom: 0.4em;
    font-size: 2em;
    font-weight: 400;
    line-height: 1em;
    text-transform: capitalize;
    color: ${(props) => props.theme.primaryLightest};
`;

export const Text = styled.p`
    padding-bottom: 0.1em;
    margin-bottom: 0.2em;
    font-size: 2em;
    color: ${(props) => props.theme.primaryLightest};
    font-weight: 100;
    text-transform: capitalize;
`;

export const Img = styled.img`
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    height: auto;

    @media screen and (max-width: 900px) {
        padding-bottom: 4em;
        padding-top: 4em;
        padding-right: 1em;
        padding-left: 1em;
    }
`;

export const ButtonJoin = styled(Link)`
    background-color: ${(props) => props.theme.secondaryDark};
    position: relative;
    width: 20em;
    color: ${(props) => props.theme.primaryLightest};
    font-size: 1.6em;
    text-decoration: none;
    border: none;
    text-align: center;
    padding: 1em 1.1em;
    margin: 2em 0;

    @media screen and (max-width: 900px) {
        width: 100%;
    }

    &:hover {
        opacity: 0.8;
    }
    &:active {
        position: relative;
        opacity: 1;
        top: -0.1em;
    }
`;

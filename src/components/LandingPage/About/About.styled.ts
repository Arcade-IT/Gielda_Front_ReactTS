import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    color: #fff;
    padding: 2rem;
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
        margin: 2rem 10rem;
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
    padding: 4rem;

    @media screen and (max-width: 900px) {
        min-width: 100%;
        padding: 1rem;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex: 7;
    flex-direction: column;
    @media screen and (min-width: 900px) {
        padding-bottom: 4rem;
        padding-top: 4rem;
        padding-left: 4rem;
        padding-right: 4rem;
    }

    @media screen and (max-width: 900px) {
        padding: 5rem;
        width: 100%;
    }
`;

export const Heading = styled.h1`
    padding-bottom: 0.1rem;
    font-size: 3rem;
    line-height: 4rem;
    margin-bottom: 0.2rem;
    font-weight: 900;
    text-transform: capitalize;
    color: ${(props) => props.theme.primaryLightest};
`;

export const Subtitle = styled.p`
    padding-bottom: 0.1rem;
    margin-bottom: 0.4rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.primaryLightest};
`;

export const Text = styled.p`
    padding-bottom: 0.1rem;
    margin-bottom: 0.2rem;
    font-size: 2rem;
    line-height: 2.2rem;
    color: ${(props) => props.theme.primaryLightest};
    font-weight: 100;
    text-transform: capitalize;
`;

export const Img = styled.img`
    border: 0;
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    height: auto;

    @media screen and (max-width: 900px) {
        padding-bottom: 4rem;
        padding-top: 4rem;
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;

export const ButtonJoin = styled(Link)`
    background-color: ${(props) => props.theme.secondaryDark};
    position: relative;
    width: 20rem;
    color: ${(props) => props.theme.primaryLightest};
    font-size: 2rem;
    font-weight: 900;
    text-decoration: none;
    border: none;
    text-align: center;
    padding: 1rem 1.1rem;
    margin: 2rem 0;

    @media screen and (max-width: 900px) {
        width: 100%;
    }

    &:hover {
        background-color: ${(props) => props.theme.secondaryDark};
        transform: translateY(-0.2rem);
    }
    &:active {
        position: relative;
        opacity: 1;
        transform: scale(1.02);
    }
`;

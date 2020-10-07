import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const View = styled.div`
    display: grid;
    grid-gap: 2em;
    grid-auto-rows: minmax(30em, auto);
    margin: 10em;
    color: ${(props) => props.theme.primaryLightest};

    @media screen and (min-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 2em 2em;
        @media screen and (min-width: 600px) {
            padding: 1em;
            grid-template-columns: repeat(2, 1fr);
            @media screen and (min-width: 900px) {
                padding: 1em;
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
`;

export const Container = styled.div`
    background-color: ${(props) => props.theme.primaryDark};
    padding: 1em 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
`;

export const Heading = styled.h1`
    max-width: 40em;
    font-size: 2em;
    line-height: 1.1;
    margin-bottom: 0.2em;
    font-weight: 900;
    text-transform: capitalize;
    padding-bottom: 0.5em;
`;

export const Subtitle = styled.p`
    max-width: 40em;
    margin-bottom: 0.4em;
    font-size: 1.5em;
    font-weight: 500;
    line-height: 1em;
    text-transform: capitalize;
    padding-bottom: 0.5em;
`;

export const Text = styled.p`
    max-width: 40em;
    margin-bottom: 0.2em;
    font-size: 1.5em;
    font-weight: 200;
    text-transform: capitalize;
    padding-bottom: 0.5em;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 0 20%;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
`;

export const ButtonLink = styled(Link)`
    background-color: ${(props) => props.theme.secondaryDark};
    width: 10em;
    color: ${(props) => props.theme.primaryLightest};
    font-size: 1.6em;
    text-decoration: none;
    border: none;
    padding: 1em 1.1em;
    max-height: 3em;
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    @media screen and (min-width: 900px) {
        width: 50%;
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

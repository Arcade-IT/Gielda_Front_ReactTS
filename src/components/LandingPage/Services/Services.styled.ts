import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const View = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: minmax(30rem, auto);
    margin: 10rem;
    color: ${(props) => props.theme.primaryLightest};

    @media screen and (min-width: 400px) {
        grid-template-columns: 1fr;
        margin: 2rem;
    }
    @media screen and (min-width: 600px) {
        padding: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 900px) {
        padding: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Container = styled.div`
    background-color: ${(props) => props.theme.primaryDark};
    padding: 1rem 0;
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
    padding: 2rem;
`;

export const Heading = styled.h1`
    font-size: 2rem;
    line-height: 1.1;
    margin-bottom: 0.2rem;
    font-weight: 900;
    text-transform: capitalize;
    padding-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
    margin-bottom: 0.4rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1rem;
    text-transform: capitalize;
    padding-bottom: 0.5rem;
`;

export const Text = styled.p`
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 200;
    text-transform: capitalize;
    padding-bottom: 0.5rem;
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
    padding: 1rem;
`;

export const ButtonLink = styled(Link)`
    background-color: ${(props) => props.theme.secondaryDark};
    color: ${(props) => props.theme.primaryLightest};
    font-size: 1.6rem;
    text-decoration: none;
    border: none;
    padding: 1rem 1.1rem;
    max-height: 3rem;
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    transition: ${props => props.theme.mediumSpeed};
    
    @media screen and (min-width: 900px) {
        width: 50%;
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

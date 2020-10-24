import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface InfoInterface {
    readonly lightView: boolean;
    readonly reverse: boolean;
}

export const InfoRow = styled.div<InfoInterface>`
    box-shadow: ${(props) => props.theme.boxLight};
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    border-radius: 0.3rem;
    margin: 2rem 10rem;

    background: ${(props) =>
        props.lightView ? props.theme.primaryDark : props.theme.primaryLighter};
    @media screen and (max-width: 900px) {
        margin: 2rem 2rem;
        padding: 0;
    }
`;

export const InfoColumn = styled.div`
    flex: 3;
    justify-content: center;

    @media screen and (max-width: 900px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
    @media screen and (min-width: 900px) {
        margin-bottom: 1rem;
        padding-left: 10rem;
        padding-right: 10rem;
        padding-top: 5rem;
    }
`;

export const InfoColumnImage = styled.div`
    flex: 2;
    justify-content: center;
    align-items: center;
    width: 30vw;
    @media screen and (max-width: 900px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media screen and (min-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 80rem;
    padding-top: 0;
    padding-bottom: 2rem;

    @media screen and (max-width: 900px) {
        padding: 2rem 0;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 76rem;
    height: 100%;
    display: flex;
    margin: 1rem 0;
    justify-content: center;
    width: 100%;
    padding: 10rem;

    @media screen and (max-width: 900px) {
        margin: 2rem 0;
    }
`;

export const TopLine = styled.div`
    font-size: 2rem;
    line-height: 1rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
    padding: 2rem;
`;

export const Img = styled.img`
    padding-right: 2rem;
    padding-left: 2rem;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 90rem;
    min-width: 40%;
    width: 100%;
    height: auto;
`;

export const Heading = styled.h1`
    font-size: 3rem;
    line-height: 3.5rem;
    margin-bottom: 0.2rem;
    font-weight: 900;
    text-transform: capitalize;
`;

export const Subtitle = styled.p`
    max-width: 60rem;
    margin-bottom: 0.4rem;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3rem;
    text-transform: capitalize;
`;

export const Text = styled.p`
    max-width: 60rem;
    margin-bottom: 0.2rem;
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 100;
    text-transform: capitalize;
`;

export const BouttonContainer = styled.div`
    display: flex;
    width: 25rem;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
`;

export const ButtonLink = styled(Link)`
    background-color: ${(props) => props.theme.secondaryMedium};
    width: 100%;
    color: ${(props) => props.theme.primaryMedium};
    font-size: 1.6rem;
    text-decoration: none;
    border: none;
    padding: 2rem 2rem;
    max-height: 3rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    box-shadow: ${(props) => props.theme.boxLight};
    transition: ${(props) => props.theme.mediumSpeed};
    border-radius: 0.3rem;

    &:hover {
        background-color: ${(props) => props.theme.secondaryLight};
        transform: translateY(-0.2rem);
        box-shadow: ${(props) => props.theme.boxMedium};
    }

    &:active {
        transform: translateY(0.1rem);
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

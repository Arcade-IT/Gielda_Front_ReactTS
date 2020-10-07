import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface InfoInterface {
    readonly lightView: boolean;
    readonly reverse: boolean;
}

export const InfoRow = styled.div<InfoInterface>`
    box-shadow: ${(props) => props.theme.boxDark};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

    margin: 2em 0em;

    background: ${(props) =>
        props.lightView ? props.theme.primaryDark : props.theme.primaryLighter};

    @media screen and (min-width: 900px) {
        margin: 2em 10em;
    }
`;

export const InfoColumn = styled.div`
    flex: 3;
    max-width: 100%;
    justify-content: center;

    @media screen and (max-width: 900px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
    @media screen and (min-width: 900px) {
        margin-bottom: 1em;
        padding-left: 10em;
        padding-top: 5em;
    }
`;

export const InfoColumnImage = styled.div`
    flex: 2;
    max-width: 100%;
    justify-content: center;
    align-items: center;

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
        flex-direction: row;
    }
`;

export const TextWrapper = styled.div`
    max-width: 50em;
    padding-top: 0;
    padding-bottom: 5em;

    @media screen and (max-width: 900px) {
        padding-bottom: 4em;
        padding-top: 4em;
        padding-left: 4em;
        padding-right: 4em;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 76em;
    height: 100%;
    display: flex;
    margin: 1em 0em;
    justify-content: center;

    @media screen and (max-width: 900px) {
        margin: 2em 0em;
    }
`;

export const TopLine = styled.div`
    font-size: 2em;
    line-height: 1em;
    font-weight: 700;
    letter-spacing: 0.2em;
    margin-bottom: 2em;
`;

export const Img = styled.img`
    padding-right: 2em;
    padding-left: 2em;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 90em;
    width: 100%;
    height: auto;
`;

export const Heading = styled.h1`
    font-size: 2em;
    line-height: 1.1;
    margin-bottom: 0.2em;
    font-weight: 900;
    text-transform: capitalize;
`;

export const Subtitle = styled.p`
    max-width: 40em;
    margin-bottom: 0.4em;
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1em;
    text-transform: capitalize;
`;

export const Text = styled.p`
    max-width: 40em;
    margin-bottom: 0.2em;
    font-size: 1em;
    font-weight: 100;
    text-transform: capitalize;
`;

export const BouttonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

import styled from 'styled-components';

interface InfoInterface {
    readonly lightView: boolean;
    readonly reverse: boolean;
}

export const View = styled.div`
    color: #fff;
    padding: 2em 2em;
`;

export const InfoRow = styled.div<InfoInterface>`
    box-shadow: ${(props) => props.theme.boxDark};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

    margin: 2em 0em;

    background: ${(props) =>
        props.lightView ? props.theme.primaryDark : props.theme.primaryLighter};

    @media screen and (min-width: 768px) {
        margin: 2em 10em;
    }
`;

export const InfoColumn = styled.div`
    flex: 3;
    max-width: 100%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
    @media screen and (min-width: 768px) {
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

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 50em;
    padding-top: 0;
    padding-bottom: 5em;

    @media screen and (max-width: 768px) {
        padding-bottom: 4em;
        padding-top: 4em;
        padding-left: 4em;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 76em;
    height: 100%;
    display: flex;
    margin: 1em 0em;
    justify-content: center;

    @media screen and (max-width: 768px) {
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
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 90em;
    min-height: 30em;
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

export const Text = styled.text`
    max-width: 40em;
    margin-bottom: 0.2em;
    font-size: 1em;
    font-weight: 100;
    text-transform: capitalize;
`;

import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.primaryLightest};
    padding: 2rem;
    display: flex;
    position: relative;
`;

interface CardInterface {
    clicked: boolean;
}

export const LeftContainer = styled.button<CardInterface>`
    position: absolute;
    top: 5rem;
    left: 10rem;
    width: 50%;
    height: 60%;
    border: none;
    z-index: 2;
    border: 1px solid ${(props) => props.theme.secondaryDark};
    border-radius: 15px;
    background-color: ${(props) => props.theme.primaryLighter};
    box-shadow: ${(props) => props.theme.boxDark};
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    &:hover {
        z-index: 10;
    }
`;
export const RightContainer = styled.button<CardInterface>`
    position: absolute;
    bottom: 5rem;
    right: 10rem;
    height: 60%;
    width: 40%;
    background-color: ${(props) => props.theme.primaryMedium};
    z-index: ${(props) => (props.clicked ? 1 : 2)};
    box-shadow: ${(props) => props.theme.boxDark};
    border-radius: 15px;
    border: 1px solid ${(props) => props.theme.secondaryDark};
    &:hover {
        z-index: 10;
    }
`;

//Left Container

export const ImageContainer = styled.div`
    width: 50%;
    height: 80%;
    border-right: 1px solid ${(props) => props.theme.secondaryDark};
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    padding: 5rem;
`;

export const TextPane = styled.div`
    display: flex;
    flex: 1;
    padding: 2rem;
    padding-left: 5rem;
    justify-content: space-around;
    flex-direction: column;
    color: ${(props) => props.theme.primaryLightest};
    align-items: flex-start;
    height: 50%;
    width: 100%;
`;

export const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.primaryLightest};
    width: 100%;
`;

export const ContactText = styled.p`
    padding-left: 1rem;
`;

export const ContactAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 60%;
`;

export const IconContainer = styled.div`
    padding: 4rem;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

export const IconButton = styled.a`
    background-color: transparent;
    border: none;
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
    transition: ${(props) => props.theme.mediumSpeed};
    border-radius: 0.3rem;

    &:hover {
        transform: translateY(-0.2rem);
        box-shadow: ${(props) => props.theme.boxMedium};
    }

    &:active {
        transform: translateY(0.1rem);
    }
`;

export const IconButtonTitle = styled.p`
    text-decoration: none;
    color: ${(props) => props.theme.primaryLightest};
    padding-left: 1rem;
`;

//

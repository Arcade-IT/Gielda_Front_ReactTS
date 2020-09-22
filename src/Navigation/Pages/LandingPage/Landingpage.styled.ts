import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    background-color: red;
`;

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.primaryLighter};
    color: ${(props) => props.theme.primaryLightest};
`;

export const ViewWraper = styled.div`
    padding: 20px;
    height: 90%;
    width: 90%;
    background-color: ${(props) => props.theme.primaryMedium};
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.boxDark};
`;

export const TopSection = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const LogoContainer = styled.div`
    width: 200px;
    height: 100%;
    background-color: white;
    color: black;
`;

export const ButtonContainer = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
`;

export const CustomButton = styled.button`
    width: 70px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.secondaryDark};
    margin: 0 10px;
    color: ${(props) => props.theme.primaryLightest};
    font-family: ${(props) => props.theme.family};
    font-weight: 700;

    &:hover {
        color: #fff;
    }
    &:active {
        scale: 1.11;
        transform: rotate(5deg);
    }
`;

export const ContentContainer = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 1px;
`;

export const ContentRight = styled.div`
    display: flex;
`;

export const ContentLeft = styled.div`
    display: flex;
`;

export const TitleAppContainer = styled.div`
    margin-left: 30px;
    font-size: 80px;
    display: flex;
    flex-direction: column;
    padding: 0;
`;

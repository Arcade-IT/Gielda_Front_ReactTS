import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    grid-template-rows: repeat(max-content, 2);
    grid-template-columns: 14vw 86vw;
`;

export const Header = styled.header`
    width: 100%;
    height: 12vh;
    background-color: ${(props) => props.theme.primaryMedium};
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    display: flex;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    width: 15rem;
    height: 6rem;
    background-color: #fff;
    margin: auto 0 auto 4rem;
`;

export const ButtonsContainer = styled.div`
    width: 15rem;
    height: 6rem;
    background-color: #fff;
    margin: auto 4rem auto 0;
`;

export const Main = styled.main`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    width: 100%;
    height: 88vh; // TODO: temporary
    background-color: ${(props) => props.theme.primaryDark};
    color: ${(props) => props.theme.primaryLightest};
`;

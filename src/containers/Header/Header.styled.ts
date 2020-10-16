import styled from 'styled-components';

export const Wrapper = styled.header`
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
    width: 7%;
    height: 6rem;
    margin: auto 4rem auto 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    grid-template-rows: repeat(max-content, 2);
    grid-template-columns: 20rem 1fr;
    grid-gap: 0;
`;

export const Main = styled.main`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    width: 100%;
    height: 90vh; // TODO: temporary
    background-color: ${(props) => props.theme.primaryDark};
    color: ${(props) => props.theme.primaryLightest};
`;

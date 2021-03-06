import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${(props) => props.theme.primaryLight};
    width: 100%;
    grid-row: 1 / 3;
    grid-column: 1 / 3;
`;

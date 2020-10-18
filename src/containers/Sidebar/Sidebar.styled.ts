import styled from 'styled-components';

export const Wrapper = styled.nav`
    width: 100%;
    height: 90vh; /* TODO: temporary height */
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background-color: ${(props) => props.theme.primaryMedium};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.primaryLightest};
`;

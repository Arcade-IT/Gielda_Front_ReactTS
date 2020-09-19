import styled from 'styled-components';

export const Panel = styled.div`
    width: 100%;
    height: 4rem;
    transition: all 0.6s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    text-transform: uppercase;
    cursor: pointer;

    &:first-child {
        margin-top: 1rem;
    }

    &:hover {
        background-color: ${(props) => props.theme.primaryLight};
    }
`;

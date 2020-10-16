import styled from 'styled-components';

export const Background = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: ${(props) => props.theme.mediumSpeed};

    &:hover {
        background-color: ${(props) => props.theme.primaryLight};
        transform: translateY(-0.3rem);
        box-shadow: ${(props) => props.theme.boxLight};
    }

    &:active {
        background-color: ${(props) => props.theme.primaryLighter};
        transform: translateY(-0.1rem);
    }
`;

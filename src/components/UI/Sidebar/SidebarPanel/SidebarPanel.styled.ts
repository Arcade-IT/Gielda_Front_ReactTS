import styled from 'styled-components';

export const Panel = styled.div`
    width: 100%;
    height: 4rem;
    transition: all 0.6s ease;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    padding-left: 3rem;
    color: ${(props) => props.theme.primaryLighter};

    &:first-child {
        margin-top: 1rem;
    }

    &:hover {
        background-color: ${(props) => props.theme.primaryLight};
        color: ${(props) => props.theme.primaryLightest};
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.p`
    margin-left: 2.5rem;
    font-size: 1.6rem;
`;

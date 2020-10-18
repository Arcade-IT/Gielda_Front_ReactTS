import styled from 'styled-components';

export const Container = styled.div`
    margin: auto 2rem auto auto;
`;

export const SearchInput = styled.input`
    width: 20rem;
    height: 3rem;
    margin: auto 0;
    outline: none;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    padding-left: 2.8rem;
    background-color: ${(props) => props.theme.primaryLight};
    color: ${(props) => props.theme.primaryLightest};
    border: none;
    border-radius: 0.5rem;
    transition: ${(props) => props.theme.mediumSpeed};

    &::placeholder {
        color: ${(props) => props.theme.primaryLighter};
        transition: ${(props) => props.theme.mediumSpeed};
    }

    &:active,
    &:focus {
        background-color: ${(props) => props.theme.primaryLighter};

        &::placeholder {
            color: ${(props) => props.theme.primaryLightest};
        }
    }
`;

export const Icon = styled.i`
    position: absolute;
    font-size: 1.6rem;
    min-width: 5rem;
    padding: 0.7rem;
    color: ${(props) => props.theme.primaryLightest};
`;

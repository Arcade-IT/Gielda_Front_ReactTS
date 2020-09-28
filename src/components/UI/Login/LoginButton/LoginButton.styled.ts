import styled from 'styled-components';

export const Button = styled.button`
    width: 15rem;
    height: 3rem;
    border: none;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.1rem;
    border-radius: 0.3rem;
    font-weight: 400;
    font-size: 1.6rem;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.secondaryMedium};
    color: #fff;
    transition: ${(props) => props.theme.mediumSpeed};
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: ${(props) => props.theme.secondaryDark};
        transform: translateY(-0.2rem);
    }
`;

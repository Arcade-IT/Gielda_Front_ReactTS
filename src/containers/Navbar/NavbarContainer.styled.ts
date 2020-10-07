import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 130em;
    margin-right: auto;
    margin-left: auto;
    padding: 0 4em;

    @media screen and (max-width: 991px) {
        padding: 0 2em;
    }
`;

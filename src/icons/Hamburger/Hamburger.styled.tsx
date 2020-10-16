import styled from 'styled-components';

interface BurgerProps {
    readonly open: boolean;
    size: number;
}

export const StyledBurger = styled.button<BurgerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 105;
    grid-row: 1 / -1;
    grid-column: 1 / 2;
    transform: scale(${(props) => props.size});
    &:focus {
        outline: none;
    }
    div {
        width: 2.1rem;
        height: 2px;
        background-color: ${(props) => props.theme.primaryLightest};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        transform: scale(${(props) => props.size});

        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};

            transform: ${({ open }) =>
                open ? 'translateX(20px)' : 'translateX(0)'};
        }
        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

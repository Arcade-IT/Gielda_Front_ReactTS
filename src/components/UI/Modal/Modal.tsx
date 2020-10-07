import React, { forwardRef } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { Area } from './Modal.styled';

type ModalProps = {
    open: boolean;
    ref?: React.Ref<HTMLDivElement>;
};

const Modal: React.FC<ModalProps> = forwardRef(
    (props, ref: React.Ref<HTMLDivElement>) => {
        const { open } = props;

        return (
            <>
                <Backdrop show={open}>
                    <Area ref={ref}>{props.children}</Area>
                </Backdrop>
            </>
        );
    }
);

export default Modal;

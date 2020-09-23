import React, { useRef, useState } from 'react';
import {
    ButtonsContainer,
    Header,
    LogoContainer,
    Main,
    Wrapper,
} from './MainLayout.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme } from '../../themes';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import Login from '../../containers/Login/Login';
import Dashboard from '../../views/Dashboard/Dashboard';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const MainLayout: React.FC = (props) => {
    const [openModal, setOpenModal] = useState(false);

    const modalRef: React.Ref<HTMLDivElement> = useRef(null);

    useOutsideClick(modalRef, () => {
        setOpenModal(false);
    });

    const closeLogin = () => {
        setOpenModal(false);
    };

    return (
        <ThemeProvider theme={colorTheme}>
            <Wrapper>
                <Modal open={openModal} ref={modalRef}>
                    <Login />
                </Modal>
                <ThemeProvider theme={shadowTheme}>
                    <Header>
                        <LogoContainer>Logo</LogoContainer>
                        <ButtonsContainer>
                            Buttons: User, Settings, Notifications
                        </ButtonsContainer>
                    </Header>
                </ThemeProvider>
                <Sidebar />
                <Main>
                    <Dashboard toggleModal={() => setOpenModal(!openModal)} />
                </Main>
            </Wrapper>
        </ThemeProvider>
    );
};

export default MainLayout;

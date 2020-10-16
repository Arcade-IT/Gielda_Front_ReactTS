import React, { useRef, useState } from 'react';
import { Main, Wrapper } from './MainLayout.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme, transitionTheme } from '../../themes';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import Login from '../../containers/Login/Login';
import Dashboard from '../../views/Dashboard/Dashboard';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Header from '../../containers/Header/Header';

const MainLayout: React.FC = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [isModalLogin, setIsModalLogin] = useState(true);

    const modalRef: React.Ref<HTMLDivElement> = useRef(null);

    useOutsideClick(modalRef, () => {
        setOpenModal(false);
    });

    const openLogin = () => {
        setIsModalLogin(true);
        setOpenModal(true);
    };

    const openSignup = () => {
        setIsModalLogin(false);
        setOpenModal(true);
    };

    const closeLogin = () => {
        setOpenModal(false);
    };

    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={transitionTheme}>
                <Wrapper>
                    <Modal open={openModal} ref={modalRef}>
                        <Login
                            clickedCancel={closeLogin}
                            isLogin={isModalLogin}
                        />
                    </Modal>
                    <ThemeProvider theme={shadowTheme}>
                        <Header />
                    </ThemeProvider>
                    <Sidebar />
                    <Main>
                        <Dashboard
                            toggleLogin={() => openLogin()}
                            toggleSignup={() => openSignup()}
                        />
                    </Main>
                </Wrapper>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default React.memo(MainLayout);

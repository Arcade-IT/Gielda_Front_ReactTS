import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Wrapper } from './MainLayout.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme, transitionTheme } from '../../themes';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import Login from '../../containers/Login/Login';
import Dashboard from '../../views/Dashboard/Dashboard';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Header from '../../containers/Header/Header';
import { About, Home, Services } from '../../components/LandingPage';
import LandingPage from '../../views/Landing/Landing';
import { routes } from '../../routes';
import { connect, ConnectedProps } from 'react-redux';

const MainLayout: React.FC<PropsFromRedux> = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [isModalLogin, setIsModalLogin] = useState(true);

    const { loggedIn } = props;

    const {
        landingPage,
        landingPageAbout,
        landingPageApp,
        landingPageContact,
        landingPageServices
    } = routes;
    const modalRef: React.Ref<HTMLDivElement> = useRef(null);

    useOutsideClick(modalRef, () => {
        setOpenModal(false);
    });

    const openLoginModal = (isLogin: boolean) => {
        setIsModalLogin(isLogin);
        setOpenModal(true);
    };

    const closeLoginModal = () => {
        setOpenModal(false);
    };

    const loggedInView = (
        <>
            <Header />
            <Sidebar />
            <Main>
                <Dashboard />
            </Main>
        </>
    );

    const loggedOutView = (
        <LandingPage
            toggleLogin={(isLogin: boolean) => openLoginModal(isLogin)}
        >
            <Route exact path={landingPage} component={Home} />
            <Route exact path={landingPageAbout} component={About} />
            <Route exact path={landingPageServices} component={Services} />
            <Route exact path={landingPageContact} component={Home} />
            <Route exact path={landingPageApp} component={Home} />
        </LandingPage>
    );

    return (
        <React.Suspense fallback={'Loading...'}>
            <ThemeProvider theme={colorTheme}>
                <ThemeProvider theme={shadowTheme}>
                    <ThemeProvider theme={transitionTheme}>
                        <Router>
                            <Switch>
                                <Wrapper>
                                    <Modal open={openModal} ref={modalRef}>
                                        <Login
                                            clickedCancel={closeLoginModal}
                                            isLogin={isModalLogin}
                                        />
                                    </Modal>
                                    {loggedIn ? loggedInView : loggedOutView}
                                </Wrapper>
                            </Switch>
                        </Router>
                    </ThemeProvider>
                </ThemeProvider>
            </ThemeProvider>
        </React.Suspense>
    );
};

const mapStateToProps = (state: { user: { loggedIn: boolean } }) => {
    return {
        loggedIn: state.user.loggedIn
    };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(MainLayout));

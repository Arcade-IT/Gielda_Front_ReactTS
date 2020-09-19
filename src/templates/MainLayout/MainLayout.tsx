import React from 'react';
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

const MainLayout: React.FC = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <Wrapper>
                <ThemeProvider theme={shadowTheme}>
                    <Header>
                        <LogoContainer>Logo</LogoContainer>
                        <ButtonsContainer>
                            Buttons: User, Settings, Notifications
                        </ButtonsContainer>
                    </Header>
                </ThemeProvider>
                <Sidebar />
                <Main>{props.children}</Main>
            </Wrapper>
        </ThemeProvider>
    );
};

export default MainLayout;

import React from 'react';
import { Wrapper } from './Landing.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme, fontTheme } from '../../themes';

import Navbar from '../../components/LandingPage/Home/LPNavbar/Navbar';

const Landing: React.FC = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <Wrapper>
                        <Navbar />
                        {props.children}
                    </Wrapper>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Landing;

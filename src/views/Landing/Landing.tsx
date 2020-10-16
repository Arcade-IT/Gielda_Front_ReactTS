import React from 'react';
import { Wrapper } from './Landing.styled';
import { ThemeProvider } from 'styled-components';
import {
    colorTheme,
    shadowTheme,
    fontTheme,
    transitionTheme
} from '../../themes';

import Navbar from '../../components/LandingPage/NavbarView/Navbar';

const Landing: React.FC = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <ThemeProvider theme={transitionTheme}>
                        <Wrapper>
                            <Navbar />
                            {props.children}
                        </Wrapper>
                    </ThemeProvider>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Landing;

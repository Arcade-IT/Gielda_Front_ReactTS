import React from 'react';
import { Wrapper } from './Landingpage.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme, fontTheme } from '../../../../themes';

import Navbar from '../../../../components/UI/LandingPage/Home//LPNavbar/Navbar';

const Landingpage: React.FC = (props) => {
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

export default Landingpage;

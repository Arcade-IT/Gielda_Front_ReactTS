import React from 'react';
import { Wrapper } from './Landingpage.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme, fontTheme } from '../../../../themes';
import NBview from '../../../../components/UI/NBview/NBview';

import Navbar from '../../../../components/UI/LPNavbar/Navbar';

const Landingpage: React.FC = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <Wrapper>
                        <Navbar />
                        <NBview />
                    </Wrapper>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Landingpage;

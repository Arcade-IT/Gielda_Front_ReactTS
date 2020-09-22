import React from 'react';
import { Wrapper } from './Landingpage.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme } from '../../../themes';

const Landingpage: React.FC = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <Wrapper>
                <ThemeProvider theme={shadowTheme}>Landingpage</ThemeProvider>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Landingpage;

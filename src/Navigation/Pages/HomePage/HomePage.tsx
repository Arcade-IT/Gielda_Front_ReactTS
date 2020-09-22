import React from 'react';
import { Wrapper } from './HomePage.styled';
import { ThemeProvider } from 'styled-components';
import { colorTheme, shadowTheme } from '../../../themes';

const HomePage: React.FC = (props) => {
    return (
        <ThemeProvider theme={colorTheme}>
            <Wrapper>
                <ThemeProvider theme={shadowTheme}>HomePage</ThemeProvider>
            </Wrapper>
        </ThemeProvider>
    );
};

export default HomePage;

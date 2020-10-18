import React from 'react';
import { Wrapper } from './Landing.styled';
import { ThemeProvider } from 'styled-components';
import {
    colorTheme,
    shadowTheme,
    fontTheme,
    transitionTheme
} from '../../themes';
import Navbar from '../../containers/Navbar/Navbar';

interface LandingProps {
    toggleLogin: (isLogin: boolean) => void;
}

const Landing: React.FC<LandingProps> = (props) => {
    const { toggleLogin } = props;
    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <ThemeProvider theme={transitionTheme}>
                        <Wrapper>
                            <Navbar
                                toggleLogin={(isLogin: boolean) =>
                                    toggleLogin(isLogin)
                                }
                            />
                            {props.children}
                        </Wrapper>
                    </ThemeProvider>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Landing;

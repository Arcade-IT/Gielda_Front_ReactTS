import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorTheme, fontTheme, shadowTheme } from '../../../themes';

import { RightPanel, LeftPanel } from '../Contact';
import { MainContainer } from './Contact.styled';

export interface BookmarkProps {
    clicked: boolean;
    onClick: any;
}

const Contact: React.FC<BookmarkProps> = (props) => {
    const [clicked, setClicked] = useState(true);

    const clickRight = () => setClicked(false);
    const clickLeft = () => setClicked(true);

    return (
        <ThemeProvider theme={colorTheme}>
            <ThemeProvider theme={shadowTheme}>
                <ThemeProvider theme={fontTheme}>
                    <MainContainer>
                        <LeftPanel clicked={clicked} onClick={clickLeft} />
                        <RightPanel
                            clicked={clicked}
                            onClick={clickRight}
                        ></RightPanel>
                    </MainContainer>
                </ThemeProvider>
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Contact;

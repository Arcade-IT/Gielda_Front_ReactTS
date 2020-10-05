import React from 'react';

import LandingPage from '../../../Navigation/Pages/LandingPage/Navigation/LandingPage';

import NBview from '../LandingPage/Home/LPview/NBview';
import About from './About/About';

interface PropsI {
    location: { pathname: string };
    pathname: string;
}
const GetPages = (props: PropsI) => {
    switch (props.location.pathname) {
        case '/':
            return <NBview />;
        case '/landingPage/about':
            return <About />;

        default:
            break;
    }
};

const Layout: React.FC<any> = (props) => {
    return <LandingPage>{GetPages(props)}</LandingPage>;
};

export default Layout;

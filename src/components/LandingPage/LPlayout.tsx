import React, { useEffect } from 'react';

import LandingPage from '../../views/Landing/Landing';

import NBview from './Home/LPview/NBview';
import About from './About/About';
import Services from './Services/Services';

interface PropsI {
    location: { pathname: string };
    pathname: string;
}
const GetPages = (props: PropsI) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);

    switch (props.location.pathname) {
        case '/':
            return <NBview />;
        case '/landingPage/about':
            return <About />;
        case '/landingPage/services':
            return <Services />;

        default:
            break;
    }
};

const Layout: React.FC<any> = (props) => {
    return <LandingPage>{GetPages(props)}</LandingPage>;
};

export default Layout;

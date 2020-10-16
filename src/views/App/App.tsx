import React from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import LandingPage from '../../views/Landing/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';
import { About, Services, Home } from '../../components/LandingPage';

const App: React.FC = () => {
    /* Changes/PR:
1) deleted homepage as it is unnecessary
2) changed main font
3) corrected .prettierrc
4) uninstalled react-icons
5) rearranged folders, deleted unnecessary files, corrected imports


!!! TODO -  1) extract Home, About, Services as containers. Child elements as components. DONE!!!!!
            2) Implement LPlayout.tsx functionality into LandingPage (now in views folder) and delete LPlayout.tsx DONE!!!!!
            3) Full component names - it can be long, but understandable. Same for routes below. DONE!!!!!
            4) Implement animations on buttons similar to those on MainLayout - without enlarging fonts. Done!!!!
*/

    const {
        landingpage,
        mainlayout,
        LandingpageAbout,
        LandingpageApp,
        LandingpageContact,
        LandingpageServices,
        LandingpageLogin
    } = routes;
    return (
        <Router>
            <Switch>
                <Route exact path={mainlayout} component={MainLayout} />
                <LandingPage>
                    <Route exact path={landingpage} component={Home} />
                    <Route exact path={LandingpageAbout} component={About} />
                    <Route
                        exact
                        path={LandingpageServices}
                        component={Services}
                    />
                    <Route exact path={LandingpageContact} component={Home} />
                    <Route exact path={LandingpageApp} component={Home} />
                    <Route exact path={LandingpageLogin} component={Home} />
                </LandingPage>
            </Switch>
        </Router>
    );
};

export default App;

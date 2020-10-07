import React from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import LandingPage from '../../components/LandingPage/LPlayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';

const App: React.FC = () => {
    /* Changes/PR:
1) deleted homepage as it is unnecessary
2) changed main font
3) corrected .prettierrc
4) uninstalled react-icons
5) rearranged folders, deleted unnecessary files, corrected imports


!!! TODO -  1) extract Home, About, Services as containers. Child elements as components.
            2) Implement LPlayout.tsx functionality into LandingPage (now in views folder) and delete LPlayout.tsx
            3) Full component names - it can be long, but understandable. Same for routes below.
            4) Implement animations on buttons similar to those on MainLayout - without enlarging fonts
*/

    const {
        landingpage,
        mainlayout,
        LPabout,
        LPapp,
        LPcontact,
        LPlogin,
        LPservices
    } = routes;
    return (
        <Router>
            <Switch>
                <Route exact path={mainlayout} component={MainLayout} />
                <Route exact path={landingpage} component={LandingPage} />
                <Route exact path={LPabout} component={LandingPage} />
                <Route exact path={LPapp} component={LandingPage} />
                <Route exact path={LPcontact} component={LandingPage} />
                <Route exact path={LPlogin} component={LandingPage} />
                <Route exact path={LPservices} component={LandingPage} />
            </Switch>
        </Router>
    );
};

export default App;

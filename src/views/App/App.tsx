import React from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import LandingPage from '../../components/UI/LandingPage/LPlayout';
import HomePage from '../../Navigation/Pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';

const App: React.FC = () => {
    const {
        landingpage,
        homepage,
        mainlayout,
        LPabout,
        LPapp,
        LPcontact,
        LPlogin,
        LPservices,
    } = routes;
    return (
        <Router>
            <Switch>
                <Route exact path={mainlayout} component={MainLayout} />
                <Route exact path={homepage} component={HomePage} />
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

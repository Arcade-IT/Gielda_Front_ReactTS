import React from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import LandingPage from '../../Navigation/Pages/LandingPage/LandingPage';
import HomePage from '../../Navigation/Pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../../Navigation/Routes';

const App: React.FC = () => {
    const { landingpage, homepage, mainlayout } = routes;
    return (
        <Router>
            <Switch>
                <Route exact path={mainlayout} component={MainLayout} />
                <Route exact path={homepage} component={HomePage} />
                <Route exact path={landingpage} component={LandingPage} />
            </Switch>
        </Router>
    );
};

export default App;

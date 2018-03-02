import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/MainPage/Wizard';
import FirstView from './components/Wizard/FirstView/FirstView';
import SecondView from './components/Wizard/SecondView/SecondView';
import ThirdView from './components/Wizard/ThirdView/ThirdView';
import FourthView from './components/Wizard/FourthView/FourthView';
import FifthView from './components/Wizard/FifthView/FifthView';


export default (
    <HashRouter>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/wizard" render={() => (
                <Wizard>
                    <Switch>
                        <Route path="/wizard/1" component={FirstView} />
                        <Route path="/wizard/2" component={SecondView} />
                        <Route path="/wizard/3" component={ThirdView} />
                        <Route path="/wizard/4" component={FourthView} />
                        <Route path="/wizard/5" component={FifthView} />
                    </Switch>
                </Wizard>
            )} />
        </div>
    </HashRouter>
)
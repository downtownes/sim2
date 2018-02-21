import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Wizard from './components/Wizard/MainPage/Wizard';
import FirstView from './components/Wizard/FirstView/FirstView';
import SecondView from './components/Wizard/SecondView/SecondView';


export default(
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register}/>
        <Route path="/wizard" render={ () => (
            <Wizard>
                <Switch>
                    <Route path="/wizard/1" component={FirstView}/>
                    <Route path="/wizard/2" component={SecondView}/>
                </Switch>
            </Wizard>
        )}/>
    </Switch>
)
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigationbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';

export default () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Navigationbar}/>
      <Route path="/login" component={Registration}/>
    </Switch>
</BrowserRouter>
);
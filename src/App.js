import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/ConfigureStore';

import AllTeams from './components/AllTeams';
import Start from './components/Start';
import Tournament from './components/Tournament';
import Dec from './components/Dec.js/index';


const store = ConfigureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Switch>
        <Route path="/Start" component={Start} />
        <Route exact path="/League-Standings" component={AllTeams} />
        <Route exact path="/Single-Elimination-Cup" component={Tournament} />
        <Route exact path="/Double-Elimination-Cup" component={Dec} />
        <Redirect to="/Start" />
      </Switch>
    </div>
  </Provider>
);

export default (App);

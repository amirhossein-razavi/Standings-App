import React, { Component } from 'react';
import AllTeams from './components/AllTeams';
import Start from './components/Start';
import Tournament from './components/Tournament';
import Dec from './components/Dec.js/index';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import { Switch, Route, Redirect } from 'react-router-dom';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path='/Start' component={Start}></Route>
            <Route exact path='/League-Standings' component={AllTeams}></Route>
            <Route exact path='/Single-Elimination-Cup' component={Tournament}></Route>
            <Route exact path='/Double-Elimination-Cup' component={Dec}></Route>
            <Redirect to="/Start" />
          </Switch>
        </div>
      </Provider>
    );
  }
}
export default (App);


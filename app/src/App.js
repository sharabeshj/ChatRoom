import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';

import MainPage from '../src/Containers/MainPage';
import Auxillary from './hoc/Auxillary/Auxillary';

class App extends Component {
  render() {
    return (
      <Auxillary>
        <Switch>
          <Route path = '/' component = {MainPage}/>
        </Switch>
      </Auxillary>
    );
  }
}

export default App;

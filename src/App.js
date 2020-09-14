import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;

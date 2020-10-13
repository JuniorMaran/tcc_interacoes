import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Busca from './pages/Busca';
import Receitas from './pages/Receitas';
import Interacao from './pages/Interacao';
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/busca" component={Busca} />
          <Route path="/receitas" component={Receitas} />
          <Route path="/interacao" component={Interacao} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
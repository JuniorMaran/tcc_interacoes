import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home';
import Busca from './pages/Busca';
import Interacao from './pages/Interacao';
import Receitas from './pages/Receitas';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/busca" component={Busca} />
                <Route path="/receitas" component={Receitas} />
                <Route path="/interacao" component={Interacao} />
            </Switch>
        </BrowserRouter>
    )
};


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import TodoCreateScreen from './screens/TodoCreate';
import TodosScreen from './screens/TodosScreen';

const screens = (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={TodosScreen} />
            <Route path="/todo/create" component={TodoCreateScreen}/>
        </Switch>
    </ BrowserRouter>
);

ReactDOM.render(screens, document.getElementById('root'));

serviceWorker.unregister();

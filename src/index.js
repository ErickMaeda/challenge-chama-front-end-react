import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Import Screens
import TodoCreateScreen from './screens/TodoCreate';
import TodosScreen from './screens/TodosScreen';

// Import Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const screens = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={TodosScreen} />
                <Route path="/todo/create" component={TodoCreateScreen}/>
            </Switch>
        </ BrowserRouter>
    </Provider>
);

ReactDOM.render(screens, document.getElementById('root'));

serviceWorker.unregister();

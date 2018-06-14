import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';

import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

export const store = createStoreWithMiddleware(reducers)


ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <Switch> 
                <Route path="/" component={App}/> 
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();

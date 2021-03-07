import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import contactReducer from './store/reducer/contact'
import {watchContacts } from './store/saga/'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducers = combineReducers (
    {
        contact : contactReducer
    }
)

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(watchContacts)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

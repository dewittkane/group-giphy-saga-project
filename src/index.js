import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';


// import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(sagaMiddleware, logger)
);

function* watcherSaga() {

}

// starting engine
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));

// registerServiceWorker();

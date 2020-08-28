import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put} from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';


const search = (state = [], action) => {
    if(action.type === 'SET_GIF') {
        return action.payload.data;
    }
    return state; 
}


const favoriteImages = (state = [], action) => {
    if(action.type === 'GET_FAV') {
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

const categoriesReducer = (state = [], action) => {
    if (action.type === 'SET_CATEGORIES') {
        return action.payload;
    }
    return state;
} 

function* favGetGifs(){
    try{
         
        let response = yield axios.get('/api/favorite')
        console.log(response.data);

        yield put({type: 'GET_FAV', payload: response.data })
        
        

    } catch (error) {
        console.log('error in GET favGetGifs!', error);
        
    }
}


function* fetchGifs(action){
    try{

        console.log(action.payload)
        let response = yield axios.get('/api/search/', action.payload)
        
        console.log(response.data);

        yield put({type: 'SET_GIF', payload: response.data})
    } catch (error){
        console.log('error in get request', error)
    }
}

function* fetchCategories(){
    try{
        let response = yield axios.get('/api/category/')
        console.log(response.data);

        yield put({type: 'SET_CATEGORIES', payload: response.data})
    } catch (error){
        console.log('error in fetch categories request', error)
    }
}

    function* favGifs(action){
        try{
            let response = yield axios.post('/api/favorite', action.payload)
           

            yield put({type: 'FETCH_IMAGES'})
            

        } catch (error){
            console.log('error in fav PUT request', error);
            
        }
    }

 function* watcherSaga(){
        yield takeEvery('SEARCH_GIFS', fetchGifs);
        yield takeEvery('SET_FAV', favGifs );
        yield takeEvery('FETCH_CATEGORIES', fetchCategories);
        yield takeEvery('FETCH_IMAGES', favGetGifs);

    }


const sagaMiddleware = createSagaMiddleware();

//add reducers
const storeInstance = createStore(
    combineReducers({
        favoriteImages,
        search,
        categoriesReducer

    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));

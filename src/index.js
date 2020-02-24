import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
//import reducer from '../src/store/reducer';
import catListReducer from './store/reducers/catList'
import catReducer from './store/reducers/cat'
import addCatReducer from './store/reducers/addCat'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
         catList: catListReducer,
         cat: catReducer,
         addCat:addCatReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

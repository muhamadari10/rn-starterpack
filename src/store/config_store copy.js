import { createStore, combineReducers, compose } from 'redux';
import counterReducer from './reducers/counter_reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configStore;
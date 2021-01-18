import { combineReducers } from 'redux';
import counterReducer from './counter_reducer';
import AsyncStorage from '@react-native-community/async-storage';

const rootReducer = combineReducers({
    counter: counterReducer,
});


import {persistCombineReducers, persistReducer} from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage : AsyncStorage
};
export default persistReducer(persistConfig, rootReducer)
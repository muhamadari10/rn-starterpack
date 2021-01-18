import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import {persistStore, persistReducer } from 'redux-persist';
import persistedReducer from './reducers';




export default function configureStore() {
//   const enhancer = composeWithDevTools({})(applyMiddleware(thunk));

  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
  const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
  
  const persistor = persistStore(store);
  

  if (module.hot) {
    module
      .hot
      .accept(() => {
        store.replaceReducer(require('./reducers').default);
      });
  }

  return {persistor, store}
}
import { createStore, applyMiddleware,compose} from 'redux';
//import thunk from 'redux-thunk';
import reducer from './reduce';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas.js'
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
// );
//store必须是唯一的 只有store能改变自己的state
//const store = createStore(reducer,applyMiddleware(thunk));
//const store = createStore(reducer,enhancer);

//使用reduex的redux-saga中间件
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
const store = createStore(
  reducer,
  enhancer
)
sagaMiddleware.run(todoSagas);
export default store;


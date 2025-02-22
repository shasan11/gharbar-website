
import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducers from './reducers/productReducers';
import rootCategoryReducer from './reducers/categoryReducers';
import bannerReducers from './reducers/bannerReducers';
import configReducers from './reducers/configReducers';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  products: productReducers, 
  categories:rootCategoryReducer,
  banners:bannerReducers,
  config:configReducers,
  
});

const store = createStore(rootReducer, 
    applyMiddleware(thunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//only for the development purposes
);
export default store;
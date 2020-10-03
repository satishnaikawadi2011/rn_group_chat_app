import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';
import data from './reducers/data';
import ui from './reducers/ui';

const initialState = {};

const middleware = [
	thunk
];

const reducers = combineReducers({
	user,
	data,
	ui
});

const composeEnhancers =

		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
		compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;

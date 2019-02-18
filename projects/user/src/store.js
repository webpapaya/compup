import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createMemoizeMiddleware } from 'compup/lib/memoize-actions';
import createMessageBusMiddleware from 'compup/lib/create-message-bus-middleware';
import { name as SERVICE_NAME } from '../package.json';


const rootReducer = combineReducers({
	/* eslint-disable global-require */
	users: require('./domain/users/users-reducer').default,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(
		ReduxThunk,
		createMemoizeMiddleware,
		createMessageBusMiddleware({ serviceName: SERVICE_NAME }),
	)),
);

export default store;

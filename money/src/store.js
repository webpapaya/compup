import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createMemoizeMiddleware } from './lib/memoize-actions';

const rootReducer = combineReducers({
	/* eslint-disable global-require */
	authentication: require('./domain/users/users-reducer').default,
	ui: require('./domain/ui/reducer').default,
	users: require('./domain/users/users-reducer').default,

	userAuthentication: require('./domain/users/authentication-reducer').default,
	moneyTransactions: require('./domain/money-transactions/reducer').default,
	moneyTransactionReports: require('./domain/money-transaction-reports/reducer').default,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(
		ReduxThunk,
		createMemoizeMiddleware,
	)),
);

export default store;
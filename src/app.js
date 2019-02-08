import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const lazy = (importFn) => {
	const Component = React.lazy(importFn);
	return () => (
		<React.Suspense fallback={<div>loading</div>}>
			<Component />
		</React.Suspense>
	)
}

const UserSignUp = lazy(() => import('./container/user-sign-up'));
const UserSignIn = lazy(() => import('./container/user-sign-in'));
const MoneyTransferCreate = lazy(() => import('./container/money-transaction-create'));
const MoneyTransactionList = lazy(() => import('./container/money-transaction-list'));
const MoneyTransactionReports = lazy(() => import('./container/money-transaction-reports'));
const MoneyTransactionFilter = lazy(() => import('./container/money-transaction-filter'));
const UserUpdate = lazy(() => import('./container/user-update'));
const Navigation = lazy(() => import('./container/navigation'));

import WhenUserAuthentication from './container/when-user-authenticated';
import CenteredPanel from './components/centered-panel';

const MoneyTransactionPage = () => (
	<React.Fragment>
		<MoneyTransactionReports />
		<MoneyTransferCreate />
		<MoneyTransactionFilter />
		<MoneyTransactionList />
	</React.Fragment>
);

export default () => (
	<React.Fragment>
		<WhenUserAuthentication authenticated>
			<React.Fragment>
				<Navigation />
				<Switch>
					<Route
						path="/money-transactions"
						component={MoneyTransactionPage}
					/>
					<Route
						path="/settings"
						component={UserUpdate}
					/>
					<Redirect to="/money-transactions" />
				</Switch>
			</React.Fragment>
		</WhenUserAuthentication>

		<WhenUserAuthentication authenticated={false}>
			<CenteredPanel>
				<Switch>
					<Route path="/user-sign-up" component={UserSignUp} />
					<Route path="/user-sign-in" component={UserSignIn} />
					<Redirect to="/user-sign-in" />
				</Switch>
			</CenteredPanel>
		</WhenUserAuthentication>
	</React.Fragment>
);

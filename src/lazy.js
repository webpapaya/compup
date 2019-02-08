import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const lazy = (importFn) => {
	const Component = React.lazy(importFn)

	return (props) => (
		<Provider store={store}>
			<React.Suspense fallback={<div>loading</div>}>
				<Component {...props} />
			</React.Suspense>
		</Provider>
	)
}

export default lazy;
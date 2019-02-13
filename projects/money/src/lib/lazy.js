import React from 'react';
import { Provider } from 'react-redux';

const lazy = (importFn, store) => {
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
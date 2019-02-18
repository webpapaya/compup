import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import retargetEvents from './retarget-react-events';
import importCSS from './import-css';

const lazy = (importFn, store) => {
	const Component = React.lazy(importFn);

	return props => (
		<Provider store={store}>
			<React.Suspense fallback={<div>loading</div>}>
				<Component {...props} />
			</React.Suspense>
		</Provider>
	);
};

const registerReactAsWebComponent = ({
	namespace, name, importComponent, store,
}) => {
	class ReactWrapper extends HTMLElement {
		connectedCallback() {
			const shadow = this.attachShadow({ mode: 'open' });
			const importFn = () => Promise.resolve()
				.then(() => importCSS({ node: shadow, path: window[`__${namespace}__styles_url`] || 'styles.css' }))
				.then(() => importComponent());

			const mountPoint = document.createElement('div');
			shadow.appendChild(mountPoint);

			const Container = lazy(importFn, store);

			render(<Container />, mountPoint);
			retargetEvents(shadow);
		}
	}
	global.customElements.define(name, ReactWrapper);
};

export default registerReactAsWebComponent;

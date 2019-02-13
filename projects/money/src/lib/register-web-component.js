import React from 'react';
import retargetEvents from 'react-shadow-dom-retarget-events';
import { render } from 'react-dom';
import lazy from './lazy';
import importCSS from './import-css';

const registerWebComponent = ({ name, importComponent, store }) => {
	class ReactWrapper extends HTMLElement {
		connectedCallback() {
			const shadow = this.attachShadow({ mode: 'open' });
			const importFn = () => Promise.resolve()
				.then(() => importCSS({ node: shadow, path: 'styles.css' }))
				.then(() => importComponent());

			const mountPoint = document.createElement('div'); 
			shadow.appendChild(mountPoint);

			const Container = lazy(importFn, store);
			render(<Container />, mountPoint);
			retargetEvents(shadow)
		}
	}
	global.customElements.define(name, ReactWrapper);
}

export default registerWebComponent;
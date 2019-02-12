import React from 'react';
import { render } from 'react-dom';
import lazy from './lazy';

const registerContainer = (name, importFn) => {
	class ReactWrapper extends HTMLElement {
		connectedCallback() {
			const mountPoint = document.createElement('div'); 
			this.attachShadow({ mode: 'closed' }).appendChild(mountPoint);
			const Container = lazy(importFn);
			render(<Container />, mountPoint);
		}
	}
	customElements.define(name, ReactWrapper);
}

registerContainer('my-service--user-sign-up', () => import('./container/user-sign-up'));
registerContainer('my-service--user-sign-in', () => import('./container/user-sign-in'));
registerContainer('my-service--money-transaction-create', () => import('./container/money-transaction-create'));
registerContainer('my-service--money-transaction-list', () => import('./container/money-transaction-list'));
registerContainer('my-service--money-transaction-reports', () => import('./container/money-transaction-reports'));
registerContainer('my-service--money-transaction-filter', () => import('./container/money-transaction-filter'));
registerContainer('my-service--user-update', () => import('./container/user-update'));
registerContainer('my-service--navigation', () => import('./container/navigation'));
registerContainer('my-service--when-user-authenticated', () => import('./container/when-user-authenticated'));

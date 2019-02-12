import 'construct-style-sheets-polyfill';
import React from 'react';
import { render } from 'react-dom';
import lazy from './lazy';

const sheet = new CSSStyleSheet();
const stylesheetLoaded = sheet.replace('@import url("styles.css")');
const importCSS = () => stylesheetLoaded;

const registerContainer = (name, importJS) => {
	class ReactWrapper extends HTMLElement {
		connectedCallback() {
			const mountPoint = document.createElement('div'); 
			const shadow = this.attachShadow({ mode: 'closed' });
			shadow.adoptedStyleSheets = [sheet];
			shadow.appendChild(mountPoint);

			const Container = lazy({ importJS, importCSS });
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


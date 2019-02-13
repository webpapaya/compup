import store from './store';
import registerWebComponent from './lib/register-web-component';
import WEB_COMPONENTS from './web-components';
const COMPONENT_PREFIX = 'my-service';

Object.keys(WEB_COMPONENTS).forEach((key) => {
	const name = `${COMPONENT_PREFIX}--${key}`;
	registerWebComponent({ store, name, importComponent: WEB_COMPONENTS[key] });
	console.info(`Registered: ${name}`);
});

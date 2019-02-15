import registerReactAsWebComponet from 'compup/lib/register-react-as-web-component';
import store from './store';
import WEB_COMPONENTS from './web-components';

const COMPONENT_PREFIX = 'events';
Object.keys(WEB_COMPONENTS).forEach((key) => {
	const name = `${COMPONENT_PREFIX}--${key}`;
	registerReactAsWebComponet({ store, name, importComponent: WEB_COMPONENTS[key] });
	console.info(`Registered: ${name}`);
});


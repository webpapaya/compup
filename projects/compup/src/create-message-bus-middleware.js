const EVENT_NAME = '__compup__redux_action';

const dispatchAction = ({ action, serviceName }) => {
	if (action.serviceName) { return; }

	const detail = { ...action, serviceName };
	const event = new CustomEvent(EVENT_NAME, { detail });
	global.document.dispatchEvent(event);
};

const createMessageBusMiddleware = ({ serviceName }) => (store) => {
	global.document.addEventListener(EVENT_NAME, ({ detail }) => {
		if (detail.serviceName === serviceName) { return; }
		if (process.env.NODE_ENV === 'development') {
			console.log(`New message from: '${detail.serviceName}' to '${serviceName}'`, detail);
		}
		store.dispatch(detail);
	});

	return next => (action) => {
		const result = next(action);
		dispatchAction({ action, serviceName });
		return result;
	};
};

export default createMessageBusMiddleware;

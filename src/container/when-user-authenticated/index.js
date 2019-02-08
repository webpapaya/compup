import React from 'react';
import { Provider, connect } from 'react-redux';
import store from '../../store';

const mapStateToProps = (state, props) => ({
	shouldRenderChildren: (state.userAuthentication.expiryDate >= new Date()) === props.authenticated,
});

const Organism = connect(mapStateToProps)(({ children, shouldRenderChildren }) => (shouldRenderChildren
	? children
	: null));

export default (props) => (
	<Provider store={store}>
		<Organism {...props} />
	</Provider>
);


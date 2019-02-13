import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserActions from '../../domain/users/actions';
import Organism from './organism';
import {compose} from 'ramda';

const mapDispatchToProps = (dispatch, props) => ({
	onSettingsRedirect: () => Promise.resolve()
		.then(() => props.history.push('/settings')),

	onUserSignOut: () => Promise.resolve()
		.then(() => dispatch(UserActions.signOut()))
		.then(() => props.history.push('/')),
});

export default compose(
	withRouter,
	connect(null, mapDispatchToProps),
)(Organism);

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserActions from '../../domain/users/actions';
import Organism from './organism';
import {compose} from 'ramda';

const mapDispatchToProps = (dispatch, props) => ({
	onSubmit: payload => Promise.resolve()
		.then(() => dispatch(UserActions.signIn(payload)))
	// add history actions
		.then(() => props.history.push('/money-transactions')),
});

export default compose(
	connect(null, mapDispatchToProps),
)(Organism);

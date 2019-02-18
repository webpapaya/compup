import { connect } from 'react-redux';
import { compose } from 'ramda';
import hasSideEffect from 'compup/lib/has-side-effect';
import UserActions from '../../domain/users/actions';
import Organism from './organism';

const mapStateToProps = state => ({
	users: state.users,
});

const mapDispatchToProps = dispatch => ({
	sideEffect: () => dispatch(UserActions.where()),
	onUserSelect: payload => dispatch({ type: 'user/selected', meta: {}, payload }),
});

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	hasSideEffect(),
)(Organism);

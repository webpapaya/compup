import { connect } from 'react-redux';
import { compose } from 'ramda';
import UserActions from '../../domain/users/actions';
import Organism from './organism';

const mapDispatchToProps = dispatch => ({
	onSubmit: body => dispatch(UserActions.create(body)),
});

export default compose(
	connect(null, mapDispatchToProps),
)(Organism);

import { connect } from 'react-redux';
import UserActions from '../../domain/users/actions';
import Organism from './organism';
import {compose} from 'ramda';

const mapDispatchToProps = dispatch => ({
	onSubmit: (body) => dispatch(UserActions.create(body)),
});

export default compose(
	connect(null, mapDispatchToProps),
)(Organism);

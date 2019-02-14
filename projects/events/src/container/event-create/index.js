import { connect } from 'react-redux';
import EventActions from '../../domain/events/actions';
import Organism from './organism';
import {compose} from 'ramda';

const mapDispatchToProps = dispatch => ({
	onSubmit: (body) => dispatch(EventActions.create(body)),
});

export default compose(
	connect(null, mapDispatchToProps),
)(Organism);

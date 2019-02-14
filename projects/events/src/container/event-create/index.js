import { connect } from 'react-redux';
import { compose } from 'ramda';
import EventActions from '../../domain/events/actions';
import Organism from './organism';

const mapDispatchToProps = dispatch => ({
	onSubmit: body => dispatch(EventActions.create(body)),
});

export default compose(
	connect(null, mapDispatchToProps),
)(Organism);

import { connect } from 'react-redux';
import EventActions from '../../domain/events/actions';
import Organism from './organism';
import {compose} from 'ramda';
import hasSideEffect from 'compup/lib/has-side-effect';

const mapStateToProps = state => ({
	events: state.events
});

const mapDispatchToProps = dispatch => ({
	sideEffect: () => dispatch(EventActions.where()),
});

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	hasSideEffect(),
)(Organism);

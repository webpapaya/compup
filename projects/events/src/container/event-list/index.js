import { connect } from 'react-redux';
import { compose } from 'ramda';
import hasSideEffect from 'compup/lib/has-side-effect';
import EventActions from '../../domain/events/actions';
import EventParticipationActions from '../../domain/event-participations/actions';

import Organism from './organism';

const mapStateToProps = state => ({
	events: state.events,
	eventParticipations: state.eventParticipations,
	selectedUsers: state.selectedUsers,
});

const mapDispatchToProps = dispatch => ({
	sideEffect: () => Promise.all([
		dispatch(EventActions.where()),
		dispatch(EventParticipationActions.where()),
	]),
	onParticipationsCreate: ({ event, users }) => {
		const participations = users.map(user => ({
			name: user.name,
			userId: user.id,
			eventId: event.id,
		}));
		return dispatch(EventParticipationActions.create(participations));
	},
});

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	hasSideEffect(),
)(Organism);

import React from 'react';
import {
	filterByQuery, q, where, eq, not, oneOf,
} from 'datenkrake';
import Button from 'design-system/lib/button';
import ListItem from 'design-system/lib/list-item';
import formatDate from '../../helper/format-date';

const formatEvent = event =>
	`${event.name} - From: ${formatDate(event.start)} Until: ${formatDate(event.until)}`;

const EventBody = ({
	selectedUsers,
	eventParticipations,
	onParticipationsCreate,
	event,
}) => {
	const participations = filterByQuery(q(where({ eventId: eq(event.id) })), eventParticipations);
	const usersToAdd = filterByQuery(q(where({
		id: not(oneOf(...participations.map(participation => participation.userId))),
	})), selectedUsers);

	return (
		<>

			{selectedUsers.map(({ id, name }) => (<div key={id}>{name}</div>))}
			<Button onClick={() => onParticipationsCreate({ event, users: usersToAdd })}>
				Add selected users to event
			</Button>
			{participations.map(({ id, name }) => (<div key={id}>{name}</div>))}
		</>
	);
};


export default ({
	events, selectedUsers, eventParticipations, onParticipationsCreate,
}) => (
	<div>
		{ events.map(event => (
			<ListItem
				key={event.id}
				header={formatEvent(event)}
				body={(
					<EventBody
						key={event.id}
						event={event}
						selectedUsers={selectedUsers}
						eventParticipations={eventParticipations}
						onParticipationsCreate={onParticipationsCreate}
					/>
				)}
			/>
		)) }
	</div>
);

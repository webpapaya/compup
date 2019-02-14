import React from 'react';
import ListItem from 'design-system/lib/list-item';
import formatDate from '../../helper/format-date';

const formatEvent = (event) => 
	`${event.name} - From: ${formatDate(event.start)} Until: ${formatDate(event.until)}`;

export default ({ events }) => (
	<div>
		{ events.map((event) => <ListItem key={event.id} header={formatEvent(event)}/>) }
	</div>
)

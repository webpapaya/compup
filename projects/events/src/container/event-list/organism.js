import React from 'react';
import ListItem from 'design-system/lib/list-item';

export default ({ events }) => (
	<div>
		{ events.map((user) => <ListItem key={user.id} header={(user.name)}/>) }
	</div>
)

import React from 'react';
import ListItem from 'design-system/lib/list-item';

export default ({ users }) => (
	<ul>
		{
			users.map((user) => {
				return <ListItem header = {(user.name)}/>;
			}) 
		}
	</ul>
)

import React from 'react';
import ListItem from 'design-system/lib/list-item';
import CheckboxInput from 'design-system/lib/checkbox-input';

export default ({ users }) => (
	<ul>
		{
			users.map((user) => {
				return <ListItem header = {
					<>
					{(user.name)}
					<CheckboxInput/>
					</>
				}/>;
			}) 
		}
	</ul>
)

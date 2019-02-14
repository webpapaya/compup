import React from 'react';
import CheckboxInput from 'design-system/lib/checkbox-input';
import ListItem from 'design-system/lib/list-item';

export default ({ users, onUserSelect }) => (
	<div>
		{ users.map((user) => <ListItem key={user.id} header={
			<>
				<CheckboxInput onChange={ () => onUserSelect(user) } />
				{user.name}
			</>
		}/>) }
	</div>
)

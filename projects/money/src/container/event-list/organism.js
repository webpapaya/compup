import React from 'react';
import ListItem from 'design-system/lib/list-item';
import formatDate from '../../helper/format-date';

export default ({ events }) => (
	<ul>
		{	
			events.map((event) => {
				return <ListItem header ={
					`${event.name} From ${formatDate(event.start)} Until ${formatDate(event.until)}`
				}/>
			}) 
		}
	</ul>
)

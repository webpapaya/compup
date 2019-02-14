import React from 'react';
import { storiesOf } from '@storybook/react';
import Organism from './organism';

const USERS = [
	{ id: 1, name: 'Sepp' },
	{ id: 2, name: 'Maria' },
	{ id: 3, name: 'Martha' },
];

storiesOf('EventList', module)
	.add('default', () => <Organism users={USERS} />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import Organism from './organism';

const EVENTS = [
	{ id: 1, name: "Festival A", start: "2000-01-01", until: "2000-01-02" },
	{ id: 2, name: "Festival B", start: "2000-01-01", until: "2000-01-02" },
	{ id: 3, name: "Festival C", start: "2000-01-01", until: "2000-01-02"},
]

storiesOf('EventList', module)
	.add('default', () => <Organism events={EVENTS} />);

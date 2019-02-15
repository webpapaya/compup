import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Organism from './organism';

storiesOf('EventCreate', module)
	.add('default', () => <Organism onSubmit={action('onSubmit')} />);
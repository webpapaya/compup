import React from 'react';
import PropTypes from 'prop-types';
import styles from './organism.css';
import Button from 'design-system/lib/button';
import Link from 'design-system/lib/link';
import Icon from 'design-system/lib/icon';

const Organism = ({ onUserSignOut }) => (
	<nav className={styles.wrapper}>
		{ 'My friend owes me' }
		<Link to="/money-transactions" variant="button">
			<Icon name="money" />
		</Link>
		<Link to="/settings" variant="button">
			<Icon name="settings" />
		</Link>
		<Button onClick={onUserSignOut} variant="outlined">Sign out</Button>
	</nav>
);

Organism.propTypes = {
	onUserSignOut: PropTypes.func.isRequired,
};

export default Organism;

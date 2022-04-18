import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css'

const css = (...classNames) => classNames
	.filter((className) => className)
	.join(' ')

const Organism = (props) => {
	return (
		<ul className={styles.container}>
			{ props.notifications.map((notification) => {
				return (
					<li 
						key={notification.id}
						className={css(
							styles.item, 
							styles[notification.state]
						)}
					>
						{notification.text}
					</li>
				)
			})}
		</ul>
	)
};

Organism.propTypes = {
	notifications: PropTypes.array,
};

export default Organism;

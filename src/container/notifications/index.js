import { connect } from 'react-redux';
import Organism from './organism';
import pipe from '../../lib/pipe';

const mapStateToProps = state => ({
	notifications: state.notifications
});

export default pipe(
	connect(mapStateToProps),
)(Organism);

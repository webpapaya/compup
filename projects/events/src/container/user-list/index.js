import { connect } from 'react-redux';
import { compose } from 'ramda';
import hasSideEffect from 'compup/lib/has-side-effect';
import Organism from './organism';

const mapStateToProps = state => ({});

export default compose(
	connect(mapStateToProps),
	hasSideEffect(),
)(Organism);

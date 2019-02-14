import { connect } from 'react-redux';
import Organism from './organism';
import {compose} from 'ramda';
import hasSideEffect from 'compup/lib/has-side-effect';

const mapStateToProps = state => ({});

export default compose(
	connect(mapStateToProps),
	hasSideEffect(),
)(Organism);

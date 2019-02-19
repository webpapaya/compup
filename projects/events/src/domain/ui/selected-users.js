import { pick } from 'ramda';

const merge = (uniqueKeys, records) => {
	const obj = records.reduce((result, record) => {
		/* eslint-disable no-param-reassign */
		if (uniqueKeys.length === 1) {
			result[record.id] = record;
		} else {
			result[JSON.stringify(pick(uniqueKeys, record))] = record;
		}
		return result;
	}, {});
	return Object.values(obj);
};


const remove = (state, except) => state.filter(record => record.id !== except.id);

const INITIAL_STATE = [];
const buildRestReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'user/selected':
			return merge(['id'], [...state, action.payload]);
		case 'user/deselected':
			return remove(state, action.payload);
		default:
			return state;
	}
};

export default buildRestReducer;

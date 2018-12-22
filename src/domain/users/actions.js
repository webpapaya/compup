import buildRestActions from '../build-rest-actions';
import { fetchPost } from '../fetch'

const REST_ACTIONS = buildRestActions({ resource: 'users' });

const signIn = ({ email, password }) => (dispatch) => Promise.resolve()
    .then(() => fetchPost('rpc/user_sign_in', { email, pass: password }))
    .then((data) => dispatch({ type: '@USER/signedIn', payload: { token: data[0].token } }));

const signOut = () => (dispatch) => Promise.resolve()
    .then(() => dispatch({ type: 'reset' }))

const signUpAndIn = ({ name, email, password }) => (dispatch) => Promise.resolve()
    .then(() => fetchPost('rpc/user_sign_up', { email, pass: password }))
    .then(() => dispatch({ type: '@USER/signedUp'}))
    .then(() => dispatch(signIn({ email, password })))
    .then(() => dispatch(REST_ACTIONS.create({ name })));

export default {
    ...REST_ACTIONS,
    signIn,
    signOut,
    signUpAndIn,
}; 
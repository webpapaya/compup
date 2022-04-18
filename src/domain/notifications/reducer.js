const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case 'notification/create':
            return [...state, { ...action.payload, state: 'hidden' }]
        case 'notification/show':
			return state.map((notification) => {
                return {
                    ...notification,
                    state: notification.id === action.payload.id
                        ? 'translate-in'
                        : notification.state
                }
            })
        case 'notification/hide':
            return state.map((notification) => {
                return {
                    ...notification,
                    state: notification.id === action.payload.id
                        ? 'translate-out'
                        : notification.state
                }
            })
        case 'notification/remove':
			return state.filter((notification) => notification.id === action.payload.id)
		default:
			return state;
	}
};

export default reducer;

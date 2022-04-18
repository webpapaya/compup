export const showNotification = ({ text }) => (dispatch) => {
    const id = `${+(new Date())}-${Math.random()}`

    dispatch({ 
        type: 'notification/create', 
        payload: { id, text }
     })

     setTimeout(() => {
        dispatch({ 
            type: 'notification/show', 
            payload: { id }
         })
    }, 50)


    setTimeout(() => {
        dispatch({ 
            type: 'notification/hide', 
            payload: { id }
         })
    }, 5000)

    setTimeout(() => {
        dispatch({ 
            type: 'notification/remove', 
            payload: { id }
         })
    }, 100000)
}

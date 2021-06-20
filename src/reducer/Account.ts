const initialState  = {
    list_message: []
}

const Account =  (state  = initialState, action) => {
    switch (action.type) {

    case "LIST_MESSAGE":
        console.log("dispatch list message", action.list_message)
        return { ...state, list_message: action.list_message}
    default:
        return state
    }
}

export default Account;

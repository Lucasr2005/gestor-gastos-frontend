
export const userIdReducer = (state = "", action) => {
    switch (action.type) {
        case "getUser":
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}
const initState = {
    
    currentUser: {
        name: "",
        image_url: "",
        twitter_link: "",
        is_logged: false,
    }
}

const userReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload.currentUser
            }
        case "LOGOUT":
            return {
                ...state,
                currentUser: {
                    name: "",
                    image_url: "",
                    twitter_link: "",
                    is_logged: false,
                }
            }
        default:
            return {...state}
    }
}

export default userReducer;
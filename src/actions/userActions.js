import axios from 'axios';


export const fetchCurrentUser = () => async (dispatch) => {

    const currentUser = await axios.get("https://api.shill.lol/logged_in", { withCredentials: true })

    dispatch({
        type: "FETCH_CURRENT_USER",
        payload: {
            currentUser: currentUser.data,
        }
    })

}

export const logoutUser = () => async (dispatch) => {

    await axios.delete("https://api.shill.lol/logout", { withCredentials: true });
    
    dispatch({
        type: "LOGOUT"
    })

}
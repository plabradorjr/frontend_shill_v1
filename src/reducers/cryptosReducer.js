const initState = {
    trending: [],
    allCoins: [],
    searched: []
}

const cryptosReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_TRENDING":
            return {...state,
                trending: action.payload.trending
            }
        case "FETCH_ALL_COINS":
            return {...state,
                allCoins: action.payload.allCoins
            }
        case "UPDATE_SEARCH_RESULTS":
            return {
                ...state,
                searched: action.payload.searched
            }
        case "DELETE_SEARCH":
            return {
                ...state,
                searched: []
            }
        default:
            return {...state}
    }
}

export default cryptosReducer;
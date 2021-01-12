// import axios from "axios";
import { allCoinsURL, trendingCryptosURL } from "../api";

export const loadTrendingCryptos = () => async (dispatch) => {

    const trendingCryptos = await fetch(trendingCryptosURL()).then(res => res.json())
    // await axios.get(trendingCryptosURL());

    dispatch({
        type: "FETCH_TRENDING",
        payload: {
            trending: trendingCryptos.coins
        }
    })
}


export const loadAllCoins = () => async (dispatch) => {

    const allCoins = await fetch(allCoinsURL()).then(res => res.json())
    // await axios.get(allCoinsURL());

    dispatch({
        type: "FETCH_ALL_COINS",
        payload: {
            allCoins: allCoins
        }
    })
}

export const loadSearchedCrypto = (res) => (dispatch) =>{

    dispatch({
        type: "UPDATE_SEARCH_RESULTS",
        payload: {
            searched: res
        }
    })

}


export const deleteSearchResults = () => (dispatch) => {

    dispatch({
        type: "DELETE_SEARCH"
    })
}

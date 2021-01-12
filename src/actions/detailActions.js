import axios from 'axios';
import {coinDetailsURL, coinHistoricalDataURL} from '../api';


export const loadCoinDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL",
    });

    const detailedCoinData = await axios.get(coinDetailsURL(id))
    const historicalData = await axios.get(coinHistoricalDataURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            detailedCoin: detailedCoinData.data,
            historicalData: historicalData.data
        }
        
    })

}


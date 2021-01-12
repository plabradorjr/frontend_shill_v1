import {combineReducers} from 'redux';
import cryptosReducer from './cryptosReducer';
import detailReducer from './detailReducer';
import userReducer from './userReducer';
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
    trendingCryptos: cryptosReducer,
    coin: detailReducer,
    userReducer,
    commentsReducer
})

export default rootReducer;
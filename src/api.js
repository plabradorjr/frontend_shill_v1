const base_url = "https://api.coingecko.com/api/v3/";

export const trendingCryptosURL = () => `${base_url}search/trending`;

//CRYPTO MORE DETAILS, NAME, PRICE, DESCRIPTION, ETC
//GET/COINS/ID
export const coinDetailsURL = (coin_id) => `${base_url}coins/${coin_id}`;

//Historical price data
export const coinHistoricalDataURL = (id) => `${base_url}coins/${id}/ohlc?vs_currency=usd&days=max`;

//ALL coins indexed by coingecko (id, symbol, name)

export const allCoinsURL = () => `${base_url}coins/list`;

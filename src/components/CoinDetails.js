import React from 'react';
//Styling and animations
import styled from 'styled-components';
//redux
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PriceChart from './PriceChart';

const CoinDetail = () => {

    const addCommaAndRound = (num) => {
        if (num !== null) {
            return num.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } else {
            return "unknown"
        }        
    }

    const addComma = (n) => {
        if (n > 1) {
            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } else {
            return n
        }
    }

    const history = useHistory();

    const exitDetailHandler = (e) => {
        
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.getElementById("srch").classList.toggle("invisible");
            document.getElementById("tradingview").classList.toggle("invisible");

            history.push('/')
        }
    }
    const {detailedCoin, isLoading, historicalData} = useSelector((state) => state.coin);

    return(
        <>{!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <div className="container">
                    <CardDetail className="row mt-5 rounded p-3" >
                        <div>
                            <div className="stats">
                            <img src={detailedCoin.image.large} alt={detailedCoin.name}></img> 

                                <h2>{detailedCoin.name}</h2> 
                                <div className="info">
                                    <h4 className=" pb-2">Price: ${addComma(detailedCoin.market_data.current_price.usd)} (USD)</h4>
                                    <p>Market Cap: ${addCommaAndRound(detailedCoin.market_data.market_cap.usd)} (USD)</p>
                                    <p>Fully Diluted Market Cap: ${detailedCoin.market_data.total_supply && (detailedCoin.market_data.current_price.usd * detailedCoin.market_data.total_supply).toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} (USD)</p>
                                    <p>Circulating Supply: {addCommaAndRound(detailedCoin.market_data.circulating_supply)}</p>
                                    <p>Total Supply: {addCommaAndRound(detailedCoin.market_data.total_supply)}</p>
                                    <br></br>
                                    <a href={"https://twitter.com/" + detailedCoin.links.twitter_screen_name} target="_blank" rel="noopener noreferrer">Twitter: @{detailedCoin.links.twitter_screen_name}</a><br></br>
                                    <a target="_blank" rel="noopener noreferrer" href={detailedCoin.links.homepage[0]}>{detailedCoin.links.homepage[0]}</a>
                                </div>
                            </div>
                        </div>
                        <PriceChart className="container" data={historicalData} />
                        <small className="py-4">Descriptions: {detailedCoin.description.en}</small>

                    </CardDetail>
                </div>
            </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled.div`

    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: #161629;
    position: fixed;
    top: 0;
    left: 0;

`;

const CardDetail = styled.div`

    background-image: linear-gradient(to right top, #192b3b 10%, #363868 90%);

    img {
        height: 250px;
        float: right;
        padding-bottom: 10px;
    }

    a {
        color:#74b9ff;
    }

`;


export default CoinDetail;
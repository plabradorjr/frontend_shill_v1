import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import ShowComments from '../components/ShowComments';
import PostComment from '../components/PostComment';



const bagWallStreetBets = () => {

    return (
        <>
        <NavBar />
        <div className="container">
        <img src="https://pbs.twimg.com/media/DKVYj5IVAAAQ2BH.jpg"
            alt="V"
            className="mx-auto d-block pt-2" style={{height: 200}}>
        </img>
            <h1 className="text-center text-white-50 pt-3">Wen?</h1>
            <div className="row">
                <ChartStyled >
                    <h2>UNI</h2>
                    <TradingView ticker={"COINBASE:UNIUSD"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>SUSHI</h2>
                    <TradingView ticker={"BINANCE:SUSHIUSDT"} />
                </ ChartStyled>
            </div>
            <div className="row">
                <ChartStyled >
                    <h2>BINANCE</h2>
                    <TradingView ticker={"BINANCE:BNBUSDT"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>COINBASE</h2>
                    <TradingView ticker={"FTX:CBSEUSD"} />
                </ ChartStyled>
            </div>
            <div className="row">
                <div className="col m-5 p-5">
                    
                    <PostComment />
                </div>
                <ShowComments />
            </div>
           
        </div>
        </>
    )
}

const ChartStyled = styled.div`
  width: 50%;
  height: 500px;
  margin-bottom: 20px;
  margin-top: 50px;
`

export default bagWallStreetBets;
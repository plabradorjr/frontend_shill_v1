import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import ShowComments from '../components/ShowComments';
import PostComment from '../components/PostComment';



const BagExchange = () => {

    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <>
        <NavBar />
        <div className="container">
        <img src="https://www.canadiangrocer.com/wp-content/uploads/2017/05/The-House-Always-Wins.jpg"
            alt="house always wins"
            className="mx-auto d-block pt-2" style={{height: 200}}>
        </img>
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
                <ChartStyled >
                    <h2>YFI</h2>
                    <TradingView ticker={"FTX:YFIUSD"} />
                </ ChartStyled>
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
  width: 660px;
  height: 500px;
  margin-bottom: 20px;
  margin-top: 50px;
`

export default BagExchange;
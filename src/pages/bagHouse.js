import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import ShowComments from '../components/ShowComments';
import PostComment from '../components/PostComment';
import musicGreen from '../images/music-green.GIF'


const BagExchange = () => {

    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <>
        <NavBar />
        <div className="container">
        <img src={musicGreen}
            alt="wen gf?"
            className="mx-auto d-block pt-2" style={{height: 130}}>
        </img>
        <h4 className="text-center">wen?</h4>
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
                    <h2>YFI</h2>
                    <TradingView ticker={"FTX:YFIUSD"} />
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
  width: 660px;
  height: 500px;
  margin-bottom: 20px;
  margin-top: 50px;
`

export default BagExchange;
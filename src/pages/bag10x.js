import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';



const bagWallStreetBets = () => {

    return (
        <>
        <NavBar />
        <div className="container">
            <h1 className="text-center text-white-50 pt-3">When 10x?</h1>
            <div className="row">
                <ChartStyled >
                    <h2>UNI</h2>
                    <TradingView ticker={"COINBASE:UNIUSD"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>xDai STAKE</h2>
                    <TradingView ticker={"POLONIEX:STAKEUSDT"} />
                </ ChartStyled>
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
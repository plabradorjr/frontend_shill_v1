import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';




const bagChamath = () => {

    return (
        <>
        <NavBar />
        <div className="container">
                     
            <div className="row">
            <h2 className="text-center p-3">AMERICAS 🌎</h2>
            <hr></hr>

                <ChartStyled >
                    <h2>DOW</h2>
                    <TradingView ticker={"NYSE:DOW"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>US SP 500 CFD</h2>
                    <TradingView ticker={"FOREXCOM:SPXUSD"} />
                </ ChartStyled>
            </div>

            <div className="row">
            <h2 className="text-center pt-3">EUROPE 🌍</h2>
            <hr></hr>

                <ChartStyled >
                    <h2>EURO STOXX 50</h2>
                    <TradingView ticker={"INDEX:SX5E"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>DAX INDEX</h2>
                    <TradingView ticker={"XETR:DAX"} />
                </ ChartStyled>
            </div>

            <div className="row">
            <h2 className="text-center pt-3">ASIA PACIFIC 🌏</h2>
            <hr></hr>
                <ChartStyled >
                    <h2>NIKKEI 225 INDEX</h2>
                    <TradingView ticker={"INDEX:NKY"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>Shanghai Shenzhen CSI 300 Index</h2>
                    <TradingView ticker={"SSE:CSI300-HKG"} />
                </ ChartStyled>
            </div>

        </div>
        </>
    )
}

const ChartStyled = styled.div`
  width: 50%;
  height: 500px;
  margin-bottom: 50px;
  margin-top: 20px;
`

export default bagChamath;
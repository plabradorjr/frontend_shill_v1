import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import ShowComments from '../components/ShowComments';
import PostComment from '../components/PostComment';
import stonk from "../images/stonks.png";




const BagGlobal = () => {

    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <>
        <NavBar />
        <img src={stonk} alt="stonk" className="mx-auto d-block pt-2" style={{height: 180}}></img>
        <p className="text-center pt-2">wat is da world up to?</p>
        <p className="text-center">number only go up.</p>
        <hr></hr>

        <div className="container">
                     
            <div className="row">
            <h2 className="p-3 text-info">🌎 AMERICAS:</h2>
            <hr></hr>

                <ChartStyled >
                    <h2>US TECH 100 CFD</h2>
                    <TradingView ticker={"FOREXCOM:NSXUSD"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>US SP 500 CFD</h2>
                    <TradingView ticker={"FOREXCOM:SPXUSD"} />
                </ ChartStyled>
            </div>

            <div className="row">
            <h2 className="pt-3 text-info">🌍 EUROPE:</h2>
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
            <h2 className="pt-3 text-info">🌏 ASIA PACIFIC:</h2>
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
  margin-bottom: 50px;
  margin-top: 20px;
`

export default BagGlobal;
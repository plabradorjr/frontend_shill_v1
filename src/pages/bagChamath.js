import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import { TwitterTweetEmbed } from 'react-twitter-embed';




const bagChamath = () => {

    return (
        <>
        <NavBar />
        <div className="container">
            <div className="row">
                <div className="col-sm"></div>
                <div className="col-sm">
                <TwitterTweetEmbed 
                    tweetId="1344848278026907649"
                    theme="dark"
                />  
                </div> 
                <div className="col-sm"></div>
            </div>
                     
            <div className="row">
                <ChartStyled >
                    <h2>IPOE</h2>
                    <TradingView ticker={"NYSE:IPOE"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>MP</h2>
                    <TradingView ticker={"NYSE:MP"} />
                </ ChartStyled>
            </div>

            <div className="row">
                <ChartStyled >
                    <h2>SPCE</h2>
                    <TradingView ticker={"NYSE:SPCE"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>INAQ</h2>
                    <TradingView ticker={"NASDAQ:INAQ"} />
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

export default bagChamath;
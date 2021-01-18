import React, {useEffect}from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import chamath from '../images/chamath.jpg'
import ShowComments from '../components/ShowComments';
import PostComment from '../components/PostComment';

const BagChamath = () => {

    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <>
        <NavBar />
        <div className="container">
        <img src={chamath} alt="chamath" className="mx-auto d-block pt-2" style={{height: 100}}></img>
        <h2 className="text-center">Wen Champtons?</h2>
        <div className="row justify-content-center">
                <ChartStyled >
                    <h2>ACTC</h2>
                    <TradingView ticker={"NASDAQ:ACTC"} />
                </ ChartStyled>
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
        
            <div className="row justify-content-md-center">
                <div className="col"></div>
                <div className="center col-md pt-5 mt-1">
                <TwitterTweetEmbed 
                    tweetId="1336164587826135040"
                    theme="dark"
                />  
                </div> 
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col m-5 p5">
                    
                    <PostComment />
                </div>
            </div>
            <ShowComments />
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

export default BagChamath;


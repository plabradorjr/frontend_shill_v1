import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import WallsSteetBaby from '../images/wsba.png';
import PostComment from '../components/PostComment';
import ShowComments from '../components/ShowComments';



const BagWallStreetBets = () => {

    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <>
        <NavBar />
        <div className="container">
            <img src={WallsSteetBaby} alt="baby" className="mx-auto d-block img-thumbnail/"></img>
            <div className="row justify-content-center">
                <ChartStyled >
                    <h2>BB</h2>
                    <TradingView ticker={"NYSE:BB"} />
                </ ChartStyled>
            </div>
            <div className="row">
                <ChartStyled >
                    <h2>GME</h2>
                    <TradingView ticker={"NYSE:GME"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>PLTR</h2>
                    <TradingView ticker={"NYSE:PLTR"} />
                </ ChartStyled>
            </div>

            <div className="row">
                <ChartStyled >
                    <h2>TSLA</h2>
                    <TradingView ticker={"NASDAQ:TSLA"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>NIO</h2>
                    <TradingView ticker={"NYSE:NIO"} />
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

export default BagWallStreetBets;
import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import PostComment from '../components/PostComment';
import ShowComments from '../components/ShowComments';



const BagWsbGod = () => {

    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <>
        <NavBar />
        <div className="container">
            <img src="https://pbs.twimg.com/profile_images/1225690328046264320/UQUXCdUZ_400x400.jpg" alt="baby" className="mx-auto d-block img-thumbnail/"></img>
            <div className="row justify-content-center">
                <ChartStyled >
                    <h2>MMEDF</h2>
                    <TradingView ticker={"OTC:MMEDF"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>GME</h2>
                    <TradingView ticker={"NYSE:GME"} />
                </ ChartStyled>
            </div>
            <div className="row">
                <ChartStyled >
                    <h2>PLTR</h2>
                    <TradingView ticker={"NYSE:PLTR"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>MARA</h2>
                    <TradingView ticker={"NASDAQ:MARA"} />
                </ ChartStyled>
            </div>

            <div className="row">
                <ChartStyled >
                    <h2>NVDA</h2>
                    <TradingView ticker={"NASDAQ:NVDA"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>NOK</h2>
                    <TradingView ticker={"NYSE:NOK"} />
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

export default BagWsbGod;
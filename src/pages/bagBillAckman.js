import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import TradingView from '../components/TradingView';
import ShowComments from '../components/ShowComments';
import PostComment from '../components/PostComment';


const BagBill = () => {

    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <>
        <NavBar />
        <div className="container">
        <img src="https://pbs.twimg.com/profile_images/887722002471059457/DAEnmKwL_400x400.jpg"
            alt="bill ackman"
            className="mx-auto d-block pt-2" style={{height: 150}}>
        </img>
        <h4 className="text-center">wen?</h4>
            <div className="row">
                <ChartStyled >
                    <h2>LOW</h2>
                    <TradingView ticker={"NYSE:LOW"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>CMG</h2>
                    <TradingView ticker={"NYSE:CMG"} />
                </ ChartStyled>
            </div>
            <div className="row">
                <ChartStyled >
                    <h2>QSR</h2>
                    <TradingView ticker={"NYSE:QSR"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>A</h2>
                    <TradingView ticker={"NYSE:A"} />
                </ ChartStyled>
            </div>
            <div className="row">
                <ChartStyled >
                    <h2>HLT</h2>
                    <TradingView ticker={"NYSE:HLT"} />
                </ ChartStyled>
                <ChartStyled >
                    <h2>SBUX</h2>
                    <TradingView ticker={"NASDAQ:SBUX"} />
                </ ChartStyled>
            </div>
            <div className="row">
            <ChartStyled >
                    <h2>HHC</h2>
                    <TradingView ticker={"NYSE:HHC"} />
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

export default BagBill;
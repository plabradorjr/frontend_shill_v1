import React, { useEffect } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import {loadTrendingCryptos, loadAllCoins, deleteSearchResults} from '../actions/cryptosAction';
//COMPONENTS
import Crypto from '../components/Crypto';
import CoinDetail from '../components/CoinDetails';
import TradingView from '../components/TradingView';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import PostComment from '../components/PostComment';
import ShowComments from '../components/ShowComments';

//STYLING AND ANIMATIONS
import styled from 'styled-components';
import {useLocation, Link} from 'react-router-dom';
import bag from '../images/bag.png'
import babyYoda from '../images/baby-yoda.png'

function Home() {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const {trending, allCoins} = useSelector((state) => state.trendingCryptos);
  const user = useSelector((state) => state.userReducer.currentUser)


  useEffect(() => {
    dispatch(loadTrendingCryptos());
    if (allCoins.length < 1) dispatch(loadAllCoins());
  },[dispatch, allCoins]);

  const deleteSearch = () => {
    dispatch(deleteSearchResults());
  }

  return (
      <>
      <NavBar />
      <div className="container">
        <br></br>
        <CryptoList className="row">
            {pathId && <CoinDetail />}
            <h2 className="pb-0" onClick={deleteSearch}>Trending Pumps</h2>
            <small className="text-white pb-4 pt-0">* from CoinGecko API</small>
              <Cryptos >
              {trending.map((coin) => (
                <div key={coin.item.id}>
                  <Crypto 
                    name={coin.item.name} 
                    symbol={coin.item.symbol} 
                    image_url={coin.item.large}
                    key={coin.item.id}
                    id={coin.item.id}
                  />
                </div>
              ))}
            </Cryptos>
            
        </CryptoList>
        <br></br>
        <div className="row">
          <Search />
        </div>
      </div>
      <div className="container pt-3" id="tradingview">
        <div className="row">
          <ChartStyled >
              <h2>Bitcoin</h2>
              <TradingView ticker={"COINBASE:BTCUSD"} />
           </ ChartStyled>
          <ChartStyled >
            <h2>Ethereum</h2>
            <TradingView ticker={"COINBASE:ETHUSD"} />
          </ ChartStyled>
        </div>
        <div className="container">
        <div className="row">
          <div className="col justify-content-center text-center">
            <img 
            src={babyYoda} alt="yoda" 
            className="mx-auto d-block col-xs mt-5"
            style={{height: 190}}>
            </img> 
          </div>
                <h2 className="text-center pb-2">⬇️ I keep track of some bags so you don't have to ⬇️</h2>
          <div className="col">
            <div className="text-center">
              <Link to="/bag/wallstreetbets">
                <img src={bag} style={{height: 120}} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                <button className="btn btn-outline-light">r/wallstreetbets Bags</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <Link to="/bag/chamath">
                <img src={bag} style={{height: 120}} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                <button className="btn btn-outline-light">Chamath Bags</button>
              </Link>
            </div>
          </div><div className="col">
            <div className="text-center">
              <Link to="/bag/exchange">
                <img src={bag} style={{height: 120}} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                <button className="btn btn-outline-light">DEX | CEX Degens</button>
              </Link>
            </div>
          </div>
          {/* <div className="col">
            <div className="text-center">
              <Link to="/bag/global">
                <img src={bag} style={{height: 120}} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                  <button className="btn btn-outline-light">Global Macro Bags</button>
              </Link>
            </div>
          </div> */}
          <div className="col">
            <div className="text-center">
              <Link to="/bag/billackman">
                <img src={bag} style={{height: 120}} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                  <button className="btn btn-outline-light">Bill Ackman Bags</button>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        
        <br></br>
        <div className="row">
                    <div className="col m-5 p5">
                        
                        <div className="col center text-center"> {!user.is_logged && <h2>Ser, pleas login to shill</h2>} </div>
                        <PostComment />
                        {/* <div className="col center text-center"> {!user.is_logged && <p>It's like twitter, but instead of tweets, you just shill.</p>} </div> */}
                    </div>
            </div>
        <ShowComments />
        <br></br>
        </div>
      </div>
      </>
  )
}

const CryptoList = styled.div`
  h2 {
    padding: 1rem 0rem;
    cursor: pointer;
  }
`

const Cryptos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  cursor: pointer;
 
`

const ChartStyled = styled.div`
  width: 650px;
  height: 500px;
  margin-bottom: 20px;
  margin-top: 50px;
`

export default Home;
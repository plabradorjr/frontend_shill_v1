import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import TrieSearch from 'trie-search';
import {loadSearchedCrypto} from '../actions/cryptosAction';
import Crypto from '../components/Crypto';
import {useLocation} from 'react-router-dom';
import CoinDetail from '../components/CoinDetails'


//styles
import styled from 'styled-components';


const Search = () => {

    const { allCoins, searched } = useSelector((state) => state.trendingCryptos)

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const ts = new TrieSearch(['name', 'symbol']);
    ts.addAll(allCoins);

    const submitSearch = (e) => {
        e.preventDefault();
        // console.log(textInput);
        let results = ts.get(textInput);
        
        dispatch(loadSearchedCrypto(results));
        setTextInput("");
    };

    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    


    return (
        <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <form onSubmit={submitSearch} className="input-group mb-3" id="srch">
                        <input 
                            onChange={inputHandler}
                            value={textInput}
                            type="text" 
                            className="form-control" 
                            aria-describedby="basic-addon2">
                        </input>
                        <div  className="input-group-append">
                            <button className="btn btn-warning" type="submit" >Search Crypto</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CryptoList className="row">
                        {pathId && <CoinDetail />}
                        <div className="d-flex justify-content-center">
                        </div>
                        <Cryptos >
                        {searched.map((coin) => (
                        <div key={coin.id}>
                            <Crypto 
                                name={coin.name} 
                                symbol={coin.symbol} 
                                key={coin.id}
                                id={coin.id}
                            />
                          </div>
                        ))}
                        </Cryptos>
                    </CryptoList>
                </div>
            </div>
        </div>
    )
}

const CryptoList = styled.div`
  h2 {
    padding: 1rem 0rem;
  }
`

const Cryptos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  cursor: pointer;
`

export default Search;
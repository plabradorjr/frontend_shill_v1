import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';


const TradingView = ({ticker}) => {

    return (
        <TradingViewWidget
        symbol= {ticker}
        theme={Themes.DARK}
        autosize
        />
    )
}


export default TradingView;
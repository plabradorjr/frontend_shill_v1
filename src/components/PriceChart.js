import React from 'react';
//Highcharts
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


const PriceChart = ({data}) => {


    const options = {
    colors: ['#c44569',
            '#0eda63',
            '#14bb46',
            '#141413', 
            '#24c90f',
            '#64E572',   
            '#1ed461',
            '#FFF263',
            '#14301f'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(141, 141, 150)'],
                [1, 'rgb(138, 138, 148)']
            ]
        },
    },
    rangeSelector: {
        selected: 1
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'black'
        }   
    },
    title: {
        text: ''
    },
    credits: {
        enabled: false,
    },
    series: [{
        type: 'candlestick',
        name: '🚀',
        data: data,
    }]
    }

    return (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          constructorType={'stockChart'}
      />
    )

}


export default PriceChart;
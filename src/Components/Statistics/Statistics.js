import React from "react";
import "./Statistics.css";
import cryptoNewsBanner from "../../Assets/Images/crypto-news-banner.png";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

const Statistics = ({ defaultCurrency, defaultCrypto }) => {
  const { currencyPair } = useParams();
  const [crypto, currency] = currencyPair
    ? currencyPair.split("-")
    : [defaultCrypto, defaultCurrency];
  return (
    <div className="statistics-container">
      <div className="flex flex-nowrap items-center justify-around">
        <div className="tc side-info">
          <p className="fw4">{0.97} %</p>
          <p className="fw3">5 Mins</p>
        </div>
        <div className="tc side-info">
          <p className="fw4">{1.72} %</p>
          <p className="fw3">1 Hour</p>
        </div>
        <div className="middle-info">
          <p className="ma0 nowrap fw3 tc">Best Price to Trade</p>
          <p className="ma0 nowrap fw4 tc">&#8377; 43,08,068</p>
          <p className="ma0 nowrap fw3 tc">
            Average {crypto}/{currency} net price including commission
          </p>
        </div>
        <div className="tc side-info">
          <p className="fw4">{5.92} %</p>
          <p className="fw3">1 Day</p>
        </div>
        <div className="tc side-info">
          <p className="fw4">{13.16} %</p>
          <p className="fw3">7 Days</p>
        </div>
      </div>
      <Link>
        <img src={cryptoNewsBanner} className="w-100 pb2" alt="crypto news" />
      </Link>
    </div>
  );
};

export default connect((state) => ({
  defaultCurrency: state.DataReducer.currencies[0],
  defaultCrypto: state.DataReducer.cryptos[0],
}))(Statistics);

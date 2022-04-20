import React, {memo} from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import "./totalMarket.css";

const TotalMarket = () => {
  const stats = useSelector((state) => state?.cryptos?.data?.stats);

  return (
    <div className="total-container">
      <div className="total-markt-container">
        <div className="box">
          <p className="box-title">Total cryptocurrencies</p>
          <p className="box-value">
            {stats?.totalCoins && millify(stats?.totalCoins)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total Exchanges</p>
          <p className="box-value">
            {stats?.totalExchanges && millify(stats?.totalExchanges)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total Market Cap</p>
          <p className="box-value">
            {stats?.totalMarketCap && millify(stats?.totalMarketCap)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total Markets</p>
          <p className="box-value">
            {stats?.totalMarkets && millify(stats?.totalMarkets)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total Volume en 24h</p>
          <p className="box-value">
            {stats?.total24hVolume && millify(stats?.total24hVolume)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total cryptocurrencies</p>
          <p className="box-value">
            {stats?.totalCoins && millify(stats?.totalCoins)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total Exchanges</p>
          <p className="box-value">
            {stats?.totalExchanges && millify(stats?.totalExchanges)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total Market Cap</p>
          <p className="box-value">
            {stats?.totalMarketCap && millify(stats?.totalMarketCap)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total Markets</p>
          <p className="box-value">
            {stats?.totalMarkets && millify(stats?.totalMarkets)}
          </p>
        </div>
        <div className="box">
          <p className="box-title">Total Volume en 24h</p>
          <p className="box-value">
            {stats?.total24hVolume && millify(stats?.total24hVolume)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(TotalMarket);

import React from "react";
import './totalMarket.css'

const TotalMarket = ({stats}) => {
  return (
    <div className="total-markt-container">
      <div>
        <h1>General information</h1>
      </div>
      <div>
        <div className="box">
          <p>Total cryptocurrencies</p>
          <p>{stats?.totalCoins}</p>
        </div>
        <div className="box">
          <p>Total Exchanges</p>
          <p>{stats?.totalExchanges}</p>
        </div>
        <div className="box">
          <p>Total Market Cap</p>
          <p>{stats?.totalMarketCap}</p>
        </div>
        <div className="box">
          <p>Total Markets</p>
          <p>{stats?.totalMarkets}</p>
        </div>
        <div className="box">
          <p>Total Volume en 24h</p>
          <p>{stats?.total24hVolume}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalMarket;

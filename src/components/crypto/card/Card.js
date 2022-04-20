import React, {memo} from 'react'
import millify from "millify";
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({ crypto }) => {
  const {
    uuid,
    change, 
    name , 
    iconUrl, 
    marketCap, 
    price, 
    rank, 
    } = crypto
    
  return (
    <Link to={`/cryptocurrency/${uuid}`} className="card-container">
      <div className="card-header">
        <div className="card-header-name">{rank}-{name}</div>
        <div className="card-header-img">
          <img src={iconUrl} alt="cryptocurrency logo" />
        </div>
      </div>
      <div className="card-body">
        <div className="body-price">Price: {millify(price)}$</div>
        <div className="body-market-cap">MarketCap: {millify(marketCap) }$</div>
        <div className="body-volume">Volume en 24h: {millify(crypto?.["24hVolume"]) }$</div>
        <div>
          Change: <span className={+change < 0 ? "body-change" : undefined}>{millify(change) }%</span>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn-card">See More</button>
      </div>
    </Link>
  )
}

export default memo(Card)
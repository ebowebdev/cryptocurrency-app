import React from 'react'
import './card.css'

const Card = ({ crypto }) => {
  const {
    change, 
    name , 
    iconUrl, 
    marketCap, 
    price, 
    rank, 
    } = crypto
    
  return (
    <div className="card-container">
      <div className="card-header flex-space-between">
        <div className="header-name">{rank}-{name}</div>
        <div className="header-img">
          <img src={iconUrl} alt="cryptocurrency logo" />
        </div>
      </div>
      <div className="card-body">
        <div className="body-price">Price: {price}$</div>
        <div className="body-market-cap">MarketCap: {marketCap}</div>
        <div className="body-change">Change: {change}</div>
      </div>
      <div className="card-footer">
        <button>See More</button>
      </div>
    </div>
  )
}

export default Card
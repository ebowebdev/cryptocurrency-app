import React, { memo } from 'react'
import NewsCard from '../newsCard/NewsCard'
import Title from '../title/Title'

import './news.css' 

const News = ({news}) => {
  console.log({news})
  return (
    <div className="news-comp">
      <div className="crypto-info-soutitle">
        <span>*</span>
          <Title title="last news of cryptocurrencies"/>
        <span>*</span>
      </div>
      <div className="title-desc">
        <p>we bring you the latest information that can help you make the right decision (buy / sell)</p>
      </div>
      <div className="news-container">
        {news && Object.entries(news).map(([key, value],i) =>
          <NewsCard info={value} key={key} index={i}/>
        )}
      </div>
    </div>
  )
}

export default memo(News)
import React from 'react'
import NewsCard from '../newsCard/NewsCard'

import './news.css' 

const News = ({news}) => {
  console.log({infos:news})
  console.log({infos:typeof(news)})

  return (
    <div className="news-container">
      {news && Object.entries(news).map(([key, value],i) =>
        <NewsCard info={value} key={key} index={i}/>
      )}
    </div>
  )
}

export default News
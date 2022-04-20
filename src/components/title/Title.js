import React from 'react'
import './title.css'

const Title = ({title}) => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
    </div>
  )
}

export default Title
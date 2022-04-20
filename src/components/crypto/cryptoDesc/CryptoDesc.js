import React, {memo} from 'react'
import htmlReactParser from "html-react-parser"
import Title from "../../title/Title"
import './cryptoDesc.css'

const CryptoDesc = ({name, description}) => {
  return (
    <div className="html-box">
      <Title title={`information about ${name}`}/>
      <h3>What is {name}</h3>
      {description && htmlReactParser(description)}
    </div>
  )
}

export default memo(CryptoDesc)
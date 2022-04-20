import React, {memo} from 'react'
import { BsSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import './themeBtn.css'


const themeBtn = ({changeTheme, darke}) => {
  return (
    <div className="themeBtn">
      <button onClick={changeTheme}>
        {darke ? <BsSunFill/> : <BsFillMoonFill/>}
      </button>
    </div>   
  )
}

export default memo(themeBtn)
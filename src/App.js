import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchDataAction, fetchNewsAction } from './redux/actions'
import Home from './pages/home/Home'
import CryptoCurrency from './pages/cryptoCurrency/CryptoCurrency'
import Crypto from './pages/crypto/Crypto'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDataAction())
    dispatch(fetchNewsAction())
  },[dispatch])

  return (
    <div>
      <BrowserRouter>
        <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/cryptocurrency" element={<CryptoCurrency/>} />
          <Route exact path="/cryptocurrency/:uuid" element={<Crypto/>} />
        </Routes> 
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

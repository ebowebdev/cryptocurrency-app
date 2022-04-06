import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchDataAction } from './redux/actions'
import Home from './pages/home/Home'
import CryptoCurrency from './pages/cryptoCurrency/CryptoCurrency'
import Crypto from './pages/crypto/Crypto'
import News from './pages/news/News'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDataAction())
  },[dispatch])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/cryptocurrency" element={<CryptoCurrency/>} />
          <Route exact path="/cryptocurrency/news" element={<News/>} />
          <Route exact path="/cryptocurrency/:uuid" element={<Crypto/>} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;

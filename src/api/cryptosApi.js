import axios from 'axios'

const COINS_URL = process.env.REACT_APP_COINS_URL
const HOST_CRYPTO_API = process.env.REACT_APP_HOST_CRYPTO_API
const KEY_API = process.env.REACT_APP_KEY_API

const fetchCryptos = async (limit) => {
  
  const options = {
    method: 'GET',
    url: `${COINS_URL}?limit=${limit ? limit : 25}`,
    headers: {
      'X-RapidAPI-Host': HOST_CRYPTO_API,
      'X-RapidAPI-Key': KEY_API
    }
  }

  try {
    const res = await axios.request(options)
    return res.data
  }catch(err){
    return err.message
  }
}

export { fetchCryptos }
import axios from 'axios'

const URL = process.env.REACT_APP_URL
const HOST_CRYPTO_API = process.env.REACT_APP_HOST_CRYPTO_API
const KEY_API = process.env.REACT_APP_KEY_API

const fetchCryptos = async (limit=25) => {
  
  const options = {
    method: 'GET',
    url: `${URL}?limit=${limit}`,
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
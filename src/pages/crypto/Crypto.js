import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCryptoAction } from '../../redux/actions'

const Crypto = () => {
  const [crypto, setCrypto] = useState({})
  const {uuid} = useParams()
  const dispatch = useDispatch()
  const {data, isLoading} = useSelector(state => state?.crypto)
  console.log({data})
  console.log({crypto})
  console.log({uuid})

  useEffect(()=>{
    dispatch(fetchCryptoAction(uuid))
  },[dispatch, uuid])

  useEffect(()=>{
    setCrypto(data)
  },[data])

  return (
    <div>
      {isLoading ? <div>Loading ...</div> : <h1>Crypto</h1>}
    </div>
  )
}

export default Crypto
import React, {useState, useEffect} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const CryptocurrencyTracker = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await fetch(
          'https://apis.ccbp.in/crypto-currency-converter',
        )
        const data = await response.json()
        setCryptocurrencies(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error)
      }
    }

    fetchCryptocurrencies()
  }, [])

  return (
    <div className="cryptocurrency-tracker-container">
      {isLoading ? (
        <div className="loader-container" data-testid="loader">
          <Loader type="Rings" color="#00e7ff" height={80} width={80} />
        </div>
      ) : (
        <div className="cryptocurrency-list-container">
          <h1 className="main-heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
          <CryptocurrenciesList cryptocurrencies={cryptocurrencies} />
        </div>
      )}
    </div>
  )
}

export default CryptocurrencyTracker

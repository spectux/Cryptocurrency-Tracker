import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = ({cryptocurrencies}) => {
  return (
    <ul className="cryptocurrency-list">
      {cryptocurrencies.map(cryptocurrency => (
        <CryptocurrencyItem
          key={cryptocurrency.id}
          cryptocurrency={cryptocurrency}
        />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList

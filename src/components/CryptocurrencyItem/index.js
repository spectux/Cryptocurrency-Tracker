import './index.css'

const CryptocurrencyItem = ({cryptocurrency}) => {
  const {currency_name, usd_value, euro_value, currency_logo} = cryptocurrency

  return (
    <li className="cryptocurrency-item">
      <div className="col-4">
        <img
          src={currency_logo}
          alt={currency_name}
          className="currency-logo"
        />
        <p className="currency-name">{currency_name}</p>
      </div>
      <div className="cryptocurrency-item">
      <p className="usd-value">{`${usd_value}`}</p>
      <p className="euro-value">{`${euro_value}`}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

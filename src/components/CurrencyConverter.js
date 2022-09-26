
import ExchangeRate from './ExchangeRate' 

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']


  return (
    <div className="currency-converter">
    <h2>Currency Converter</h2>

    <div className="input-box">

    <table>
      <tbody>
        <tr>
          <td>Primary Currency:</td>
          <td>
            <input
             type="number"
             name="currency-number-1"
             value={""}
            />
          </td>
          <td>
            <select
            value={""}
            name="currency-option-1"
            className="currency-options"
            >
              {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
            </select>
          </td>
        </tr>
        <tr>
          <td>Secondary Currency:</td>
          <td>
            <input
             type="number"
             name="currency-number-2"
             value={""}
            />
          </td>
          <td>
            <select
            value={""}
            name="currency-option-2"
            classNmae="currency-options"
            >
              {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
            </select>
          </td>
        </tr>
      </tbody>
    </table>


    </div>
   
     <ExchangeRate/>
    </div>
  )
}

export default CurrencyConverter
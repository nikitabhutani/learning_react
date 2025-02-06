function InputBox({ label, currency='usd',amount=0, onAmountChange,currency_options=[],onCurrencyChange
}) {
  return (
    <div>
    <label htmlFor="From">{label}</label>
    <input
      type='number'
      placeholder={label}
      value={amount}
      onChange={(e)=>{onAmountChange&&onAmountChange(Number(e.target.value))}}
      className='border-1 border-black-500 p-1 rounded-md bg-white'
    />
    <select
    className="border-1 border-black-500 p-1 rounded-md bg-white justify-end"
    value={currency}
    onChange={(e)=>{onCurrencyChange(e.target.value)}}
    >
      {currency_options.map((currency)=>(
        <option key={currency} value={currency}>{currency}</option>))}
    </select>
    </div>
  );
}
export default InputBox;
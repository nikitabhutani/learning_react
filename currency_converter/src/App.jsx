

import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import { useState } from 'react'
function App() {
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options=Object.keys(currencyInfo);
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[toCurrency]) 
    
  }
  const swap=()=>{
    
  }
  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url('https://img.freepik.com/premium-vector/global-currency-background_115579-405.jpg?semt=ais_hybrid')` }}>

      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form
      onSubmit={(e)=>{e.preventDefault();
      convert()}}>
        <InputBox label='From' currency={fromCurrency} amount={amount} onAmountChange={(a)=>setAmount(a)} currency_options={options} onCurrencyChange={(currency)=>setFromCurrency(currency)}/>
        <button className='bg-blue text-white' onClick={()=>{
        
        setFromCurrency((prev) => toCurrency);
  setToCurrency((prev) => fromCurrency);
  setConvertedAmount((prev) => prev === 0 ? amount : prev);
  setAmount((prev) => convertedAmount);
  
          
        }
        }>swap</button>
        <InputBox label='To' currency={toCurrency} amount={convertedAmount} onAmountChange={(a)=>setConvertedAmount(a)} currency_options={options} onCurrencyChange={(currency)=>setToCurrency(currency)}/>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded'>Convert</button>
      </form>
      </div>
      </div>
      
    </>
  )
}

export default App

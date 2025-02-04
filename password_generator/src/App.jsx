import { useState,useRef,useCallback,useEffect } from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [length, setLength] = useState(0)
  const [NumbersAllowed, setNumbersAllowed] = useState(false)
  const [CharactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState('Copy')
const passref=useRef(null)

  const generatePassword=useCallback(()=>{ let charset = 'abcdefghijklmnopqrstuvwxyz'
    let pass = ''
    if(NumbersAllowed){
      charset += '0123456789'
    }
    if(CharactersAllowed){
      charset += '!@#$%^&*()_+'
    }
    for(let i=0;i<length;i++){
      let at = Math.floor(Math.random()*charset.length)
      pass += charset.charAt(at)
    }
    setPassword(pass)},[length,NumbersAllowed,CharactersAllowed,setPassword])


useEffect(()=>{generatePassword()},[length,NumbersAllowed,CharactersAllowed,generatePassword])

  return (
    <div >
      <div className='bg-gray-200 rounded-lg shadow-lg p-4'>
        <p className='text-2xl text-center'>Password Generator</p>
        <div className='flex items-center gap-y-1 gap-x-1'>
        <input
        type='text'
        placeholder='Password'
        value={password}
        readOnly
        ref={passref}
        className='border-1 border-black-500 p-1 rounded-md bg-white'/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded'
        onClick={()=>{ passref.current?.select()
          navigator.clipboard.writeText(password)
          setCopied("Copied!");

          // Hide message after 2 seconds
          setTimeout(() => {
            setCopied("Copy");
          }, 2000);
         
        }}>
          {copied}</button>
        
        </div>
        <div className='flex items-centre gap-x-1'>
        <input
        type='range'
        min={1}
        max={100}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label>length : {length}</label>
        <input 
        className=' items-centre gap-x-1'
        type='checkbox'
        id='Numbers allowed'
        defaultChecked={NumbersAllowed}
        onChange={()=>{
          setNumbersAllowed((prev)=>!prev)
        }}/>
        <label>Numbers</label>

        <input 
        type='checkbox'
        id='Characters allowed'
        defaultChecked={CharactersAllowed}
        onChange={()=>{
          setCharactersAllowed((prev)=>!prev)
        }}/>
        <label>Characters</label>
        </div>
      </div>
        
    </div>
  )
}

export default App

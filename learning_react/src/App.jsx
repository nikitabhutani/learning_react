import React from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = React.useState('bg-gray-200')
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: bgColor}}>
      <h1 className="bg-black text-white items-center">Change The Background color by clicking the button!</h1>
     <div className="flex justify-center items-center h-full">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={()=>setBgColor("blue")}>blue</button>
      <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={()=>setBgColor("black")}>black</button>
      <button onClick={()=>setBgColor('red')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">red</button>
      <button  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setBgColor('yellow')}>yellow</button>
      </div>
    </div>
    
  )
}

export default App

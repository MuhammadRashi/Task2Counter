import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 const onIncrement=()=>{

  if(count<10){

    setCount((prev) => prev + 1);
  }
 };

 const onDecrement=()=>{
  if(count> 1){

    setCount((prev) => prev -1);
  }
};

  return (
    <>
    <div className='btn'>
        <button onClick={onDecrement} >-</button>
        <label htmlFor="">{count}</label>
        <button onClick={onIncrement}>+</button>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import ProgressComponent from './components/ProgressComponent'
import { motion } from 'framer-motion';

function App() {
  const [count, setCount] = useState(5)
  const [progressCount, setProgressCount] = useState(0)
  const [wCount, setWCount] = useState(0)


  console.log("input value", count);



  const startFun = (duration) => {
    setProgressCount(count);
    setWCount(100);   

  }

  return (
    <>
      <div className="input-box">
        <input type="text" placeholder="Enter number" value={count} onChange={(e) => setCount(e.target.value)} />
        <button onClick={() => startFun()}>Start</button>
      </div>


      <ProgressComponent progressCount={progressCount} wCount={wCount} />

    


    </>
  )
}

export default App

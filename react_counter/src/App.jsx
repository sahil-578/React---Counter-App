import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  
  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
      <>
        <h1 className='text-center' style={{fontSize:'70px'}}>{count}</h1>
        <br />
        <div className='d-flex'>
          <button onClick={addValue} className='btn btn-success me-3'>Increase</button>
          <button onClick={removeValue} className='btn btn-danger me-3'>Decrease</button>
        </div>
      </>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  )
}

export default App

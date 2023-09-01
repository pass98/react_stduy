// import { useState } from 'react'
// import './App.css'
// import Counter from './components/Counter'

// function App() {
//   const [count, setCount] = useState(0)

//   return <Counter count={count} setCount={setCount}/>
// }

// export default App

//context버전
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './context/CounterContext'

function App() {
  const [count, setCount] = useState(0)

  return (
  <CounterContext.Provider value={{ count, setCount}}>
    <Counter/>
  </CounterContext.Provider>)
}

export default App

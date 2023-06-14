import { useState } from "react"

export default function Increment()
{
    const initialState = 100
    const [count, setCount] = useState(initialState)
    const handleIncrement = () => setCount(prevCount => prevCount + 1)
    const handledecrement = () => setCount(prevCount => prevCount - 1)
    const handleReset = () => setCount(initialState)

  return (
      <>
        <h3>Increment</h3>
        <h5>Count: { count }</h5>
          <button onClick={ handleIncrement }>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </>
  )
}

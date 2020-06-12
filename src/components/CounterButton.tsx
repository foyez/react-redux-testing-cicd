import React, { useState } from 'react'

export const CounterButton = () => {
  const [count, setCount] = useState(0)

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>
}

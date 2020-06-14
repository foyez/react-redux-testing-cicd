import React, { useState } from 'react'

export const CounterButton = () => {
  const [count, setCount] = useState(0)

  // return <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  return <Button onClick={() => setCount(count + 1)} count={count} />
}

interface IButton {
  count: number
  onClick: () => void
}

const Button: React.FC<IButton> = React.memo(
  ({ count, onClick }) => <button onClick={onClick}>Count: {count}</button>,
  (prevProps, nextProps) => {
    console.log(prevProps.count === nextProps.count)
    return prevProps.count === nextProps.count
  },
)

// import React, { useState } from 'react'

// export const CounterButton = () => {
//   const [count, setCount] = useState(0)

//   // return <button onClick={() => setCount(count + 1)}>Count: {count}</button>
//   return (
//     <Button id="counter" onClick={() => setCount(count + 1)} count={count} />
//   )
// }

// interface IButton {
//   id: string
//   count: number
//   onClick: () => void
// }

// const Button: React.FC<IButton> = React.memo(
//   ({ id, count, onClick }) => (
//     <button id={id} onClick={onClick}>
//       Count: {count}
//     </button>
//   ),
//   (prevProps, nextProps) => {
//     console.log(prevProps.count === nextProps.count)
//     return prevProps.count === nextProps.count
//   },
// )

import React from 'react'

type CounterButtonProps = {
  color: string
}

type CounterButtonState = {
  count: number
}

export class CounterButton extends React.Component<
  CounterButtonProps,
  CounterButtonState
> {
  state = {
    count: 0,
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.count !== nextState.count
  }

  render() {
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    )
  }
}

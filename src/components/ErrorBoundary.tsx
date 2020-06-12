import React from 'react'

export class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error: any) {
    // process the error
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }

    return this.props.children
  }
}

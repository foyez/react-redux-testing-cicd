import React, { useEffect, useState, ChangeEvent } from 'react'

import { Header } from './Header'
import { Scroll } from './Scroll'
import { ErrorBoundary } from './ErrorBoundary'
import { CardList } from './CardList'
import { apiCall } from '../api'
import { Robot } from '../interfaces'
import { SearchBox } from './SearchBox'

export const MainPage = () => {
  const [robots, setRobots] = useState<Robot[]>([])
  const [searchField, setSearchField] = useState<string>('')

  useEffect(() => {
    apiCall().then((data) => {
      setRobots(data)
    })
  }, [])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value)
  }

  const filterRobots = () => {
    return robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase()),
    )
  }

  return (
    <div className="tc">
      <Header />
      <SearchBox onChange={handleSearchChange} />
      <Scroll>
        {!robots.length ? (
          <h1>Loading...</h1>
        ) : (
          <ErrorBoundary>
            <CardList robots={filterRobots()} />
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  )
}

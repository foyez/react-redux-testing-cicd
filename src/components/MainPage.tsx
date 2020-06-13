import React, { useEffect, useState, ChangeEvent } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectRobots } from '../slices/selectors'

import { Header } from './Header'
import { Scroll } from './Scroll'
import { ErrorBoundary } from './ErrorBoundary'
import { CardList } from './CardList'
import { SearchBox } from './SearchBox'
import { fetchRobots } from '../slices/robot'

export const MainPage = () => {
  const [searchField, setSearchField] = useState<string>('')
  const dispatch = useDispatch()
  const { robots, loading } = useSelector(selectRobots)

  useEffect(() => {
    dispatch(fetchRobots())
  }, [dispatch])

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
        {loading ? (
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

import React, { ChangeEvent } from 'react'

interface ISearchBox {
  // searchField: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox: React.FC<ISearchBox> = ({ onChange }) => (
  <div className="pa2">
    <input
      className="pa3 b--green bg-lightest-blue"
      type="search"
      aria-label="Search"
      placeholder="Search robots"
      onChange={onChange}
    />
  </div>
)

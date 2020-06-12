import React from 'react'

export const Scroll: React.FC = ({ children }) => (
  <div
    style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}
  >
    {children}
  </div>
)

import React from 'react'

import { Card } from './Card'
import { Robot } from '../interfaces'

interface ICardList {
  robots: Robot[]
}

export const CardList: React.FC<ICardList> = ({ robots }) => (
  <div>
    {robots.map((robot) => {
      return <Card key={robot.id} {...robot} />
    })}
  </div>
)

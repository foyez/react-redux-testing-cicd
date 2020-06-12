import React from 'react'

import { Robot } from '../interfaces'

export const Card: React.FC<Robot> = ({ name, email, id }) => (
  <div className="tc grow bg-lisht-green br3 pa3 ma2 dib bw2 shadow-5">
    <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />

    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
)

import { combineReducers } from '@reduxjs/toolkit'

import { robotReducer } from './robot'

export const rootReducer = combineReducers({
  robot: robotReducer,
})

export type RootState = ReturnType<typeof rootReducer>

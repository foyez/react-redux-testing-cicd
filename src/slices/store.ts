import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { rootReducer } from './index'
import { RootState } from './index'

const devMode = process.env.NODE_ENV !== 'production'

const middleware = [...getDefaultMiddleware({ thunk: true })]

devMode && middleware.push(logger)

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: devMode,
})

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

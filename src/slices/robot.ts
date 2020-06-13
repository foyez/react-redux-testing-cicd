import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RobotState, Errors, Robot } from '../interfaces'
import { AppThunk } from './store'
import { apiCall } from '../api'

const initialState: RobotState = {
  robots: [],
  searchField: '',
  errors: null,
  loading: true,
}

const failed = (state: RobotState, { payload }: PayloadAction<Errors>) => ({
  ...state,
  loading: false,
  errors: payload,
})

const robotSlice = createSlice({
  name: 'robot',
  initialState,
  reducers: {
    loadRobots: (state) => {
      state.loading = true
    },
    loadRobotsSuccess: (state, { payload }: PayloadAction<Robot[]>) => {
      state.robots = payload
      state.loading = false
    },
    loadRobotsFailure: failed,
    changeSearchField: {
      reducer() {},
      prepare(searchField: string) {
        return { payload: searchField }
      },
    },
  },
})

export const {
  loadRobots,
  loadRobotsSuccess,
  loadRobotsFailure,
} = robotSlice.actions
export const robotReducer = robotSlice.reducer

export const fetchRobots = (): AppThunk => async (dispatch) => {
  dispatch(loadRobots())

  try {
    const robots = await apiCall()

    dispatch(loadRobotsSuccess(robots))
  } catch (error) {
    dispatch(loadRobotsFailure(error))
  }
}

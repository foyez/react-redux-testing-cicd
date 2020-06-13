export interface Robot {
  id: number
  name: string
  email: string
}

export type Errors = string | null

export interface RobotState {
  robots: Robot[]
  searchField: string
  loading: boolean
  errors: Errors
}

// export interface RootState {
//   robot: RootState
// }

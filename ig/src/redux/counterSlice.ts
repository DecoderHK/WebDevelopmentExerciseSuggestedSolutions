"use client";

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from './store'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed',
  authToken: string | null
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
  authToken: null
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    return {}
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload
    }
  },

})

export const { increment, decrement, setAuthToken } = counterSlice.actions

export default counterSlice.reducer

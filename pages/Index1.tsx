import { configureStore } from '@reduxjs/toolkit'
import type { Reducer } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

declare const reducer: Reducer<{}>
const store = configureStore({ reducer })
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

// file: slice.ts noEmit
import { createAsyncThunk } from '@reduxjs/toolkit'
export const fetchUserById = createAsyncThunk(
  'fetchUserById',
  () => {
    /* ... */
  }
)

// file: MyComponent.ts

import React from 'react'

const MyComponent=()=> {
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    // Dispatching the thunk returns a promise
    const promise = dispatch(fetchUserById())
    return () => {
   
    }
  }, [])
}

export default MyComponent
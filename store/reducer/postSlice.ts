import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios  from 'axios';

const baseURL="http://localhost:2500/"
// First, create the thunk
const getAllPosts = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI:any) => {
    const response = await axios.get(baseURL+"post")
    .then((response) => {
      console.log("response",response);
        
    }).catch((err)=>{
      console.log("error",err);
      
    }) 
  
  }
)

interface UsersState {
  posts: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  posts: [],
  loading: 'idle',
} as UsersState

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder:any) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllPosts.fulfilled, (state: { posts: any[] }, action: { payload: any }) => {
      // Add user to the state array
      state.posts.push(action.payload)
    })
  },
})
export default usersSlice

export const postReducer=usersSlice.reducer


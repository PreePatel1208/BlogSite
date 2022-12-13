import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios  from 'axios';

const baseURL="http://localhost:2500/"

export const getAllPosts = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
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

const postSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder:any) => {
    builder.addCase(getAllPosts.fulfilled, (state: { posts: any[] }, action: { payload: any }) => {
      state.posts.push(action.payload)
    })
  },
})
export default postSlice
export const postReducer = postSlice.reducer;





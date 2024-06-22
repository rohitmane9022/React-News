// In your NeswapiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiKey = 'a28264f08b5642c2aaeaa2c3b6d09234'

export const fetchNewsData = createAsyncThunk('news/fetchNewsData', async () => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
  return response?.data?.articles
})

export const fetchCategoryData = createAsyncThunk('news/fetchCategoryData', async (category) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${category}&country=us&apiKey=${apiKey}`)
  return response?.data?.sources
})

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsData: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.newsData = action.payload
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchCategoryData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.newsData = action.payload
      })
      .addCase(fetchCategoryData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default newsSlice.reducer

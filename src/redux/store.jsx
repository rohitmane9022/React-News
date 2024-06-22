import { configureStore } from '@reduxjs/toolkit'
import  NewsApiSlice  from '../Reducer/NeswapiSlice'

export const store=configureStore({
  reducer:{
    news:NewsApiSlice
  }
})
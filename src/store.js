import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import { preferenceSlice } from './slices/preferenceSlice'
import authSlice from './slices/authSlice'


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, 
        preferences: preferenceSlice.reducer, 
        auth: authSlice
    }, 
    middleware: () => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store
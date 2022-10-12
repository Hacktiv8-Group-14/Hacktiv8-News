import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import NewsReducer from './features/NewsSlice'
export const store = configureStore({
    reducer: {
        news: NewsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
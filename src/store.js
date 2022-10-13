import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import NewsReducer from './features/NewsSlice'
import SavedReducer from './features/SavedSlice'
export const store = configureStore({
    reducer: {
        news: NewsReducer,
        saved: SavedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
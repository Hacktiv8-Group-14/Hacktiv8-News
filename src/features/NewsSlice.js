import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isPending: false,
    isSuccess: false,
    errorMessage: '',
    newsList: [],
}

export const fetchNews = createAsyncThunk('news/fetchNews', async (API) => {
    try {
        const response = await axios.get(API)
        return response.data
    } catch (e) {
        throw(e)   
    }
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchNews.pending, (state) => {
            state.isPending = true
            state.isSuccess = false
            state.errorMessage = ''
        })
        .addCase(fetchNews.rejected, (state, action) => {
            state.isPending = false
            state.isSuccess = false
            state.errorMessage = action.error.message
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.data = [...action.payload.articles]
            state.isSuccess = true
            state.isPending = false
            state.errorMessage = ''
        })
    }
})

export default newsSlice.reducer
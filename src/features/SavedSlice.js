import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    savedNews: []
}

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        addSavedNews: (state, action) => {
            state.savedNews = [...state.savedNews, action.payload]
            localStorage.setItem("savedNews", [...state.savedNews, action.payload])
        },
        deleteSavedNews: (state, action) => {
            const filteredData = state.savedNews.filter((d) => d.title !== action.payload.title)
            state.savedNews = [...filteredData]
            localStorage.setItem("savedNews", [...filteredData])
        }
    }
})

export const { addSavedNews, deleteSavedNews } = savedSlice.actions
export default savedSlice.reducer
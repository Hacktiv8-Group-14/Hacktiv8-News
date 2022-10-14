import {createSlice} from '@reduxjs/toolkit'

let dataStorage = localStorage.getItem("savedNews")

const initialState = {
    savedNews: JSON.parse(dataStorage) || []
}

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        addSavedNews: (state, action) => {
            state.savedNews = [...state.savedNews, action.payload]
            localStorage.setItem("savedNews", JSON.stringify([...state.savedNews]))
        },
        deleteSavedNews: (state, action) => {
            const filteredData = state.savedNews.filter((d) => d.title !== action.payload.title)
            state.savedNews = [...filteredData]
            localStorage.setItem("savedNews", JSON.stringify(filteredData))
        }
    }
})

export const { addSavedNews, deleteSavedNews } = savedSlice.actions
export default savedSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { initializeApp } from './ActionCreators'

let initialState = {
    initialized: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {}
})

// export const { initializeApp } = appSlice.actions;

export default appSlice.reducer

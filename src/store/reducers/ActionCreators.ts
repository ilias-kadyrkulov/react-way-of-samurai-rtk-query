import { createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../../api/auth-api'

export const initializeApp = createAsyncThunk(
    'user/initializeApp',
    async (_, thunkAPI) => {
        const response = await authAPI.me()
        console.log(response);
        
        return response
    }
)

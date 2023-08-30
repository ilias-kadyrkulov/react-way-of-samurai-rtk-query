import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MeResponseDataType } from '../../services/auth.api'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    captchaUrl: null as string | null,
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        meAuth(state, action: PayloadAction<MeResponseDataType>) {
            state.isAuth = true
            state.id = action.payload.id
            state.email = action.payload.email
            state.login = action.payload.login
        },
        userLogout(state) {
            state.isAuth = false
            state.id = null
            state.email = null
            state.login = null
        }
    }
})

export const { meAuth, userLogout } = authSlice.actions

export default authSlice.reducer

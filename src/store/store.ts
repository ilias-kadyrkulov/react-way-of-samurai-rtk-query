import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
} from '@reduxjs/toolkit'
import usersReducer from './reducers/UsersSlice'
import appReducer from './reducers/AppSlice'
import { authAPI } from '../services/auth.api'
import authSlice from './reducers/AuthSlice'
import { reducer as formReducer } from 'redux-form'
import profileSlice from './reducers/ProfileSlice';
import { api } from '../services/api'

const rootReducer = combineReducers({
    formReducer,
    usersReducer,
    appReducer,
    authSlice,
    profileSlice,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authAPI.middleware),
    devTools: true
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

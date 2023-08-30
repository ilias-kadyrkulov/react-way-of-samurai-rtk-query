import React, { FC} from 'react'
import { Navigate } from 'react-router-dom'
import { LoginForm } from './LoginForm/LoginForm'
import { useAppSelector } from '../../hooks/redux'

export const Login: FC = (props) => {
    const isAuth = useAppSelector(state => state.authSlice.isAuth)

    if (isAuth) return <Navigate to="/profile" />

    return (
        <>
            <h1>Login</h1>
            <LoginForm />
        </>
    )
}
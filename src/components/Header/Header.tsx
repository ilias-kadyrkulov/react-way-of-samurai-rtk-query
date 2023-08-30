import React, { FC } from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useLogoutMutation } from '../../services/auth.api'
import { userLogout } from '../../store/reducers/AuthSlice'

const Header: FC = (props) => {
    const isAuth = useAppSelector((state) => state.authSlice.isAuth)
    const id = useAppSelector((state) => state.authSlice.id)
    const login = useAppSelector((state) => state.authSlice.login)
    
    const dispatch = useAppDispatch()

    const [logout] = useLogoutMutation()

    const handleLogout = async () => {
        await logout('').then(() => dispatch(userLogout()))
    }

    return (
        <header className={styles.header}>
            <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
                alt="Logo"
            />

            <div className={styles.loginBlock}>
                {isAuth ? (
                    <div>
                        {login} - <button onClick={handleLogout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </header>
    )
}

export default Header

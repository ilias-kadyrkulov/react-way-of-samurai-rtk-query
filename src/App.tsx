import React, { FC, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import { Login } from './components/Login/Login'
import { Provider } from 'react-redux'
import Preloader from './components/common/Preloader/Preloader'
import Layout from './Layout'
import { store } from './store/store'
import { useAppDispatch } from './hooks/redux'
import Header from './components/Header/Header'
import { useMeQuery } from './services/auth.api'
import { meAuth } from './store/reducers/AuthSlice'
import { ResultCodesEnum } from './api/api'
import Profile from './components/Profile/Profile'

const App: FC = (props) => {
    
    const { data, isLoading } = useMeQuery('')
    
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (data != undefined && data.resultCode === ResultCodesEnum.Success) {
            dispatch(meAuth(data.data))
        }
    }, [data])

    if (isLoading) {
        return <Preloader />
    }

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Profile />} />
                            <Route
                                path="profile/:userId?"
                                element={<Profile />}
                            />
                            {/* <Route
                                path="dialogs/*"
                                element={<DialogsContainer />}
                            /> */}
                            {/* <Route
                                path="users"
                                element={<UsersPage pageTitle="The Samurai" />}
                            /> */}
                            <Route path="login" element={<Login />} />
                        </Route>
                    </Routes>
                </Suspense>
            </div>
        </div>
    )
}

const SamuraiJSApp: FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp

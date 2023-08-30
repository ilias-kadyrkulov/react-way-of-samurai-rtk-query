import React, { FC, useEffect } from 'react'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {
    useGetUserStatusQuery,
    useLazyGetProfileIdQuery,
    useLazyGetUserStatusQuery
} from '../../services/profile.api'
import { getProfileId, getUserStatus } from '../../store/reducers/ProfileSlice'
import { skipToken } from '@reduxjs/toolkit/dist/query'

// type PropsType = {
//     profileUpdateStatus: boolean
//     isOwner: boolean
//     profile: ProfileType | null
//     status: string

//     updateStatus: (status: string) => void
//     saveProfile: (profile: ProfileType) => void
//     savePhoto: (photo: File) => void
// }

const Profile: FC = (props) => {
    let navigate = useNavigate()
    let { userId } = useParams<{ userId?: string }>()

    const dispatch = useAppDispatch()
    const [trigger, result, lastPromiseInfo] = useLazyGetProfileIdQuery()
    console.log(result, lastPromiseInfo)
    const { data: profileData } = result
    console.log(profileData);
    
    const {data: statusData} = useGetUserStatusQuery(userId ?? skipToken)
    // const [trigger, result, lastPromiseInfo] = useLazyGetUserStatusQuery()

    const isAuth = useAppSelector((state) => state.authSlice.isAuth)

    const authorizedUserId = useAppSelector((state) => state.authSlice.id)

    // if (!userId) {
    //     userId = authorizedUserId + ''
    //     if (!userId) {
    //         navigate('/login')
    //     }
    // }
    // useEffect(() => {
    //     if (!userId) {
    //         userId = authorizedUserId + ''
    //         if (!userId) {
    //             navigate('/login')
    //         }
    //     } else {
    //         dispatch(getProfileId(profileData))
    //         dispatch(getUserStatus(statusData))
    //     }
    // }, [userId])
    useEffect(() => {
        dispatch(getProfileId(profileData))
        dispatch(getUserStatus(statusData))
    }, [])

    const saveProfile = (profile: ProfileType) => {}
    const savePhoto = (photo: File) => {}
    const updateStatus = (status: string) => {}

    if (!isAuth) return <Navigate to="/login" />

    return (
        <div className={styles.profile}>
            <ProfileInfo
                saveProfile={saveProfile}
                savePhoto={savePhoto}
                updateStatus={updateStatus}
                isOwner={!userId}
            />
            {/* <MyPostsContainer /> */}
        </div>
    )
}

export default Profile

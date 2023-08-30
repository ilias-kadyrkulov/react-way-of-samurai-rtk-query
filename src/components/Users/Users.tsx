import React, { useEffect } from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import UsersSearchForm from './UsersSearchForm/UsersSearchForm'
import { FilterType, requestUsers } from '../../redux/users-reducer'
import { useDispatch, useSelector } from 'react-redux'
import {
    getCurrentPageNumber,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter,
} from '../../redux/users-selectors'
import { follow } from './../../redux/users-reducer'

export const Users: React.FC = (props) => {
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPageNumber = useSelector(getCurrentPageNumber)
    const users = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPageNumber, pageSize, filter))
    }, [])

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter)) //NOTE - в filter приходят term и friend, и запрос идет уже с ними; term м.б. '', а сервер проигнорирует friend, если будет null
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <>
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            <Paginator
                currentPageNumber={currentPageNumber}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />
            <div>
                {users.map((u) => (
                    <User
                        user={u}
                        followingInProgress={followingInProgress}
                        unfollow={unfollow}
                        follow={follow}
                        key={u.id}
                    />
                ))}
            </div>
        </>
    )
}

export default Users

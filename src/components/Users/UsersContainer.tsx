import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {
    getIsFetching
} from '../../redux/users-selectors'

type PropsType = {
    pageTitle: string
}

export const UsersPage: FC<PropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return (
        <>
            <h2 style={{ marginLeft: '10px' }}>{props.pageTitle}</h2>
            {isFetching ? <Preloader /> : null}
            {!isFetching ? <Users /> : null}
        </>
    )
}

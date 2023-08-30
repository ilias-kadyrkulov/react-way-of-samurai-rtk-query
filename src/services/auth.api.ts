import { APIResponseType } from '../api/api'
import { api } from './api'

export type MeResponseDataType = {
    id: number
    email: string
    login: string
}
export type LoginResponseDataType = {
    userId: number
}
export type LoginRequestType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const authAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        me: builder.query<APIResponseType<MeResponseDataType>, string>({
            query: () => ({
                url: 'auth/me'
            }),
            providesTags: ['Auth']
        }),
        login: builder.mutation<APIResponseType<LoginResponseDataType>, LoginRequestType>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Auth']
        }),
        logout: builder.mutation<APIResponseType<any>, string>({
            query: () => ({
                url: 'auth/login',
                method: 'DELETE'
            }),
            invalidatesTags: ['Auth']
        })
    })
})

export const { useMeQuery, useLoginMutation, useLogoutMutation } = authAPI

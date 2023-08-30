import { ProfileType } from '../types/types'
import { api } from './api'

export const profileApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProfileId: builder.query<ProfileType, string>({
            query: (userId) => ({
                url: `profile/${userId}`
            }),
            providesTags: ['Profile']
        }),
        getUserStatus: builder.query<string, string>({
            query: (userId) => ({
                url: `profile/status/${userId}`
            }),
            providesTags: ['Profile']
        })
    })
})

export const {
    useLazyGetProfileIdQuery,
    useGetUserStatusQuery,
    useLazyGetUserStatusQuery
} = profileApi

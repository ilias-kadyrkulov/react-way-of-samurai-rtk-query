import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://social-network.samuraijs.com/api/1.0/'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Auth', 'Profile'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        credentials: 'include',
        headers: { 'API-KEY': '0dafe35f-8562-4c22-a2e6-5a27a963c1ea' }
    }),
    endpoints: (builder) => ({
        
    })
})
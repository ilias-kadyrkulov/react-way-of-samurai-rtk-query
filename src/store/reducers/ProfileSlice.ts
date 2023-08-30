import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { PostType, ProfileType } from "../../types/types"


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how r u?', likesCount: 11 },
        { id: 2, message: 'Not bad.', likesCount: 19 },
        { id: 3, message: 'It\'s my first post.', likesCount: 25 },
    ] as Array<PostType>,
    profile: null as ProfileType | undefined | null,
    profileUpdateStatus: false,
    status: ''
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getProfileId(state, action: PayloadAction<ProfileType | undefined>) {
            state.profile = action.payload
        },
        getUserStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const {getProfileId, getUserStatus} = profileSlice.actions

export default profileSlice.reducer
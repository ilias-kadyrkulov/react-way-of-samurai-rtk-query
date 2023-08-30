import { createSelector } from "reselect";
import { RootState } from "../store";

const getProfileSelector = (state: RootState) => {
    return state.profileSlice.profile
}
export const getProfile = createSelector(getProfileSelector, (profile) => {
    return profile
})
export const getStatusSelector = (state: RootState) => {
    return state.profileSlice.status
}
export const getStatus = createSelector(getStatusSelector, (status) => {
    return status
})

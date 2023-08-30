import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";

let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    pageSize: 10,
    currentPageNumber: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {
        // NOTE - filter свойство
        term: '',
        friend: null as null | boolean,
    },
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
}) 

export default usersSlice.reducer;
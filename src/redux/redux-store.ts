import { Action, legacy_createStore } from "@reduxjs/toolkit"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"

export const store = legacy_createStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        // form: formReducer,
        app: appReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

// type PropertiesTypes<T> = T extends {[key: string]: infer U } ? U : never // conditional type (infer, mapped type), т.е. Generic тип, 
// export type InferActionsTypes<T extends {[key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>> // constraint, 
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never 
// в одну строку, т.к. Prop.Types хранил рез-т U, кот. выводил нам infer(что угодно); а тут по итогу параметр T - {}, у которого ключ типа string, а значение - (),
// кот. принимает что-то, и возвращает {} - именно тип этой функции мы фиксируем, infer выводит тип
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

// window.store = store
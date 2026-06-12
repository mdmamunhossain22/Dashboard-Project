import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    session: null,
    loggedIn: false
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setSession: (state, action) => {
            state.session = action.payload
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        },
    }
})

export const { setSession, setLoggedIn } = authSlice.actions
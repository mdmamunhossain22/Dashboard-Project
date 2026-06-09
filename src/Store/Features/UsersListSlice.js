import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allUserData: [],
  loading: false,
}

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
        setUserData: (state, action) => {          
            state.allUserData = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
  }
})

export const { setUserData , setLoading } = usersListSlice.actions
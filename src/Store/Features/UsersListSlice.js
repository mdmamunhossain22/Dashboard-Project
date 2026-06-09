import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allUserData: [],
}

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
        setUserData: (state, action) => {          
            state.allUserData = action.payload
        }
  }
})

export const { setUserData } = usersListSlice.actions
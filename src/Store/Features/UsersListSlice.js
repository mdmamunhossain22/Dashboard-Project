import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allUserData: [],
  addUserFormIsOpen: false
}

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.allUserData = action.payload
    },
    toggleAddUserForm: (state) => {
      state.addUserFormIsOpen = !state.addUserFormIsOpen
    },
    addUserData: (state, action) => {
      state.allUserData.push(action.payload)
    }
  }
})

export const { setUserData, toggleAddUserForm, addUserData } = usersListSlice.actions
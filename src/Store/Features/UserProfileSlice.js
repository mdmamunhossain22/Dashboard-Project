import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profileFormIsOpen: false,
}

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    toggleProfileForm: (state) => {
      state.profileFormIsOpen = !state.profileFormIsOpen
    }
  }
})

export const { toggleProfileForm } = userProfileSlice.actions
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  settingsActiveTab: 'Profile Overview',
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettingsActiveTab: (state, action) => {
      state.settingsActiveTab = action.payload
    }
  }
})

export const { setSettingsActiveTab } = settingsSlice.actions
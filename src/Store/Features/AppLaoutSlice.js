import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideBarActiveTab: null,
  loading: false,
  dropdownMenuIsOpen: false,
}

export const appLaoutSlice = createSlice({
  name: 'applayout',
  initialState,
  reducers: {
    setSideBarActiveTab: (state, action) => {
      state.sideBarActiveTab = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setDropdownMenuIsOpen: (state, action) => {
      state.dropdownMenuIsOpen = action.payload
    }
  }
})

export const { setSideBarActiveTab, setLoading, setDropdownMenuIsOpen } = appLaoutSlice.actions
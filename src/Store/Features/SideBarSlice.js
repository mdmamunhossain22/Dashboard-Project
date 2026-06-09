import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isExpanded: false,
}

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleSideBar: (state ) => {
      state.isExpanded = !state.isExpanded
    }
  }
})

export const { toggleSideBar } = sideBarSlice.actions
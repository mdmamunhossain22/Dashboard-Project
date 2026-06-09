import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideBarActiveTab: null,
}

export const appLaoutSlice = createSlice({
  name: 'applayout',
  initialState,
  reducers: {
    setSideBarActiveTab: (state , action) =>{
        state.sideBarActiveTab = action.payload
    },
  }
})

export const { setSideBarActiveTab } = appLaoutSlice.actions
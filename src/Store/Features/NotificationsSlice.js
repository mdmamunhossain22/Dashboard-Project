import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notificationData: [],
  loading: false
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationData: (state , action) =>{
        state.notificationData = action.payload
    },
    setLoadingN: (state , action) => {
        state.loading = action.payload
    }
  }
})

export const { setNotificationData, setLoadingN } = notificationSlice.actions
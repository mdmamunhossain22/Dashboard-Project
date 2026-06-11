import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './Features/ThemeSlice'
import { sideBarSlice } from './Features/SideBarSlice'
import { settingsSlice } from './Features/SettingsSlice'
import { usersListSlice } from './Features/UsersListSlice'
import { notificationSlice } from './Features/NotificationsSlice'
import { appLaoutSlice } from './Features/AppLaoutSlice'
import { userProfileSlice } from './Features/UserProfileSlice'
import { homePageSlice } from './Features/HomePageSlice'
import { userDataSlice } from './Features/UserDataSlice'



export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    sideBar: sideBarSlice.reducer,
    settings: settingsSlice.reducer,
    usersList: usersListSlice.reducer,
    notification: notificationSlice.reducer,
    applayout: appLaoutSlice.reducer,
    userProfile: userProfileSlice.reducer,
    home: homePageSlice.reducer,
    userData: userDataSlice.reducer,
  }
})
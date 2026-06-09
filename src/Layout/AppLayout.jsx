import { useEffect } from 'react';
import axios from "axios";
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { setTheme } from '../Store/Features/ThemeSlice';
import { setUserData , setLoading } from "../Store/Features/UsersListSlice";
import { setNotificationData , setLoadingN } from "../Store/Features/NotificationsSlice";

const AppLayout = () => {

  const appTheme = useSelector(state => state.theme.theme)

  const dispatch = useDispatch()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    dispatch(setTheme(savedTheme))
    // console.log(savedTheme)
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", appTheme)
  }, [appTheme])

  const getUserDataFromApi = async () => {
    const data = await axios.get('https://dummyjson.com/users?limit=15')
      .then(res => res.data);
    dispatch(setUserData(data.users))
    data && dispatch(setLoading(false))
  }

  useEffect(() => {
    dispatch(setLoading(true))
    // Fetch user data from API and update state
    getUserDataFromApi()

  }, [])

  const getInfoDataFromApi = async () => {
          const data = await axios.get('https://dummyjson.com/users?limit=15')
              .then(res => res.data);
          dispatch(setNotificationData(data.users))
          // console.log(data.users)
          data && dispatch(setLoadingN(false))
      }
  
      useEffect(() => {
          dispatch(setLoadingN(true))
          getInfoDataFromApi()
      }, [])

  const activeTab = useSelector(state => state.applayout.sideBarActiveTab)

  return (
    <div className='h-screen w-screen flex'>
      <AppSidebar />
      <div className='flex flex-col w-full h-full overflow-y-auto'>
        <AppHeader />
        <div className="flex flex-col w-full h-full p-6 max-md:p-4 overflow-y-auto no-scrollbar bg-gray-100 dark:bg-gray-950">
          {/* Pages rendered through routes */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
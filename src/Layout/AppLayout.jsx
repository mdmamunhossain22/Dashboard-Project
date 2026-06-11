import { useEffect } from 'react';
import axios from "axios";
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import LoadingAnimation from "../Components/UI/LoadingAnimation";
import { setTheme } from '../Store/Features/ThemeSlice';
import { setLoading } from '../Store/Features/AppLaoutSlice';
import { setUserData } from "../Store/Features/UsersListSlice";
import { setNotificationData } from "../Store/Features/NotificationsSlice";

const AppLayout = () => {

  const appTheme = useSelector(state => state.theme.theme)
  const loading = useSelector(state => state.applayout.loading)

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
    dispatch(setLoading(true))
    const data = await axios.get('https://dummyjson.com/users?limit=15')
      .then(res => res.data);
    dispatch(setUserData(data.users))
    data && dispatch(setLoading(false))
  }

  const getInfoDataFromApi = async () => {
    dispatch(setLoading(true))
    const data = await axios.get('https://dummyjson.com/users?limit=15')
      .then(res => res.data);
    dispatch(setNotificationData(data.users))
    // console.log(data.users)
    data && dispatch(setLoading(false))
  }

  useEffect(() => {
    // Fetch user data from API and update state
    getUserDataFromApi()
    getInfoDataFromApi()

  }, [])




  return (
    <div className='relative h-screen w-screen flex'>
      <AppSidebar />
      <div className='flex flex-col w-full h-full overflow-y-auto'>
        <AppHeader />
        <div className="flex flex-col w-full h-full p-6 max-md:p-4 overflow-y-auto no-scrollbar bg-gray-100 dark:bg-gray-950">
          {/* Pages rendered through routes */}
          {loading ?
            <div className="reletive h-full w-full ">
              <LoadingAnimation color="#2ca0ff" />
            </div>
            :
            null}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout
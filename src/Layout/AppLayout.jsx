import { useEffect } from 'react';
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { setTheme } from '../Store/Features/ThemeSlice';

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
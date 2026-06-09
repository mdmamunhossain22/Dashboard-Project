import { useState } from "react"
import React_SVG from "../public/react.svg"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { setSideBarActiveTab } from "../Store/Features/AppLaoutSlice";

const menuItems = [
  {
    icon: "dashboard",
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    icon: "groups",
    path: "/dashboard/users",
    name: "Users List",
  },
  {
    icon: "notifications_unread",
    path: "/dashboard/notifications",
    name: "Notifications",
  },
]

const systemItems = [
  {
    icon: "account_circle",
    path: "/dashboard/profile",
    name: "User Profile",
  },
  {
    icon: "settings",
    path: "/dashboard/settings",
    name: "Settings",
  },
  {
    icon: "headset_mic",
    path: "/dashboard/contact",
    name: "Conttact Us",
  },
]

const AppSidebar = () => {

  const isExpand = useSelector((state) => state.sideBar.isExpanded)
  const activeTab = useSelector(state => state.applayout.sideBarActiveTab)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const renderItems = (items, menuType) => {

    return (
      <div className={`flex flex-col ${isExpand ? "" : "items-center"}`}>
        {isExpand ?
          <h2 className="mb-4 text-xs uppercase flex leading-4 text-gray-400 justify-start">{menuType}</h2>
          : <span className="material-symbols-outlined text-gray-400">more_horiz</span>
        }
        <ul className="flex flex-col gap-1">

          {items.map((item) => {

            return (
              <li key={item.name}>
                <button onClick={() => { navigate(item.path); dispatch(setSideBarActiveTab(item.name)) }}
                  className={`flex items-center gap-3 font-medium ${activeTab === item.name ? "bg-blue-100 dark:bg-blue-500/50 text-blue-400 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"}  text-sm rounded-md cursor-pointer w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800`}>
                  <span className="material-symbols-outlined ">{item.icon}</span>
                  {isExpand ? item.name : ""}
                  {isExpand ? <span className="material-symbols-outlined  ml-auto">keyboard_arrow_right</span> : ""}
                </button>
              </li>
            )

          })}

        </ul>
      </div>
    )

  }

  return (
    <aside className={`max-md:absolute flex flex-col ${isExpand ? "lg:w-72 max-md:translate-x-0" : "lg:w-24 items-center max-md:-translate-x-full"} h-screen bg-white dark:bg-gray-900 z-40 border-r border-gray-300 dark:border-gray-700 px-5 max-md:shadow-lg transition-width duration-300`}>
      <div className={`flex items-center ${isExpand ? "" : "justify-center"} gap-3 py-8`} id="Logo/Title_Div">
        <img className="max-md:opacity-0" src={React_SVG} alt="Logo" />
        {isExpand ? <h2 className="max-md:opacity-0 font-medium text-2xl text-black dark:text-gray-50">TailAdmin</h2> : ""}
      </div>

      <div className="flex flex-col gap-4 pb-10 overflow-y-auto no-scrollbar">

        {renderItems(menuItems, "Menu")}

        {renderItems(systemItems, "System")}

      </div>
    </aside>
  )
}

export default AppSidebar

/* 
<div className={`flex flex-col ${isExpand ? "" : "items-center"}`}>
          {isExpand ?
            <h2 className="mb-4 text-xs uppercase flex leading-4 text-gray-400 justify-start">Menu</h2>
            : <span className="material-symbols-outlined text-gray-400">more_horiz</span>
          }
          <ul className="flex flex-col gap-1">
            <li>
              <button className="flex items-center gap-3 font-medium text-sm text-gray-700 dark:text-gray-300 rounded-md cursor-pointer w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">dashboard</span>
                {isExpand ? "Dashboard" : ""}
                {isExpand ? <span className="material-symbols-outlined text-gray-500 ml-auto">keyboard_arrow_right</span> : ""}
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 font-medium text-sm text-gray-700 dark:text-gray-300 rounded-md cursor-pointer w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">notifications_unread</span>
                {isExpand ? "Notifications" : ""}
                {isExpand ? <span className="material-symbols-outlined text-gray-500 ml-auto">keyboard_arrow_right</span> : ""}
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 font-medium text-sm text-gray-700 dark:text-gray-300 rounded-md cursor-pointer w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">groups</span>
                {isExpand ? "Users List" : ""}
                {isExpand ? <span className="material-symbols-outlined text-gray-500 ml-auto">keyboard_arrow_right</span> : ""}
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 font-medium text-sm text-gray-700 dark:text-gray-300 rounded-md cursor-pointer w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">account_circle</span>
                {isExpand ? "User Profile" : ""}
                {isExpand ? <span className="material-symbols-outlined text-gray-500 ml-auto">keyboard_arrow_right</span> : ""}
              </button>
            </li>
          </ul>
        </div>

        setActiveTab
 */
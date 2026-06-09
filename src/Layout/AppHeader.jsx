import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Store/Features/ThemeSlice"
import { toggleSideBar } from "../Store/Features/SideBarSlice"
import UseDropDown from "../Components/UI/UseDropDown";
import React_SVG from "../public/react.svg"
import { Link } from "react-router";
import { useEffect, useState } from "react";

const AppHeader = () => {

  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)
  const isExpanded = useSelector((state) => state.sideBar.isExpanded)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-50 dark:border-gray-700 dark:bg-gray-900 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">

        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 xl:justify-normal xl:border-b-0 xl:px-0 lg:py-4">
          <button onClick={() => dispatch(toggleSideBar())}
            className="items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 w-10 h-10 text-gray-500 hover:text-gray-700 dark:hover:text-white border-gray-200 rounded-lg z-99999 dark:border-gray-700 flex dark:text-gray-400 lg:h-11 lg:w-11 xl:border ">
            <i className="max-md:hidden h-full w-full flex items-center justify-center">
              <span className="material-symbols-outlined">menu</span>
            </i>
            <i className="lg:hidden h-full w-full flex items-center justify-center">
              <span className="material-symbols-outlined">{isExpanded ? "close" : "menu"}</span>
            </i>
          </button>

          <Link to="/" className="hidden max-md:flex text-lg font-bold text-gray-800 dark:text-white">
            <img src={React_SVG} alt="Logo" />
            <h2 className="font-medium text-2xl ml-2 text-black dark:text-gray-50">TailAdmin</h2>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 xl:hidden">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>

          <div className="max-md:hidden block">
            <form id="Search_form">
              <div className="relative">
                <span className="material-symbols-outlined absolute -translate-y-1/2 text-gray-500 pointer-events-none left-4 top-1/2 ">search</span>
                <input id="Search_input" name="Search_input" type="text" placeholder="Search or type command..."
                  className="h-11 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-108" />
              </div>
            </form>
          </div>

        </div>

        <div className={`flex ${isOpen ? "" : "max-md:hidden"} items-center max-md:justify-between max-md:shadow-md justify-end w-full gap-4 px-5 py-4 xl:flex shadow-theme-md xl:justify-end xl:px-0 xl:shadow-none`}>
          <div className="flex items-center gap-3 ">
            <button onClick={() => dispatch(toggleTheme())}
              className="relative flex items-center justify-center text-gray-500 cursor-pointer transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
              <span className="material-symbols-outlined">
                {theme === "light" ? "dark_mode" : "light_mode"}
              </span>
            </button>
            <button className="relative flex items-center justify-center text-gray-500 cursor-pointer transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>

          <UseDropDown />

        </div>

      </div>
    </header>
  )
}

export default AppHeader
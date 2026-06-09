import { Link } from "react-router";
import Vite_SVG from "../../public/vite.svg";
import { useDispatch, useSelector } from "react-redux"
import { useState, useRef, useEffect } from "react";
import { setSideBarActiveTab, setDropdownMenuIsOpen } from "../../Store/Features/AppLaoutSlice";

const UseDropDown = () => {

    const isOpen = useSelector((state) => state.applayout.dropdownMenuIsOpen)
    const dispatch = useDispatch()


    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !(event.target).closest(".dropdown-toggle")
            ) {
                dispatch(setDropdownMenuIsOpen(false));
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        };
    }, [isOpen]);

    return (
        <div className="relative">

            <button onClick={() => dispatch(setDropdownMenuIsOpen(!isOpen))}
                className="flex items-center text-gray-700 cursor-pointer dropdown-toggle dark:text-gray-400">
                <span className="flex justify-center border border-gray-200 items-center mr-3 overflow-hidden rounded-full h-11 w-11">
                    <img src={Vite_SVG} width={"40px"} alt="Profile Image" />
                </span>
                <span className="block mr-1 font-medium text-theme-sm">Vite Logo</span>
                <span className="material-symbols-outlined"> {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} </span>
            </button>

            {isOpen ?
                <div ref={dropdownRef} className="z-40 absolute right-0 mt-4 flex w-64 flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 p-3 shadow-theme-lg dark:border-gray-700 shadow-xl">
                    <div className="pl-2">
                        <span className="block font-medium text-gray-700 text-sm dark:text-gray-400 no-underline">Musharof Chowdhury</span>
                        <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400 no-underline">randomuser@pimjo.com</span>
                    </div>
                    <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                        <li>
                            <Link
                                to="/dashboard/profile"
                                onClick={() => { dispatch(setSideBarActiveTab("User Profile")); dispatch(setDropdownMenuIsOpen(false)) }}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-3 font-medium rounded-lg group text-theme-sm dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                            >
                                <span className="material-symbols-outlined">account_circle</span>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/settings"
                                onClick={() => { dispatch(setSideBarActiveTab("Settings")); dispatch(setDropdownMenuIsOpen(false)) }}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-3 font-medium rounded-lg group text-theme-sm dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                            >
                                <span className="material-symbols-outlined">settings</span>
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/contact"
                                onClick={() => { dispatch(setSideBarActiveTab("Contact Us")); dispatch(setDropdownMenuIsOpen(false)) }}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-3 font-medium rounded-lg group text-theme-sm dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                            >
                                <span className="material-symbols-outlined">info</span>
                                Support
                            </Link>
                        </li>
                    </ul>
                    <Link
                        to="/signin"
                        onClick={() => dispatch(setDropdownMenuIsOpen(false))}
                        className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        Sign out
                    </Link>
                </div>

                : null
            }


        </div>
    )
}

export default UseDropDown
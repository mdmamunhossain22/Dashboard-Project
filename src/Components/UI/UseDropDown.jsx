import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { useState, useRef, useEffect } from "react";
import { setSideBarActiveTab, setDropdownMenuIsOpen } from "../../Store/Features/AppLaoutSlice";
import appwriteService from "../../Lib/appwrite";
import { setUserData } from "../../Store/Features/UsersListSlice";

const UseDropDown = () => {

    const isOpen = useSelector((state) => state.applayout.dropdownMenuIsOpen)
    const userData = useSelector((state) => state.userData.userData)

    const dispatch = useDispatch()
    const navigate = useNavigate()


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
                <span className="flex items-center justify-center border border-gray-200 mr-3 overflow-hidden rounded-full h-11 w-11">
                    <img className="w-full h-full" src={userData.imageurl || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} alt="Profile Image" />
                </span>
                <span className="block mr-1 font-medium text-theme-sm">{userData.fullname}</span>
                <span className="material-symbols-outlined"> {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"} </span>
            </button>

            {isOpen ?
                <div ref={dropdownRef} className="z-40 absolute right-0 mt-4 flex w-64 flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 p-3 shadow-theme-lg dark:border-gray-700 shadow-xl">
                    <div className="pl-2">
                        <span className="block font-medium text-gray-700 text-sm dark:text-gray-400 no-underline">{userData.fullname}</span>
                        <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400 no-underline">{userData.email}</span>
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
                    <button
                        onClick={() => {
                            appwriteService.signOut()
                            localStorage.setItem("session", "")
                            dispatch(setUserData({
                                id: null,
                                fullname: null,
                                username: null,
                                email: null,
                                role: null,
                                phone: null,
                                bio: null,
                                address: {
                                    city: "Dhaka",
                                    country: "Bangladesh",
                                    zip: "1207",
                                    street: "123 Main Street",
                                },
                                verified: false,
                                password: null,
                                imageurl: null,
                                profilepictureid: null,
                            }))
                            navigate("/signin")
                            dispatch(setDropdownMenuIsOpen(false))
                        }}
                        className="flex items-center gap-3 px-3 py-2 mt-3 cursor-pointer font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-red-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-red-400/80 dark:hover:text-white"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        Sign out
                    </button>
                </div>

                : null
            }


        </div>
    )
}

export default UseDropDown
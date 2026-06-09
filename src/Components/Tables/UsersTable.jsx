import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../../Store/Features/UsersListSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "../../Components/UI/Modal/Modal";
import { AddUserForm } from "../../Components";
import { toggleAddUserForm } from "../../Store/Features/UsersListSlice";


const UsersTable = () => {

    const usersData = useSelector(state => state.usersList.allUserData)
    const addUserFormIsOpen = useSelector(state => state.usersList.addUserFormIsOpen)
    const dispatch = useDispatch()

    const addUser = () => { }

    const deleteAllUser = () => {
        // Implement the logic to delete all information here
        if (!usersData.length) return

        const ans = window.confirm("Are You Sure to Delete All Data?")
        ans ? dispatch(setUserData([])) : null
    }

    const deleteUser = (id) => {
        const newData = usersData.filter((item) => item.id !== id && id)
        dispatch(setUserData(newData))
    }


    return (
        <div className="relative flex flex-col w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden">

            {
                /* Add User Form Modal */
                <Modal isOpen={addUserFormIsOpen} showCloseButton={false}
                    className="flex justify-center w-fit h-fit">
                    <AddUserForm />
                </Modal>
            }

            <div className="flex items-center justify-between px-6 py-5">
                <h2 className="text-base font-medium text-gray-800 dark:text-white/90">All User Data</h2>
                <button 
                className="text-sm px-4 py-2.5 rounded-lg bg-blue-500 text-gray-50 cursor-pointer"
                onClick={() => dispatch(toggleAddUserForm())}
                >
                    Add User
                </button>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 sm:p-6">
                <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/5 dark:bg-white/3">

                    <div className="flex gap-4 px-6 mb-4 justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                Total Users : <span className="text-blue-500">{usersData.length}</span>
                            </h3>
                        </div>
                        <div className="">
                            <button onClick={() => deleteAllUser()}
                                className="flex justify-center items-center px-4 py-1 font-medium text-sm text-red-500 border border-red-500 rounded-sm cursor-pointer">Delete All</button>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">

                        <div className="flex items-center w-full max-md:w-fit bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                            <div className="px-4 py-2.5 min-w-14 max-w-14 font-semibold w-full">No.</div>
                            <div className="px-4 py-2.5 min-w-20 max-w-20 font-semibold w-full">Photo</div>
                            <div className="px-4 py-2.5 min-w-60 font-semibold w-full">Full Name</div>
                            <div className="px-4 py-2.5 min-w-60 font-semibold w-full">Username</div>
                            <div className="px-4 py-2.5 min-w-36 font-semibold w-full">Account Type</div>
                            <div className="px-4 py-2.5 min-w-32 font-semibold w-full">Actions</div>
                        </div>

                        {!usersData.length ?
                            <div className="flex items-center justify-center w-full px-10 py-32">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-100">No User Available!</h3>
                            </div>
                            :
                            usersData.map((user) => {

                                return (

                                    <div key={user.id} className="flex items-center w-full max-md:w-fit text-gray-900 dark:text-gray-300">
                                        <div className="px-4 py-2.5 min-w-14 max-w-14 w-full font-medium">{user.id}.</div>
                                        <div className="px-4 py-2.5 min-w-20 max-w-20 w-full">
                                            <div className="flex items-center justify-center h-11 w-11 overflow-hidden bg-blue-200 rounded-full">
                                                <img src={user.image || "https://plus.unsplash.com/premium_photo-1669349127520-fa1e30b02055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MSUzQTF8ZW58MHx8MHx8fDA%3D"} alt="" className="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 px-4 py-2.5 min-w-60 w-full">
                                            <span className="font-medium text-sm">{user.firstName || user.fullName} {user.lastName || ""}</span>
                                            <span className="text-xs">{user.email}</span>
                                        </div>
                                        <div className="px-4 py-2.5 min-w-60 w-full">
                                            <span className="text-sm">{user.username}</span>
                                        </div>
                                        <div className="px-4 py-2.5 min-w-36 w-full">
                                            <span className="font-medium text-base">{user.role}</span>
                                        </div>
                                        <div className="flex items-center gap-3 px-4 py-2.5 min-w-32 w-full">
                                            <button className="flex items-center justify-center p-1 cursor-pointer ">
                                                <span className="material-symbols-outlined text-green-400">edit_square</span>
                                            </button>
                                            <button onClick={() => deleteUser(user.id)}
                                                className="flex items-center justify-center p-1 cursor-pointer ">
                                                <span className="material-symbols-outlined text-red-400">delete</span>
                                            </button>
                                        </div>
                                    </div>

                                )

                            })}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default UsersTable
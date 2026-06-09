import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import LoadingAnimation from "../UI/LoadingAnimation";
import axios from "axios";
import { setNotificationData } from "../../Store/Features/NotificationsSlice";


const NotificationTable = () => {

    const notificationData = useSelector(state => state.notification.notificationData)
    const dispatch = useDispatch()
    

    const deleteAllInfo = () => {
        // Implement the logic to delete all information here
        const ans = window.confirm("Are You Sure to Delete All Data?")
        ans ? dispatch(setNotificationData([])) : null
    }
    
    const deleteColumn = (id) => { 
        const newData = notificationData.filter((item)=> item.id !== id && id)
        dispatch(setNotificationData(newData))
    }


    return (
        <div className="relative flex flex-col w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden">

            <div className="flex items-center px-6 py-5">
                <h2 className="text-base font-medium text-gray-800 dark:text-white/90">All Notifications</h2>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 sm:p-6">
                <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/5 dark:bg-white/3">

                    <div className="flex gap-4 px-6 mb-4 justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                Total Info : <span className="text-blue-500">{notificationData.length}</span>
                            </h3>
                        </div>
                        <div className="">
                            <button onClick={()=>deleteAllInfo()}
                            className="flex justify-center items-center px-4 py-1 font-medium text-sm text-red-500 border border-red-500 rounded-sm cursor-pointer">Delete All</button>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">

                        <div className="flex items-center w-full max-md:w-fit bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                            <div className="px-3 py-2.5 w-full min-w-11 max-w-11 font-semibold text-sm uppercase">No.</div>
                            <div className="px-3 py-2.5 w-full min-w-24 max-w-24 font-semibold text-sm uppercase">User</div>
                            <div className="px-3 py-2.5 w-full min-w-24 max-w-24 font-semibold text-sm uppercase">Website</div>
                            <div className="px-3 py-2.5 w-full min-w-32 max-w-32 font-semibold text-sm uppercase">Email</div>
                            <div className="px-3 py-2.5 w-full min-w-28 max-w-28 font-semibold text-sm uppercase">Password</div>
                            <div className="px-3 py-2.5 w-full min-w-20 max-w-20 font-semibold text-sm uppercase">code</div>
                            <div className="px-3 py-2.5 w-full min-w-36 max-w-36 font-semibold text-sm uppercase">Ip</div>
                            <div className="px-3 py-2.5 w-full min-w-36 max-md:max-w-36 font-semibold text-sm uppercase">Agent</div>
                            <div className="px-3 py-2.5 w-full min-w-24 max-w-24 font-semibold text-sm uppercase">Date</div>
                            <div className="px-3 py-2.5 w-full min-w-20 max-w-20 font-semibold text-sm uppercase">Action</div>
                        </div>

                        {!notificationData.length ?
                            <div className="flex items-center justify-center w-full px-10 py-32">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-100">No Information Available!</h3>
                            </div>
                            :
                            notificationData.map((data) => {

                                return (

                                    <div key={data.id} className="flex items-center w-full max-md:w-fit border-b border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-300">
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-11 max-w-11 w-full">{data.id}.</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-24 max-w-24 w-full">{data.username}</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-24 max-w-24 w-full">{data.image}</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-32 max-w-32 w-full">{data.email}</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-28 max-w-28 w-full">{data.password}</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-20 max-w-20 w-full">{data.address.postalCode}</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-36 max-w-36 w-full">{data.ip}</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-36 max-md:max-w-36 w-full text-nowrap">{data.userAgent}</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar text-xs font-medium border-r border-gray-400 dark:border-gray-600 px-3 py-2 min-w-24 max-w-24 w-full">{data.birthDate}</div>
                                        <div className="flex items-center min-h-12 overflow-y-auto no-scrollbar px-3 py-2 min-w-20 max-w-20 w-full gap-3">
                                            <button onClick={()=> deleteColumn(data.id)}
                                            className="flex items-center justify-center px-1 cursor-pointer ">
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

export default NotificationTable
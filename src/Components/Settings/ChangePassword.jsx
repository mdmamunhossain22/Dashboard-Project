import { useState } from "react"


const ChangePassword = () => {

    const [showCurrPass, setShowCurrPass] = useState(false)
    const [showNewPass, setShowNewPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)

    return (
        <div className="w-full flex flex-col gap-4">

            <div className="w-full">
                <form 
                className="flex flex-col gap-4 w-full max-w-md" id="Change_Password"
                onSubmit={(e) => {
                    e.preventDefault()
                    // Handle password change logic here
                }}
                >

                    <div className="flex flex-col gap-2">
                        <label htmlFor="Current_Pass" className="text-sm font-semibold text-gray-500 dark:text-gray-400">Current Password</label>
                        <div className="relative flex items-center">
                            <div
                                className="flex items-center justify-center absolute right-3 text-gray-600 dark:text-gray-400 cursor-pointer"
                                onClick={() => setShowCurrPass(!showCurrPass)}
                            >
                                <span className="material-symbols-outlined">{showCurrPass ? "visibility" : "visibility_off"}</span>
                            </div>
                            <input id="Current_Pass" name="Current_Pass" type={showCurrPass ? "text" :"password"} placeholder="Enter current password"
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="New_Pass" className="text-sm font-semibold text-gray-500 dark:text-gray-400">New Password</label>
                        <div className="relative flex items-center">
                            <div
                                className="flex items-center justify-center absolute right-3 text-gray-600 dark:text-gray-400 cursor-pointer"
                                onClick={() => setShowNewPass(!showNewPass)}
                            >
                                <span className="material-symbols-outlined">{showNewPass ? "visibility" : "visibility_off"}</span>
                            </div>
                            <input id="New_Pass" name="New_Pass" type={showNewPass ? "text" :"password"} placeholder="Enter new password"
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="Confirm_Pass" className="text-sm font-semibold text-gray-500 dark:text-gray-400">Confirm New Password</label>
                        <div className="relative flex items-center">
                            <div
                                className="flex items-center justify-center absolute right-3 text-gray-600 dark:text-gray-400 cursor-pointer"
                                onClick={() => setShowConPass(!showConPass)}
                            >
                                <span className="material-symbols-outlined">{showConPass ? "visibility" : "visibility_off"}</span>
                            </div>
                            <input id="Confirm_Pass" name="Confirm_Pass" type={showConPass ? "text" :"password"} placeholder="Confirm new password"
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2" />
                        </div>
                    </div>

                    <div className="">
                        <button type="submit"
                            className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-500 cursor-pointer">
                            Change Password
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ChangePassword
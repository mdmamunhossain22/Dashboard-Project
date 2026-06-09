

const ChangePassword = () => {
    return (
        <div className="w-full flex flex-col gap-4">

            <div className="">
                <h4 className="font-bold text-gray-700 dark:text-gray-200">Change Password</h4>
            </div>

            <div className="w-full">
                <form className="flex flex-col gap-4 w-full max-w-md" id="Change_Password">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="Current_Pass" className="text-sm font-semibold text-gray-800 dark:text-gray-200">Current Password</label>
                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute right-3 text-gray-800 dark:text-gray-200">visibility_off</span>
                            <input id="Current_Pass" name="Current_Pass" type="password" placeholder="Enter current password"
                                className=" w-full pl-4 py-1.5 pr-6 bg-gray-100 dark:bg-gray-800 border text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:ring-none" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="New_Pass" className="text-sm font-semibold text-gray-800 dark:text-gray-200">New Password</label>
                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute right-3 text-gray-800 dark:text-gray-200">visibility_off</span>
                            <input id="New_Pass" name="New_Pass" type="password" placeholder="Enter new password"
                                className=" w-full pl-4 py-1.5 pr-6 bg-gray-100 dark:bg-gray-800 border text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:ring-none" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="Confirm_Pass" className="text-sm font-semibold text-gray-800 dark:text-gray-200">Confirm New Password</label>
                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute right-3 text-gray-800 dark:text-gray-200">visibility_off</span>
                            <input id="Confirm_Pass" name="Confirm_Pass" type="password" placeholder="Confirm new password"
                                className=" w-full pl-4 py-1.5 pr-6 bg-gray-100 dark:bg-gray-800 border text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 rounded-lg outline-none focus:ring-none" />
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
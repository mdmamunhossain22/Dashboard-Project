import Switch from "../UI/Switch"


const Security = () => {
    return (
        <div className="flex flex-col gap-4">

            <div className="">
                <h4 className="font-bold text-gray-700 dark:text-gray-200">Security Settings</h4>
            </div>

            <div className="flex flex-col gap-4">

                <div className="flex items-center justify-between max-w-md px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="">
                        <h3 className="text-sm text-gray-800 dark:text-gray-200 font-semibold">SignUp / Register Feature</h3>
                        <p className="text-xs text-gray-500">Admin can enable Or disable SignUp Feature!</p>
                    </div>
                    <div className="">
                        <Switch />
                    </div>
                </div>

                <div className="flex items-center justify-between max-w-md px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="">
                        <h3 className="text-sm text-gray-800 dark:text-gray-200 font-semibold">Auto Apporove</h3>
                        <p className="text-xs text-gray-500">After creating User Account they need to Admin approve!</p>
                    </div>
                    <div className="">
                        <Switch />
                    </div>
                </div>

                <div className="flex items-center justify-between max-w-md px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="">
                        <h3 className="text-sm text-gray-800 dark:text-gray-200 font-semibold">Change Password</h3>
                        <p className="text-xs text-gray-500">If this option disabled User can't Change account password.</p>
                    </div>
                    <div className="">
                        <Switch />
                    </div>
                </div>

                <div className="flex items-center justify-between max-w-md px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="">
                        <div className=""></div>
                        <h3 className="text-sm text-gray-800 dark:text-gray-200 font-semibold">Verify Email</h3>
                        <p className="text-xs text-gray-500">If your accoun is not veryfied plese verify your Email!</p>
                    </div>
                    <div className="">
                        <button className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-500 cursor-pointer">
                            verify
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Security
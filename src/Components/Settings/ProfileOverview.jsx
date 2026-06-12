import { useSelector } from "react-redux"



const ProfileOverview = () => {

    const userData = useSelector(state => state.userData.userData)


    return (
        <div className="flex flex-col gap-4">
            <div className="">
                <h4 className="font-bold text-gray-700 dark:text-gray-200">Account Details</h4>
            </div>

            <div className="flex flex-col">

                <div className="flex items-center gap-2 py-2 text-gray-800 dark:text-gray-200">
                    <p className="min-w-32 font-semibold text-sm">Full Name</p>
                    <p className="text-sm font-medium text-gray-500">{userData.fullname}</p>
                </div>
                <div className="flex items-center gap-2 py-2 text-gray-800 dark:text-gray-200">
                    <p className="min-w-32 font-semibold text-sm">User Name</p>
                    <p className="text-sm font-medium text-gray-500">{userData.username}</p>
                </div>
                <div className="flex items-center gap-2 py-2 text-gray-800 dark:text-gray-200">
                    <div className="flex items-center gap-3 min-w-32">
                        <p className=" font-semibold text-sm">Email</p>
                        <span className="px-2 py-0.5 text-xs text-green-600 rounded-full bg-green-100 dark:bg-green-900/50">verified</span>
                    </div>
                    <p className="text-sm font-medium text-gray-500">{userData.email}</p>
                </div>
                <div className="flex items-center gap-2 py-2 text-gray-800 dark:text-gray-200">
                    <p className="min-w-32 font-semibold text-sm">Phone</p>
                    <p className="text-sm font-medium text-gray-500">{userData.phone ? "+880" + userData.phone : "null"}</p>
                </div>
                <div className="flex items-center gap-2 py-2 text-gray-800 dark:text-gray-200">
                    <p className="min-w-32 font-semibold text-sm">Address</p>
                    <p className="text-sm font-medium text-gray-500">{userData.address.city + " , " + userData.address.country}</p>
                </div>
                <div className="flex items-center gap-2 py-2 text-gray-800 dark:text-gray-200">
                    <p className="min-w-32 font-semibold text-sm">Account Type</p>
                    <p className="text-sm font-medium capitalize text-gray-500">{userData.role}</p>
                </div>

            </div>
        </div>
    )
}

export default ProfileOverview

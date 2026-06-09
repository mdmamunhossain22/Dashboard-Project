import { useDispatch, useSelector } from "react-redux";
import { EditProfileForm } from "../index";
import { Modal } from "../UI/Modal/Modal"
import { toggleProfileForm } from "../../Store/Features/UserProfileSlice";

const ProfileCard = () => {

    const profileFormIsOpen = useSelector((state) => state.userProfile.profileFormIsOpen)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col gap-3 w-full p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl">

            <div className="">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 ">Profile</h3>
            </div>

            <Modal isOpen={profileFormIsOpen} onClose={() => dispatch(toggleProfileForm())} showCloseButton={false}
                className="flex justify-center max-md:pt-24 w-fit h-fit">
                <EditProfileForm />
            </Modal>

            <div id="Presonal_Info" className="flex flex-col gap-4 p-5 border border-gray-200 dark:border-gray-700 rounded-2xl lg:p-6">
                <div className="flex max-md:flex-col items-center justify-between max-md:gap-4">

                    <div className="flex max-md:flex-col items-center gap-5">
                        <div className="flex items-center justify-center overflow-hidden h-20 w-20 rounded-full">
                            <img src="https://images.pexels.com/photos/36090050/pexels-photo-36090050.jpeg" alt="" className="h-full w-full" />
                        </div>
                        <div className="flex flex-col max-md:items-center gap-2">
                            <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">Musharof Chowdhury</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Team Manager</p>
                        </div>
                    </div>

                    <div className="max-md:w-full">
                        <button onClick={() => dispatch(toggleProfileForm())}
                        className="flex items-center max-md:justify-center gap-1 max-md:w-full px-4 py-2.5 font-medium text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-full cursor-pointer">
                            <span className="material-symbols-outlined">stylus</span>
                            Edit
                        </button>
                    </div>

                </div>

                <div className="flex flex-col gap-5 max-w-96">
                    <h3 className="text-lg font-semibold max-md:text-center text-gray-800 dark:text-white/90">Presonal Information</h3>
                    <div className="flex flex-wrap gap-6 w-full">

                        <div className="flex flex-col gap-2">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">Full Name</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">Musharof Chowdhury</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">User Name</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">@musharofchowdhury</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">Email Address</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">randomuser@pimjo.com</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">Phone</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">+8801793-795346</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">Bio</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">randomuser@pimjo.com</p>
                        </div>

                    </div>
                </div>
            </div>

            <div id="Address" className="flex max-md:flex-col justify-between gap-4 p-5 border border-gray-200 dark:border-gray-700 rounded-2xl lg:p-6">

                <div className="flex flex-col gap-5">
                    <h3 className="text-lg font-semibold max-md:text-center text-gray-800 dark:text-white/90">Address</h3>
                    <div className="flex flex-wrap gap-6 max-w-96">

                        <div className="flex flex-col gap-2 w-30 max-md:w-full">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">Country</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">Bangladesh</p>
                        </div>
                        <div className="flex flex-col gap-2 w-30 max-md:w-full">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">City/State</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">Dhaka</p>
                        </div>
                        <div className="flex flex-col gap-2 w-30 max-md:w-full">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">Postal Code</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">1207</p>
                        </div>
                        <div className="flex flex-col gap-2 w-30 max-md:w-full">
                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">Street Address</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">123 Main Street</p>
                        </div>

                    </div>
                </div>

                <div className="max-md:w-full">
                    <button className="flex items-center max-md:justify-center gap-1 max-md:w-full px-4 py-2.5 font-medium text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-full cursor-pointer">
                        <span className="material-symbols-outlined">stylus</span>
                        Edit
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ProfileCard
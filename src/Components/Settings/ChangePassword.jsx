import { useState } from "react"
import { useForm } from "react-hook-form";


const ChangePassword = () => {

    const [showCurrPass, setShowCurrPass] = useState(false)
    const [showNewPass, setShowNewPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)

    const [currentPasserr, setCurrentPasserr] = useState(null)
    const [newPasserr, setNewPasserr] = useState(null)
    const [conPasserr, setConPasserr] = useState(null)

    const { register, handleSubmit, setValue } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        if (data.currentPass && data.newPass && data.confirmPass) {
            // Handle password change logic here
            data.newPass !== data.confirmPass ?
                setConPasserr("New password and confirmation do not match!") : setConPasserr(null)

            if (data.newPass === data.confirmPass) {
                setValue("currentPass", "")
                setValue("newPass", "")
                setValue("confirmPass", "")
            }
        }

    }

    const onError = (errors) => {
        // console.log(errors)
        errors.currentPass ? setCurrentPasserr("Please enter a valid Password! Must include at least one uppercase letter, one lowercase letter, and a number!") : setCurrentPasserr(null)
        errors.newPass ? setNewPasserr("Please enter a valid Password! Must include at least one uppercase letter, one lowercase letter, and a number!") : setNewPasserr(null)
        if (!errors.newPass) {
            errors.confirmPass ? setConPasserr("Please enter a valid Password!") : setConPasserr(null)
        }
    }

    return (
        <div className="w-full flex flex-col gap-4">

            <div className="w-full">
                <form
                    className="flex flex-col gap-4 w-full max-w-md" id="Change_Password"
                    onSubmit={handleSubmit(onSubmit, onError)}
                >

                    <div className="flex flex-col gap-2">
                        <label htmlFor="Current_Pass" className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Current Password
                        </label>
                        <div className="relative flex items-center">
                            <div
                                className="flex items-center justify-center absolute right-3 text-gray-600 dark:text-gray-400 cursor-pointer"
                                onClick={() => setShowCurrPass(!showCurrPass)}
                            >
                                <span className="material-symbols-outlined">{showCurrPass ? "visibility" : "visibility_off"}</span>
                            </div>
                            <input
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                                id="Current_Pass"
                                name="Current_Pass"
                                type={showCurrPass ? "text" : "password"}
                                placeholder="Enter current password"
                                {...register("currentPass", { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}
                            />
                        </div>
                        {currentPasserr && (
                            <span className="text-sm text-red-500">
                                {currentPasserr}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="New_Pass" className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            New Password
                        </label>
                        <div className="relative flex items-center">
                            <div
                                className="flex items-center justify-center absolute right-3 text-gray-600 dark:text-gray-400 cursor-pointer"
                                onClick={() => setShowNewPass(!showNewPass)}
                            >
                                <span className="material-symbols-outlined">{showNewPass ? "visibility" : "visibility_off"}</span>
                            </div>
                            <input
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                                id="New_Pass"
                                name="New_Pass"
                                type={showNewPass ? "text" : "password"}
                                placeholder="Enter new password"
                                {...register("newPass", { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}
                            />
                        </div>
                        {newPasserr && (
                            <span className="text-sm text-red-500">
                                {newPasserr}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="Confirm_Pass" className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Confirm New Password
                        </label>
                        <div className="relative flex items-center">
                            <div
                                className="flex items-center justify-center absolute right-3 text-gray-600 dark:text-gray-400 cursor-pointer"
                                onClick={() => setShowConPass(!showConPass)}
                            >
                                <span className="material-symbols-outlined">{showConPass ? "visibility" : "visibility_off"}</span>
                            </div>
                            <input
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                                id="Confirm_Pass"
                                name="Confirm_Pass"
                                type={showConPass ? "text" : "password"}
                                placeholder="Confirm new password"
                                {...register("confirmPass", { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}
                            />
                        </div>
                        {conPasserr && (
                            <span className="text-sm text-red-500">
                                {conPasserr}
                            </span>
                        )}
                    </div>

                    <div className="mt-2">
                        <button
                            type="submit"
                            className="px-3 py-2 max-md:w-full rounded-md text-sm font-medium text-white bg-blue-500 cursor-pointer"
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ChangePassword
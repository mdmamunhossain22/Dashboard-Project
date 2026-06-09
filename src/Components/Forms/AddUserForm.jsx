import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { addUserData, toggleAddUserForm } from "../../Store/Features/UsersListSlice";
import { useForm } from "react-hook-form";


const AddUserForm = () => {

    const usersData = useSelector(state => state.usersList.allUserData)

    const dispatch = useDispatch()
    const [emailErr, setEmailerr] = useState(false)
    const [passwordErr, setPassworderr] = useState(false)
    const [fullNameErr, setFullNameerr] = useState(false)
    const [userNameErr, setUserNameerr] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const { register, handleSubmit, setValue } = useForm()

    const onSubmit = (data) => {
        if (data) {
            const newUser = {
                id: usersData[usersData.length - 1]?.id + 1 || 1,
                fullName: data.fullName,
                username: data.userName,
                email: data.email,
                password: data.password,
                role: "user"
            }
            dispatch(addUserData(newUser))

            setValue("fullName", "")
            setValue("userName", "")
            setValue("email", "")
            setValue("password", "")
            setEmailerr(false)
            setPassworderr(false)
            setFullNameerr(false)
            setUserNameerr(false)
            dispatch(toggleAddUserForm())
        }
    }

    const onError = (errors) => {
        console.log(errors)
        errors.email ? setEmailerr(true) : setEmailerr(false)
        errors.password ? setPassworderr(true) : setPassworderr(false)
        errors.fullName ? setFullNameerr(true) : setFullNameerr(false)
        errors.userName ? setUserNameerr(true) : setUserNameerr(false)
    }

    return (
        <div className="w-md max-md:w-full max-md:p-5 px-8 py-6 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900">

            <div className="flex items-center justify-between gap-5 mb-5">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl max-md:text-xl font-semibold text-gray-900 dark:text-gray-100">Create New User Account</h2>
                    <p className="text-gray-500 text-sm">Fill all the details to create a new user!</p>
                </div>
                <div className="flex justify-end items-start">
                    <button onClick={() => dispatch(toggleAddUserForm())}
                        className="flex items-center justify-center p-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded-full cursor-pointer">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>

            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit, onError)}>

                <div className="flex flex-col gap-4 w-full md:flex-row">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name
                            <span className="text-red-500">{" * "}</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            {...register("fullName", { required: true, minLength: 4, maxLength: 40 })}
                            className="h-11 w-full capitalize rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                            placeholder="John Doe"
                        />
                        {fullNameErr && (
                            <label htmlFor="fullName" className="text-xs text-red-500">
                                Please enter a valid full name with 4 to 40 characters.
                            </label>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="userName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            User Name
                            <span className="text-red-500">{" * "}</span>
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            {...register("userName", { required: true, minLength: 8, maxLength: 30, pattern: /^@.+$/ })}
                            className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                            placeholder="@userName123"
                        />
                        {userNameErr && (
                            <label htmlFor="userName" className="text-xs text-red-500">
                                Please enter a valid user name starting with “@”.
                            </label>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                            <span className="text-red-500">{" * "}</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                            className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                            placeholder="example123@email.com"
                        />
                        {emailErr && (
                            <label htmlFor="email" className="text-sm text-red-500">
                                Please enter a valid email address!
                            </label>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                            <span className="text-red-500">{" * "}</span>
                        </label>
                        <div className="relative flex items-center">
                            <input
                                type={showPass ? "text" : "password"}
                                id="password"
                                {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                                placeholder="Enter your password"
                            />
                            <div
                                className="flex items-center justify-center absolute right-3 text-gray-600 dark:text-gray-400 cursor-pointer"
                                onClick={() => setShowPass(!showPass)}
                            >
                                <span className="material-symbols-outlined">{showPass ? "visibility" : "visibility_off"}</span>
                            </div>
                        </div>
                        {passwordErr && (
                            <label htmlFor="password" className="text-sm text-red-500">
                                Please enter a valid password!
                            </label>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 mt-2">
                    <button onClick={(e) => {
                        e.preventDefault();
                        dispatch(toggleAddUserForm());
                    }}
                        className="text-sm px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 cursor-pointer">
                        Close
                    </button>
                    <button type="submit"
                        className="text-sm px-4 py-2.5 rounded-lg bg-indigo-500 text-gray-50 cursor-pointer">
                        Create User
                    </button>
                </div>

            </form>



        </div>
    )
}

export default AddUserForm
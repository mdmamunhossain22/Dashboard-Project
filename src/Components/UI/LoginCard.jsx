import { useState } from 'react'
import { useForm } from "react-hook-form"
import Vite_SVG from '../../public/favicon.svg'
import { Link, useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../Store/Features/ThemeSlice'
import InfoPopUp from './InfoPopUp'

export default function LoginCard() {

    const [loginCard, setLoginCard] = useState(true)
    const [showPass, setShowPass] = useState(false)
    const [userNameError, setUserNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const [userNameInfo, setUserNameInfo] = useState(false)
    const [emailInfo, setEmailInfo] = useState(false)
    const [passwordInfo, setPasswordInfo] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.theme)

    const { register, handleSubmit, watch, setValue } = useForm()

    const onSubmit = (data) => {
        if (data) {
            console.log(data)
            setValue("userName", ""); setValue("email", ""); setValue("password", "")
            setUserNameError(null); setEmailError(null); setPasswordError(null)
            navigate("/")
        }
    }
    const onError = (err) => {
        if (err) {
            console.log(err)
            err.userName ? setUserNameError(true) : setUserNameError(null)
            err.email ? setEmailError(true) : setEmailError(null)
            err.password ? setPasswordError(true) : setPasswordError(null)
        }
    }


    return (
        <>
            <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8">

                <button
                    className="flex justify-center items-center cursor-pointer absolute top-4 right-4 rounded-full bg-gray-200 dark:bg-gray-700 p-4 dark:text-gray-300 text-gray-800 dark:hover:bg-gray-600 hover:bg-gray-300"
                    onClick={() => dispatch(toggleTheme())}
                >
                    <span className="material-symbols-outlined">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
                </button>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={Vite_SVG}
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-800 dark:text-white">
                        {loginCard ? "Login to your account" : "Create an Account"}
                    </h2>
                </div>

                <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        method="POST"
                        className="space-y-4"
                        onSubmit={handleSubmit(onSubmit, onError)}
                    >
                        {loginCard ? "" :
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="email" onMouseEnter={() => setUserNameInfo(true)} onMouseLeave={() => setUserNameInfo(false)}
                                    className="relative flex items-center gap-x-3 text-sm/6 font-medium dark:text-gray-100">
                                        User Name
                                        <span className="material-symbols-outlined text-gray-400 text-xs cursor-pointer">
                                            info
                                        </span>
                                        {userNameInfo && (
                                            <InfoPopUp>
                                                minimum 8 characters, no spaces, must include @ , only letters, numbers, and underscores allowed
                                            </InfoPopUp>
                                        )}
                                    </label>
                                    {userNameError && (
                                        <div className="text-sm text-right">
                                            <p className=" text-red-500 dark:text-red-400 text-right">
                                                Please enter a valid username!
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="block w-full rounded-md bg-gray-200 dark:bg-white/5 px-3 py-1.5 text-base dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        id="userName"
                                        name="userName"
                                        type="text"
                                        required
                                        placeholder="@userName123"
                                        {...register("userName", { required: true, minLength: 8, maxLength: 30 })}
                                    />
                                </div>
                            </div>
                        }

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="email" onMouseEnter={() => setEmailInfo(true)} onMouseLeave={() => setEmailInfo(false)}
                                className="relative flex items-center gap-x-3 text-sm/6 font-medium dark:text-gray-100">
                                    Email address
                                    <span className="material-symbols-outlined text-gray-400 text-xs cursor-pointer" >
                                        info
                                    </span>
                                    {emailInfo && (
                                        <InfoPopUp>
                                            minimum 8 characters, must include @ and .com
                                        </InfoPopUp>
                                    )}
                                </label>
                                {emailError && (
                                    <div className="text-sm text-right">
                                        <p className="text-red-500 dark:text-red-400 text-right">
                                            Please enter a valid email address!
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md bg-gray-200 dark:bg-white/5 px-3 py-1.5 text-base dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="example123@example.com"
                                    {...register("email", { required: true, minLength: 8, maxLength: 40, pattern: /^\S+@\S+\.\S+$/i })}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" onMouseEnter={() => setPasswordInfo(true)} onMouseLeave={() => setPasswordInfo(false)}
                                className="relative flex items-center gap-x-3 text-sm/6 font-medium dark:text-gray-100">
                                    Password
                                    <span className="material-symbols-outlined text-gray-400 text-xs cursor-pointer" >
                                        info
                                    </span>
                                    {passwordInfo && (
                                        <InfoPopUp>
                                            minimum 8 characters, must include uppercase, lowercase, and a number!
                                        </InfoPopUp>
                                    )}
                                </label>
                                {passwordError && (
                                    <div className="text-sm text-right">
                                        <p className="text-red-500 dark:text-red-400 text-right">
                                            Please enter a valid password!
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center mt-2 relative">
                                <span
                                    className="material-symbols-outlined absolute right-3 text-gray-500 dark:text-gray-300 cursor-pointer"
                                    onClick={() => {
                                        setShowPass(!showPass)
                                    }}
                                >
                                    {showPass ? "visibility" : "visibility_off"}
                                </span>
                                <input
                                    className="block w-full rounded-md bg-gray-200 dark:bg-white/5 px-3 py-1.5 text-base dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    id="password"
                                    name="password"
                                    required
                                    type={showPass ? "text" : "password"}
                                    placeholder="⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕"
                                    {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full outline-none cursor-pointer justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                {loginCard ? "Login" : "SignUp"}
                            </button>
                        </div>

                    </form>

                    <p className="mt-6 text-center text-sm/6 text-gray-400">
                        {loginCard ? "Not a member?" : "Alrady have an account? "}{' '}
                        <button
                            className="cursor-pointer outline-none font-semibold text-indigo-400 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={() => {
                                setLoginCard(!loginCard)
                            }}
                        >
                            {loginCard ? "Sign Up!" : "Login!"}
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}

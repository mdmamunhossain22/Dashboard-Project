import { useDispatch, useSelector } from "react-redux"
import { ViteFavicon_SVG } from "../../public";
import { Link } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InfoPopUp from "../UI/InfoPopUp";


const SignInForm = () => {

  const [Emailerr, setEmailerr] = useState(false)
  const [Passworderr, setPassworderr] = useState(false)
  const [emailInfo, setEmailInfo] = useState(false)
  const [passwordInfo, setPasswordInfo] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    if (data.email && data.password) {
      setValue("email", "")
      setValue("password", "")
      setEmailerr(false)
      setPassworderr(false)
    }
  }

  const onError = (errors) => {
    console.log(errors)
    errors.email ? setEmailerr(true) : setEmailerr(false)
    errors.password ? setPassworderr(true) : setPassworderr(false)
  }


  return (
    <div className="flex flex-col w-sm max-md:w-full items-center gap-4 p-6 rounded-lg">

      <div className="flex flex-col gap-1.5 w-full">
        <div className="flex items-center justify-center">
          <img src={ViteFavicon_SVG} alt="Vite Logo" />
        </div>
        <h1 className="text-4xl text-center font-semibold text-gray-800 dark:text-white">
          Sign In
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">Enter your email and password to sign in!</p>
      </div>

      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit, onError)}>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
              <span className="text-red-500">{" * "}</span>
            </label>
            <div className="relative">
              <div onMouseOver={() => setEmailInfo(true)} onMouseLeave={() => setEmailInfo(false)}
                className="flex items-center justify-center select-none px-2 text-gray-500 dark:text-gray-400 cursor-pointer">
                <span className="material-symbols-outlined select-none">info</span>
              </div>
              {emailInfo &&
                <InfoPopUp className={"top-2 right-10"}>
                  Must be a valid email in the format: example123@email.com [ min-10 characters, must include "@" and "." ]
                </InfoPopUp>
              }

            </div>
          </div>

          <input
            type="email"
            id="email"
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
            placeholder="example123@email.com"
          />
          {Emailerr && (
            <label htmlFor="email" className="text-sm text-red-500">
              Please enter a valid email address!
            </label>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
              <span className="text-red-500">{" * "}</span>
            </label>
            <div className="relative">
              <div onMouseOver={() => setPasswordInfo(true)} onMouseLeave={() => setPasswordInfo(false)}
                className="flex items-center justify-center select-none px-2 text-gray-500 dark:text-gray-400 cursor-pointer">
                <span className="material-symbols-outlined select-none">info</span>
              </div>
              {passwordInfo &&
                <InfoPopUp className={"top-2 right-10"}>
                  Must be a valid password in the format: [ min-8 characters, must include lowercase, uppercase, and number ]
                </InfoPopUp>
              }
            </div>
          </div>
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
          {Passworderr && (
            <label htmlFor="password" className="text-sm text-red-500">
              Please enter a valid password!
            </label>
          )}
        </div>

        <button
          type="submit"
          className=" bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md cursor-pointer transition duration(15) ease-in-out"
        >
          Sign In
        </button>

      </form>

      <div className="">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:text-indigo-600">Sign Up</Link>
        </p>
      </div>

    </div>
  )
}

export default SignInForm
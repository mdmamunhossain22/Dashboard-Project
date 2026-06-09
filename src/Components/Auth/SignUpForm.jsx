import { useDispatch, useSelector } from "react-redux"
import { ViteFavicon_SVG } from "../../public";
import { Link } from "react-router";
import { useState } from "react";
import { set, useForm } from "react-hook-form";


const SignUpForm = () => {

  const [arr, setArr] = useState([
    {
      email: "aadfasdf@dfa.ghh",
      password: "asdfAsADS12"
    }
  ])


  const [emailErr, setEmailerr] = useState(false)
  const [passwordErr, setPassworderr] = useState(false)
  const [fullNameErr, setFullNameerr] = useState(false)
  const [userNameErr, setUserNameerr] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = (data) => {
    if (data) {
      setArr(prev => [...prev, data])
      console.log(arr)
      setValue("fullName", "")
      setValue("userName", "")
      setValue("email", "")
      setValue("password", "")
      setEmailerr(false)
      setPassworderr(false)
      setFullNameerr(false)
      setUserNameerr(false)
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
    <div className="flex flex-col items-center justify-center w-lg h-screen max-md:w-full gap-4 p-6 rounded-lg overflow-y-auto no-scrollbar">

      <div className="flex flex-col gap-1.5 w-full">
        <div className="flex items-center justify-center">
          <img src={ViteFavicon_SVG} alt="Vite Logo" />
        </div>
        <h1 className="text-4xl text-center font-semibold text-gray-800 dark:text-white">
          Sign Up
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">Create a new account to get started!</p>
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



        <button
          type="submit"
          className=" bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md cursor-pointer transition duration(15) ease-in-out"
        >
          Sign Up
        </button>

      </form>

      <div className="">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-indigo-500 hover:text-indigo-600">Sign In</Link>
        </p>
      </div>

    </div>
  )
}

export default SignUpForm
import { SignInForm } from "../../Components/index";
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../Store/Features/ThemeSlice";

const SignInPage = () => {

  const theme = useSelector((state) => state.theme.theme)

  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-center p-4 h-screen w-screen bg-white dark:bg-gray-900">

      <button
        className="absolute top-4 right-4 flex justify-center items-center cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 p-4 dark:text-gray-300 text-gray-800 dark:hover:bg-gray-600 hover:bg-gray-300"
        onClick={() => dispatch(toggleTheme())}
      >
        <span className="material-symbols-outlined">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
      </button>

      <SignInForm />

    </div>
  )
}

export default SignInPage
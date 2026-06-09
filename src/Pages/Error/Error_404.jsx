import { Link } from "react-router";
import { Err_404 } from "../../public/index";

const Error_404 = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">

      <div className="flex flex-col items-center w-fit">
        <h1 className="mb-8 font-bold text-7xl max-md:text-4xl text-gray-800 dark:text-white/90">ERROR</h1>
        <img src={Err_404} alt="" className=" max-md:h-20" />
        <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">We can’t seem to find the page you are looking for!</p>
        <Link to={"/dashboard"} className="flex items-center justify-center rounded-lg font-medium text-sm text-gray-700 dark:text-gray-400 shadow-xs dark:hover:bg-gray-600 hover:bg-gray-100 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3.5" >Back to Home Page</Link>
      </div>

    </div>
  )
}

export default Error_404
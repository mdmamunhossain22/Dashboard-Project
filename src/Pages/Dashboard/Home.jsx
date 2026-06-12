import { useSelector } from "react-redux"
import { DataColumn, WebLinks } from "../../Components"
import Switch from "../../Components/UI/Switch"


const Home = () => {

  const userData = useSelector(state => state.userData.userData)

  return (
    <div className="flex flex-col pb-20 gap-5 w-full ">

      <div className="">
        <h2 className="text-xl capitalize font-medium text-gray-700 dark:text-gray-300">Hi! {userData.fullname} Welcome Back To {userData.role} Dashboard!</h2>
      </div>
      
      <DataColumn />

      <WebLinks />

    </div>
  )
}

export default Home
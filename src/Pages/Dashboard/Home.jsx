import { DataColumn, WebLinks } from "../../Components"
import Switch from "../../Components/UI/Switch"


const Home = () => {
  return (
    <div className="flex flex-col pb-20 gap-5 w-full ">

      <div className="">
        <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300">Hi! {"Forid"} Welcome Back To {"Admin"} Dashboard!</h2>
      </div>
      
      <DataColumn />

      <WebLinks />

    </div>
  )
}

export default Home
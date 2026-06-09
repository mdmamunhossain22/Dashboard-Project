import { ProfileCard } from "../../Components/index"


const UserProfile = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full ">

      <div className="w-full">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">User Profile</h2>
      </div>

      <ProfileCard />

    </div>
  )
}

export default UserProfile
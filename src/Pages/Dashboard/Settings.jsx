import { SettingsLayout } from "../../Components"


const Settings = () => {
  return (
    <div className="flex flex-col gap-5 w-full">

      <div className="w-full">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">Account Settings</h2>
      </div>

      <SettingsLayout />

    </div>
  )
}

export default Settings
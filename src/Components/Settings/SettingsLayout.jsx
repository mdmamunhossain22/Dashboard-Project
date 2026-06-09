import { useState } from "react";
import ChangePassword from "./ChangePassword"
import ProfileOverview from "./ProfileOverview"
import Security from "./Security"
import { useDispatch, useSelector } from "react-redux";
import { setSettingsActiveTab } from "../../Store/Features/SettingsSlice"

const settingTabs = [
    {
        name: 'Profile Overview',
        component: <ProfileOverview />
    },
    {
        name: 'Security',
        component: <Security />
    },
    {
        name: 'Change Password',
        component: <ChangePassword />
    }
];

const SettingsLayout = () => {

    const activeTab = useSelector(state => state.settings.settingsActiveTab)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col gap-3 w-full p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl">
            <div className="">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Settings</h3>
            </div>

            <div className="flex flex-col gap-4 w-full">

                <div className="flex max-md:flex-col items-center w-full border-b border-gray-300 dark:border-gray-700">
                    {settingTabs.map((tab) => {
                        return (
                            <button key={tab.name} onClick={() => dispatch(setSettingsActiveTab(tab.name)) }
                                className={`flex items-center justify-center max-md:w-full px-3 py-2 text-md font-medium ${activeTab === tab.name ? "text-blue-700 dark:text-blue-200 bg-blue-200 dark:bg-blue-700/30 max-md:border-l-2 lg:border-t-2 border-blue-600" : "text-gray-800 dark:text-gray-200" }  cursor-pointer`}>
                                {tab.name}
                            </button>
                        )
                    })}
                </div>

                <div className="">

                    {settingTabs.map((tab)=>{
                        return (
                            <div key={tab.name}>
                                {activeTab === tab.name ?  tab.component : null}
                            </div>
                        )
                        
                    })}

                </div>

            </div>


        </div>
    )
}

export default SettingsLayout
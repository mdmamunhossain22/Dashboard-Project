import { Outlet } from "react-router"
import { Provider } from 'react-redux'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import databaseService from "../Lib/database.js"
import { setImageUrl, setUserData } from "../Store/Features/UserDataSlice.js"
import storageService from "../Lib/storage.js"


const RootLayout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userData.userData)

    useEffect(() => {
        const session = localStorage.getItem("session")
        session ? navigate("/dashboard") : navigate("/signin")
        if (session) {
            const currentSession = JSON.parse(session)
            async function getData() {
                const userData = await databaseService.getUserData(currentSession.userId)
                if (userData.profilepictureid) {
                    const imageUrl = await storageService.getImageView(userData.profilepictureid)
                    // console.log(imageUrl)
                    imageUrl && await dispatch(setImageUrl(imageUrl))
                }

                const newUserData = {
                    id: userData.$id,
                    fullname: userData.fullname,
                    username: userData.username,
                    email: userData.email,
                    role: userData.role,
                    phone: userData.phone,
                    bio: userData.bio,
                    verified: userData.verified,
                    password: userData.password,
                    profilepictureid: userData.profilepictureid,
                }

                userData && dispatch(setUserData(newUserData))
                await console.log(userData, "serverData")
            }
            getData()
        }
    }, [])



    return (
        <div className="h-screen w-screen bg-white dark:bg-gray-900 overflow-y-auto">
            <Outlet />
        </div>
    )
}

export default RootLayout
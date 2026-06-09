import { Outlet } from "react-router"
import { Provider } from 'react-redux'
import { store } from '../Store/store.js'
import { useEffect } from "react"
import { useNavigate } from "react-router"


const RootLayout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is authenticated
        navigate('/signin');
    }, []);

    return (
        <div className="h-screen w-screen bg-white dark:bg-gray-900 overflow-y-auto">
            <Outlet />
        </div>
    )
}

export default RootLayout
import { Outlet } from "react-router"
import { Provider } from 'react-redux'
import { store } from '../Store/store.js'
import { useEffect } from "react"
import { useNavigate } from "react-router"


const RootLayout = () => {

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (false) {
    //         navigate('/signin');
    //     }else {
    //         navigate('/dashboard');
    //     }
    // }, []);

    return (
        <div className="h-screen w-screen bg-white dark:bg-gray-900 overflow-y-auto">
            <Outlet />
        </div>
    )
}

export default RootLayout
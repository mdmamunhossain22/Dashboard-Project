import { useDispatch, useSelector } from "react-redux";
import AddWebLinkForm from "../Forms/AddWebLinkForm";
import { Modal } from "../UI/Modal/Modal";
import { setWebFormIsOpen , deleteWebLink } from '../../Store/Features/HomePageSlice'


const WebLinks = () => {

    const webFormIsOpen = useSelector(state => state.home.webFormIsOpen)
    const webLinks = useSelector(state => state.home.WebLinks)

    const dispatch = useDispatch()

    return (
        <div className="flex flex-col p-4 w-full rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">

            <div className="flex items-center justify-between pb-4 border-b border-gray-300 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Website Links</h2>
                <div className="">
                    <button onClick={()=> dispatch(setWebFormIsOpen())}
                    className="w-full text-sm bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md cursor-pointer transition duration(15) ease-in-out">
                        Add
                    </button>
                </div>
            </div>

            <Modal isOpen={webFormIsOpen} className={"flex items-center justify-center px-3 max-md:w-full "} showCloseButton={false} >
                <AddWebLinkForm />
            </Modal>

            <div className="flex flex-col gap-2 py-3">
                {/* Web links content will go here */}

                {webLinks.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 text-center py-5">No web links added yet.</p>
                ) : 
                webLinks.map((link) => (
                    <div key={link.id} className="flex items-center justify-between py-2 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <div className="flex items-center gap-3 text-gray-800 dark:text-gray-300">
                        <button title="Visit Link"
                        className="flex items-center justify-center p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                            <span className="material-symbols-outlined">link_2</span>
                        </button>
                        <h3 className="font-medium">{link.name}</h3>
                        <p className="text-xs max-md:hidden">{link.url}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button title="Copy Link"
                        className="flex items-center justify-center p-1 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                            <span className="material-symbols-outlined">content_copy</span>
                        </button>
                        <button title="Delete Link"
                        className="flex items-center justify-center p-1 rounded-full text-gray-100 hover:text-white bg-red-500 hover:bg-red-600 cursor-pointer"
                        onClick={() => dispatch(deleteWebLink(link.id))}
                        >
                            <span className="material-symbols-outlined">delete_forever</span>
                        </button>
                    </div>
                </div>
                )) 
                }

                

                

            </div>

        </div>
    )
}

export default WebLinks

/*
 * WebLinks Component

<div className="flex items-center justify-between py-2 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <div className="flex items-center gap-3 text-gray-800 dark:text-gray-300">
                        <button title="Visit Link"
                        className="flex items-center justify-center p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                            <span className="material-symbols-outlined">link_2</span>
                        </button>
                        <h3 className="font-medium">Website 2</h3>
                        <p className="text-xs max-md:hidden">https://react-demo.tailadmin.com/analytics</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button title="Copy Link"
                        className="flex items-center justify-center p-1 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                            <span className="material-symbols-outlined">content_copy</span>
                        </button>
                        <button title="Delete Link"
                        className="flex items-center justify-center p-1 rounded-full text-gray-100 hover:text-white bg-red-500 hover:bg-red-600 cursor-pointer">
                            <span className="material-symbols-outlined">delete_forever</span>
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between py-2 px-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <div className="flex items-center gap-3 text-gray-800 dark:text-gray-300">
                        <button title="Visit Link"
                        className="flex items-center justify-center p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                            <span className="material-symbols-outlined">link_2</span>
                        </button>
                        <h3 className="font-medium">Website 3</h3>
                        <p className="text-xs max-md:hidden">https://react-demo.tailadmin.com/analytics</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button title="Copy Link"
                        className="flex items-center justify-center p-1 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                            <span className="material-symbols-outlined">content_copy</span>
                        </button>
                        <button title="Delete Link"
                        className="flex items-center justify-center p-1 rounded-full text-gray-100 hover:text-white bg-red-500 hover:bg-red-600 cursor-pointer">
                            <span className="material-symbols-outlined">delete_forever</span>
                        </button>
                    </div>
                </div>
 */
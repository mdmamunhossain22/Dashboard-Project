import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { setWebFormIsOpen , addWebLink } from '../../Store/Features/HomePageSlice'
import { useDispatch , useSelector } from "react-redux"

const AddWebLinkForm = () => {

    const { register, handleSubmit, setValue } = useForm()
    const webLinks = useSelector(state => state.home.WebLinks)
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(data)
        dispatch(addWebLink({
            id: Date.now(),
            name: data.websitename,
            url: data.weblink
        }))
        setValue("weblink" , "")
        setValue("websitename" , "")
        dispatch(setWebFormIsOpen())
    }

    const onError = (errors) => {
        console.log(errors)
        errors && alert("Please Enter a Valid WebSite Link and a WebSite Name")
    }

    useEffect(() => {
        console.log(webLinks)
    }, [webLinks])

    return (
        <div className="flex items-center justify-center max-md:w-xs w-sm max-md:p-4 p-7 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
            <form onSubmit={handleSubmit(onSubmit, onError)}
                className="flex flex-col items-center gap-4 w-full">

                    <div className="">
                        <h2 className=" max-md:text-xl text-2xl font-semibold text-gray-800 dark:text-gray-100">Add WebSite</h2>
                    </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        WebSite Name
                    </label>
                    <input type="text"
                        id="WebsiteName"
                        name="WebsiteName"
                        {...register("websitename", { required: true, minLength: 3 })}
                        placeholder="Enter Website Name"
                        className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="link" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        WebSite Link
                    </label>
                    <input type="text"
                        id="WebLink"
                        name="WebLink"
                        {...register("weblink", { required: true, minLength: 10 })}
                        placeholder="http://localhost:5173/dashboard/contact"
                        className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                    />
                </div>

                <div className="flex w-full gap-3">
                    <button type="submit"
                        className="w-full text-sm bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md cursor-pointer transition duration(15) ease-in-out">
                        Add
                    </button>
                    <button onClick={(e)=>{e.preventDefault(); dispatch(setWebFormIsOpen())}}
                        className="w-full text-sm text-blue-500 border border-blue-500 font-medium py-2 px-4 rounded-md cursor-pointer transition duration(15) ease-in-out">
                        Close
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AddWebLinkForm
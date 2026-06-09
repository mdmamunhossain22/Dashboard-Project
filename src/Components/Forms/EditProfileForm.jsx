import { useDispatch } from "react-redux"
import { useRef, useState } from 'react';
import { toggleProfileForm } from "../../Store/Features/UserProfileSlice"
import { set } from "react-hook-form";


const EditProfileForm = () => {

    const fileInputRef = useRef(null);
    const dispatch = useDispatch()
    const [imageInput, setImageInput] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        file && setImageInput(file.name)
        if (file && file.type.startsWith('image/')) {
            // Create a temporary local URL for the image
            const localUrl = URL.createObjectURL(file);
            setPreviewUrl(localUrl);
        }
    };

    return (
        <div className="w-fit max-md:p-5 px-8 py-6 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900">

            <div className="flex items-center justify-between gap-5 mb-5">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl max-md:text-xl font-semibold text-gray-900 dark:text-gray-100">Edit Personal Information</h2>
                    <p className="text-gray-500 text-sm">Update your details to keep your profile up-to-date.</p>
                </div>
                <div className="flex justify-end items-start">
                    <button onClick={() => dispatch(toggleProfileForm())}
                        className="flex items-center justify-center p-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded-full cursor-pointer">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>

            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <h2 className="text-lg text-gray-800 dark:text-gray-200">Change Profile Picture</h2>
                    <div className="relative w-fit flex">
                        <div className=" size-24 max-md:size-20 rounded-full overflow-hidden">
                            <img src={previewUrl || "https://freepngdownload.com/image/thumb/number-1-png-free-download-16.png"} alt="" className="h-full w-full" />
                        </div>
                        <div className="flex items-center max-md:w-52 w-60 ml-8">
                            <p className="text-sm text-gray-600 dark:text-gray-400">{imageInput || "Upload a square image (200×200 px) in JPEG or PNG format."}</p>
                        </div>
                        <input ref={fileInputRef} onChange={handleImageChange} className="hidden" type="file" name="Upload_Photo" id="Upload_Photo" />
                        <button onClick={(e) => { e.preventDefault(); fileInputRef.current?.click(); }}
                            className="absolute bottom-0 left-16 max-md:left-14 flex items-center justify-center cursor-pointer p-1 rounded-full text-gray-600 bg-gray-300 dark:text-gray-300 dark:bg-gray-600">
                            <span className="material-symbols-outlined">add_photo_alternate</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg text-gray-800 dark:text-gray-200">Personal Information</h3>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                            <input type="text" name="full-name" id="full-name" placeholder="Example Name"
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">UserName</label>
                            <input type="text" name="username" id="username" placeholder="@example123"
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input type="email" name="email" id="email" placeholder="example123@domain.com"
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                            <input type="text" name="phone" id="phone" placeholder="+880 1234-567890"
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
                        <input type="text" name="bio" id="bio" placeholder="Tell us about yourself..."
                            className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2" />
                    </div>
                </div>
            </form>

            <div className="flex items-center justify-end gap-4 mt-6">
                <button onClick={() => dispatch(toggleProfileForm())}
                    className="text-sm px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 cursor-pointer">Close</button>
                <button onClick={() => dispatch(toggleProfileForm())}
                className="text-sm px-4 py-2.5 rounded-lg bg-indigo-500 text-gray-50 cursor-pointer">Save Changes</button>
            </div>

        </div>
    )
}

export default EditProfileForm
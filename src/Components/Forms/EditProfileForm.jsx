import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from 'react';
import { toggleProfileForm } from "../../Store/Features/UserProfileSlice"
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { setImageUrl, setUserData } from "../../Store/Features/UserDataSlice";
import storageService from "../../Lib/storage";
import databaseService from "../../Lib/database";


const EditProfileForm = () => {

    const userData = useSelector((state) => state.userData.userData)
    console.log(userData)

    const fileInputRef = useRef(null);
    const [imageInput, setImageInput] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const dispatch = useDispatch()
    const { register, handleSubmit, setValue } = useForm()

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        file && setImageInput(file.name)
        if (file && file.type.startsWith('image/')) {
            // Create a temporary local URL for the image
            const localUrl = URL.createObjectURL(file);
            setPreviewUrl(localUrl);
        }
    };

    const onSubmit = async (data) => {
        // console.log(data)
        if (data.fullName && data.userName && data.email && data.phone) {


            let newData = {
                id: userData.id,
                fullname: data.fullName,
                username: data.userName,
                role: userData.role,
                email: data.email,
                phone: data.phone,
                bio: data.bio,
                verified: false,
                password: userData.password,
                profilepictureid: userData.profilepictureid,
            }

            if (previewUrl) {

                if (userData.profilepictureid) {
                    async function update() {
                        const res = await storageService.updateImage(userData.profilepictureid, "Upload_Photo")
                        await console.log(res, "update res")
                        if (res) {
                            newData = {
                                id: userData.id,
                                fullname: data.fullName,
                                username: data.userName,
                                role: userData.role,
                                email: data.email,
                                phone: data.phone,
                                bio: data.bio,
                                verified: false,
                                password: userData.password,
                                profilepictureid: res.$id,
                            }
                            const imageUrl = await storageService.getImageView(res.$id)
                            imageUrl && await dispatch(setImageUrl(imageUrl))
                            console.log(newData, "update newData")
                            const responce = await databaseService.updateUserData(newData)
                            responce && console.log(responce, "after update image data from server")
                        }
                    }
                    update()
                } else {
                    async function upload() {
                        const res = await storageService.upLoadImage("Upload_Photo")
                        await console.log(res, "upload")
                        if (res) {
                            newData = { ...newData, profilepictureid: res.$id }
                            const imageUrl = await storageService.getImageView(res.$id)
                            imageUrl && await dispatch(setImageUrl(imageUrl))
                            console.log(newData, "upload")
                            const responce = await databaseService.updateUserData(newData)
                            responce && console.log(responce, "after upload image data from server")
                        }
                    }
                    upload()
                }
            }



            const respomse = await databaseService.updateUserData(newData)
            respomse && console.log(respomse, "without upload image data from server")

            respomse && dispatch(setUserData(newData))
            setValue("fullName", "")
            setValue("userName", "")
            setValue("email", "")
            setValue("bio", "")
            setValue("phone", "")
            dispatch(toggleProfileForm())
        }
    }

    const onError = (errors) => {
        console.log(errors)
        errors.fullName && toast.error("Full Name should be between 4 and 40 characters.")
        errors.userName && toast.error("User Name should be between 8 and 30 characters, and must start with '@'.")
        errors.email && toast.error("A valid Email is required , must include '@' and '.com' ")
        errors.phone && toast.error("Phone number should be between 11 and 13 digits.")
    }

    useEffect(() => {
        if (userData) {
            setValue("fullName", userData.fullname)
            setValue("userName", userData.username)
            setValue("email", userData.email)
            setValue("bio", userData.bio)
            setValue("phone", userData.phone)
        }
    }, [])

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

            <Toaster position="top-right" reverseOrder={false} />

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit, onError)} >

                <div className="flex flex-col gap-3">
                    <h2 className="text-lg text-gray-800 dark:text-gray-200">Change Profile Picture</h2>
                    <div className="relative w-fit flex">
                        <div className=" size-24 max-md:size-20 rounded-full overflow-hidden">
                            <img src={previewUrl || userData.imageurl} alt="" className="h-full w-full" />
                        </div>
                        <div className="flex items-center max-md:w-52 w-60 ml-8">
                            <p className="text-sm text-gray-600 dark:text-gray-400">{imageInput || "Upload a square image (200×200 px) (1 : 1) in JPEG or PNG format."}</p>
                        </div>

                        <input
                            className="hidden"
                            ref={fileInputRef}
                            id="Upload_Photo"
                            name="Upload_Photo"
                            type="file"
                            accept="image/jpeg, image/png, image/jpg, image/webp, .jpeg, .png, .jpg, .webp"
                            onChange={handleImageChange}
                        />

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
                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Full Name <span className="text-red-500">{" * "}</span>
                            </label>

                            <input
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                                type="text"
                                name="full-name"
                                id="full-name"
                                placeholder="Example Name"
                                {...register("fullName", { required: true, minLength: 4, maxLength: 40 })}
                            />

                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                UserName <span className="text-red-500">{" * "}</span>
                            </label>

                            <input
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="@example123"
                                {...register("userName", { required: true, minLength: 8, maxLength: 30, pattern: /^@.+$/ })}
                            />

                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email <span className="text-red-500">{" * "}</span>
                            </label>

                            <input
                                className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example123@domain.com"
                                {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                            />

                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Phone <span className="text-red-500">{" * "}</span>
                            </label>

                            <div className=" relative flex items-center w-56 max-md:w-full" >
                                <span className=" absolute left-2 text-sm text-gray-700 dark:text-gray-300">+880</span>
                                <input
                                    className="h-11 w-full rounded-lg appearance-none pl-11 pr-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="1234-567890"
                                    {...register("phone", { required: true, minLength: 10, maxLength: 10, pattern: /^\+?\d{10,11}$/ })}
                                />
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Bio
                        </label>

                        <input
                            className="h-11 w-full rounded-lg appearance-none px-4 py-2.5 text-sm shadow-xs placeholder:text-gray-400 focus:outline-hidden  dark:bg-gray-900 dark:placeholder:text-white/30  bg-transparent text-gray-800 focus:border-brand-300 focus:ring-indigo-500/20 dark:text-white/90  dark:focus:border-indigo-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2"
                            type="text"
                            name="bio"
                            id="bio"
                            placeholder="Tell us about yourself..."
                            {...register("bio", { maxLength: 160 })}
                        />

                    </div>

                </div>

                <div className="flex items-center justify-end gap-4 mt-2">
                    <button
                        onClick={(e) => { e.preventDefault(); dispatch(toggleProfileForm()) }}
                        className="text-sm px-4 py-2.5 rounded-lg text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 cursor-pointer"
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        className="text-sm px-4 py-2.5 rounded-lg bg-indigo-500 text-gray-50 cursor-pointer"
                    >
                        Save Changes
                    </button>
                </div>
            </form>



        </div>
    )
}

export default EditProfileForm
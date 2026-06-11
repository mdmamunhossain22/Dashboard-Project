import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {
    id: 1,
    fullname: "Musharof Chowdhury",
    username: "@musharofchowdhury",
    email: "musharofchowdhury@example.com",
    role: "Admin",
    phone: 8801793795346 ,
    bio: "software developer with a passion for creating amazing user experiences.",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      zip: "1207",
      street: "123 Main Street",
    },
    verified: true,
    password: "hashed_password_123",
    profilepicture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log(action.payload)
      const { fullname, username , email , phone , bio , profilepicture } = action.payload;
      state.userData = { ...state.userData, fullname, username, email, phone, bio , profilepicture };
    }
  }
})

export const { setUserData } = userDataSlice.actions
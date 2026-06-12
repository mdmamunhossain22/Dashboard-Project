import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {
    id: 1,
    fullname: "Musharof Chowdhury",
    username: "@musharofchowdhury",
    email: "musharofchowdhury@example.com",
    role: "admin",
    phone: 1793795346 ,
    bio: "software developer with a passion for creating amazing user experiences.",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      zip: "1207",
      street: "123 Main Street",
    },
    verified: true,
    password: "hashed_password_123",
    imageurl: null,
    profilepictureid: null,
  },
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // console.log(action.payload)
      const { id , fullname, username , email , role , phone , bio , verified , password , profilepictureid } = action.payload;
      state.userData = { ...state.userData , id: id , fullname, username , email , role , phone , bio , verified , password , profilepictureid };
    },
    setImageUrl: (state, action) => {
      state.userData = {...state.userData , imageurl: action.payload}
    }
  }
})

export const { setUserData , setImageUrl } = userDataSlice.actions
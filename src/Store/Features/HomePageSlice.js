import { createSlice } from '@reduxjs/toolkit'
import { WebLinks } from '../../Components'

const initialState = {
  webFormIsOpen: false,
  WebLinks: [
    {
      id: 1,
      name: 'Website 1',
      url: 'https://fonts.google.com/icons?selected=Material+Symbols+Outlined:close:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e3e3e3'
    },
    {
      id: 2,
      name: 'Website 2',
      url: 'https://react-demo.tailadmin.com/analytics'
    },
    {
      id: 3,
      name: 'Website 3',
      url: 'https://react-demo.tailadmin.com/analytics'
    }
  ]
}

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setWebFormIsOpen: (state) => {
      state.webFormIsOpen = !state.webFormIsOpen
    },
    addWebLink: (state, action) => {
      state.WebLinks.push(action.payload)
    },
    deleteWebLink: (state, action) => {
      state.WebLinks = state.WebLinks.filter(link => link.id !== action.payload)
    }
  }
})

export const { setWebFormIsOpen, addWebLink, deleteWebLink } = homePageSlice.actions
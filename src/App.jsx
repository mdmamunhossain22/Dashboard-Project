import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import AppLayout from "./Layout/AppLayout";
import RootLayout from "./Layout/RootLayout";
import { Home, Settings, SignInPage, SignUpPage, UserProfile, UsersList, Notifications, ContactUsPage, Error_404 } from "./Pages";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="dashboard" element={<AppLayout />} >
          <Route index element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="*" element={<Error_404 />} />
        </Route>
        <Route path="*" element={<Error_404 />} />
      </Route>
    )
  )

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-gray-900 overflow-y-auto">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
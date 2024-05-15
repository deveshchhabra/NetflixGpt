import React from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
// import { onAuthStateChanged } from "firebase/auth"
// import { auth } from '../utils/firebase.js'
// import { useDispatch, useSelector } from 'react-redux'
// import { addUser, removeUser } from '../utils/userSlice.js'
const Body = () => {
  
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login />,
    },
    {
      path:"/browse",
      element:<Browse />,
    }
  ],
)

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

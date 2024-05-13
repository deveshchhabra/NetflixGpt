import React, { useEffect } from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../utils/firebase.js'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice.js'
const Body = () => {
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
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
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
     
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
    }
  });
}, []);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

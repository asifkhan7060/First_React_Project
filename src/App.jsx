import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  //console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID); check wheter we getting our project id in console or not 

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch() // useDispatch is a hook that allows us to dispatch(to send) state and UserData to the Redux store. 

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {  //This userData is obtained from appwrite server
      if (userData) {
        dispatch(login({userData})) // dispatching means here we informing the store that login action has occured with userData..so the state and userData is sended to the store
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false)) // finally we are setting loading to false
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO : <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

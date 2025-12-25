import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()  // useDispatch is a hook that allows us to dispatch(to send) state and UserData to the Redux store.
    const logoutHandler = () => {
        authService.logout().then(() => {   //then is used to handle the promise returned by logout function
            dispatch(logout())  //logout action is dispatched (sends) to the store
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn